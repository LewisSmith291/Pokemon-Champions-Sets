import { Router } from "express";
import type { Request, Response } from "express";
import { db } from "../db/index.js";
import { and, asc, desc, eq, inArray, sql } from "drizzle-orm";
import { pokemonSet, setMoves, setTags, setVotes, user } from "../db/schema.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { createSetSchema, listSetsSchema } from "../schemas/set.js";
import { optionalAuth } from "../middleware/optionalAuth.js";

export const setsRouter = Router();

// A set's score is just how many vote rows point at it
async function countVotes(setId: string): Promise<number> {
  const [row] = await db
    .select({ votes: sql<number>`count(*)::int` })
    .from(setVotes)
    .where(eq(setVotes.setId, setId));
  return row?.votes ?? 0;
}
// requireAuth middleware
// Used to add sets to all appropriate db tables
setsRouter.post("/", requireAuth, async (req, res) => {
  const parsed = createSetSchema.safeParse(req.body);

  // return error response
  if (!parsed.success){
    return res.status(400).json({errors: parsed.error.issues});
  }

  // moves and tags go to own tables, rest goes to pokemon_set
  const {moves, tags, ...set} = parsed.data;
  // requireAuth guarantees req.user, but typescript cant see
  const userId = req.user!.id;

  try {
    // A set never exists with only some of its moves
    // All of them have to succeed, or else none do, otherwise this would fill some tables, and then not others if they failed
    // This is what a transaction ensures
    const created = await db.transaction(async (tx) => {
    // returning() gives back the inserted row, so this is stores in [row]
    const [row] = await tx.insert(pokemonSet).values({...set, userId}).returning(); // Insert set onto pokemonSet table

    await tx.insert(setMoves).values( // Insert moves onto setMoves table
      // Moves is enforced by zod
      moves.map((move,index) => ({setId: row.id, slot: index+1, move})) // Adds moves to setMoves table using map to get id, slot number, and move slug
    );

    if (tags.length > 0){ // If there are tags, insert onto tag table, otherwise .values will error if no tags
      await tx.insert(setTags).values( // Insert tags onto setTags table
        tags.map((tag) => ({setId: row.id, tag})),
      );
    }
    return row;
  });

  res.status(201).json({ set:created}); // 201 = created
  } catch (error){
    console.error("Failed to create set: ", error);
    res.status(500).json({error: "Could not create set"}); // 500 = failed
  }
});

// Public set list, powering the home page showcase.
// optionalAuth rather than requireAuth: anyone can read it, but a signed-in
// viewer also gets told which of these they have already voted on.
setsRouter.get("/", optionalAuth, async (req: Request, res: Response) => {
  const parsed = listSetsSchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.issues });
  }
  const { sort, limit } = parsed.data;

  // Counted once here and reused for both the sort and the payload
  const voteCount = sql<number>`count(${setVotes.setId})::int`;

  // Hacker News' gravity formula: a set needs steadily more votes to hold its
  // place as it ages, so "hot" keeps turning over without a scheduled job.
  const hotScore = sql`
    count(${setVotes.setId})::numeric
    / power(extract(epoch from (now() - ${pokemonSet.createdAt})) / 3600 + 2, 1.5)`;

  const orderBy =
    sort === "new"  ? [desc(pokemonSet.createdAt)] :
    sort === "best" ? [desc(voteCount), desc(pokemonSet.createdAt)] :
                      [desc(hotScore), desc(pokemonSet.createdAt)];

  try {
    // The relational db.query API can't order by an aggregate over a joined
    // table, so this one route drops to the core builder and stitches the moves
    // on afterwards. GET /:id below has no aggregate and keeps using db.query.
    const rows = await db
      .select({
        id: pokemonSet.id,
        // Lets a client tell "this is mine" - voting on your own set is refused
        userId: pokemonSet.userId,
        species: pokemonSet.species,
        form: pokemonSet.form,
        gender: pokemonSet.gender,
        ability: pokemonSet.ability,
        nature: pokemonSet.nature,
        item: pokemonSet.item,
        boostHp: pokemonSet.boostHp,
        boostAtk: pokemonSet.boostAtk,
        boostDef: pokemonSet.boostDef,
        boostSpAtk: pokemonSet.boostSpAtk,
        boostSpDef: pokemonSet.boostSpDef,
        boostSpe: pokemonSet.boostSpe,
        createdAt: pokemonSet.createdAt,
        // user.name only - email lives on the same table and must not ship
        authorName: user.name,
        voteCount,
      })
      .from(pokemonSet)
      .innerJoin(user, eq(user.id, pokemonSet.userId))
      .leftJoin(setVotes, eq(setVotes.setId, pokemonSet.id))
      .where(eq(pokemonSet.isPublic, true))
      // pokemonSet.id is the primary key so its own columns come along for free,
      // but user.name is from another table and has to be grouped explicitly
      .groupBy(pokemonSet.id, user.name)
      .orderBy(...orderBy)
      .limit(limit);

    const ids = rows.map((row) => row.id);
    if (ids.length === 0) {
      return res.json({ sets: [] });
    }

    // One query for every set's moves rather than one per set
    const moveRows = await db
      .select({ setId: setMoves.setId, slot: setMoves.slot, move: setMoves.move })
      .from(setMoves)
      .where(inArray(setMoves.setId, ids))
      .orderBy(asc(setMoves.slot));

    const movesBySet = new Map<string, string[]>();
    for (const row of moveRows) {
      const list = movesBySet.get(row.setId) ?? [];
      list.push(row.move);
      movesBySet.set(row.setId, list);
    }

    // Same one-query-for-all shape as the moves above - the card shows tags too
    const tagRows = await db
      .select({ setId: setTags.setId, tag: setTags.tag })
      .from(setTags)
      .where(inArray(setTags.setId, ids));

    const tagsBySet = new Map<string, string[]>();
    for (const row of tagRows) {
      const list = tagsBySet.get(row.setId) ?? [];
      list.push(row.tag);
      tagsBySet.set(row.setId, list);
    }

    // Which of these the viewer has voted on - empty for logged-out readers
    const viewerId = req.user?.id;
    const votedIds = new Set<string>();
    if (viewerId) {
      const voted = await db
        .select({ setId: setVotes.setId })
        .from(setVotes)
        .where(and(eq(setVotes.userId, viewerId), inArray(setVotes.setId, ids)));
      for (const row of voted) votedIds.add(row.setId);
    }

    res.json({
      sets: rows.map((row) => ({
        ...row,
        moves: movesBySet.get(row.id) ?? [],
        tags: tagsBySet.get(row.id) ?? [],
        hasVoted: votedIds.has(row.id),
      })),
    });
  } catch (error) {
    console.error("Failed to list sets: ", error);
    res.status(500).json({ error: "Could not load sets" });
  }
});

// Non authenticated viewer of sets
setsRouter.get("/:id", optionalAuth, async(req: Request<{id: string}>,res:Response) => {
  const set = await db.query.pokemonSet.findFirst({ 
    where: eq(pokemonSet.id, req.params.id),
    // Because of the relations block in set-schema.ts, set.moves and set.tags are arryas, and no manual joins are required
    with: { 
      // Rows have no order
      moves: {
        columns: {slot: true, move: true},
        orderBy: (m, {asc}) => [asc(m.slot)],
      },
      tags: {columns: {tag:true}},
      // name only - email is on the same table and must not reach the client
      user: {columns: {name: true}},
    },

  })

  // If no set can be found with pokemonSet.findFirst()
  if (!set){
    return res.status(404).json({error:"Set not found"});
  }

  // A private set is only visible to its owner
  // 404 is returned to not show that a set is unauthorised, looks like no set exists instead for security
  // req.user is undefined for logged-out viewers, so ?. yields undefined and the check denies
  // Need to be after if(!set) to make sure set is not undefined, as accessing .isPublic will error otherwise
  if (!set.isPublic && set.userId !== req.user?.id){
    return res.status(404).json({error:"Set not found"});
  }

  // Same two extras the list route reports, so a card and the set page agree
  const [voteCount, hasVoted] = await Promise.all([
    countVotes(set.id),
    req.user
      ? db.query.setVotes
          .findFirst({where: and(eq(setVotes.setId, set.id), eq(setVotes.userId, req.user.id))})
          .then((row) => row !== undefined)
      : Promise.resolve(false),
  ]);

  // moves and tags are flattened to plain slug arrays so this matches the shape
  // the list route returns and one client type covers both. `user` is dropped in
  // favour of authorName - it only ever held the name anyway.
  const {user: author, ...rest} = set;
  res.json({
    ...rest,
    moves: set.moves.map((row) => row.move),
    tags: set.tags.map((row) => row.tag),
    authorName: author.name,
    voteCount,
    hasVoted,
  });
});

// Voting is upvote-only, so the row's existence is the whole vote and there is
// no body to parse. Both handlers return the fresh count, saving the client a
// follow-up read.
setsRouter.post("/:id/vote", requireAuth, async (req: Request<{id: string}>, res: Response) => {
  const userId = req.user!.id;
  const setId = req.params.id;

  const target = await db.query.pokemonSet.findFirst({
    where: eq(pokemonSet.id, setId),
    columns: {id: true, isPublic: true, userId: true},
  });

  // A private set is invisible, so it 404s rather than 403s - same reasoning as
  // the GET above, don't confirm that an id someone guessed exists
  if (!target || !target.isPublic) {
    return res.status(404).json({error: "Set not found"});
  }
  if (target.userId === userId) {
    return res.status(403).json({error: "You cannot vote on your own set"});
  }

  try {
    // Idempotent: a double click, or a retry after a dropped response, is a no-op
    // rather than a primary key violation
    await db.insert(setVotes).values({setId, userId}).onConflictDoNothing();
    res.json({voteCount: await countVotes(setId), hasVoted: true});
  } catch (error) {
    console.error("Failed to record vote: ", error);
    res.status(500).json({error: "Could not record vote"});
  }
});

setsRouter.delete("/:id/vote", requireAuth, async (req: Request<{id: string}>, res: Response) => {
  const userId = req.user!.id;
  const setId = req.params.id;

  try {
    // No existence check needed - deleting a vote that isn't there affects no
    // rows, which is the state the caller asked for anyway
    await db.delete(setVotes).where(and(eq(setVotes.setId, setId), eq(setVotes.userId, userId)));
    res.json({voteCount: await countVotes(setId), hasVoted: false});
  } catch (error) {
    console.error("Failed to remove vote: ", error);
    res.status(500).json({error: "Could not remove vote"});
  }
});