import { Router } from "express";
import type { Request, Response } from "express";
import { db } from "../db/index.js";
import { and, asc, desc, eq, inArray, sql, type SQL } from "drizzle-orm";
import type { PgColumn } from "drizzle-orm/pg-core";
import { pokemonSet, setMoves, setSaves, setTags, setVotes, user } from "../db/schema.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { createSetSchema, listSetsSchema, publishSetSchema } from "../schemas/set.js";
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

// Counted once and reused for both sorting and the payload
const voteCount = sql<number>`count(${setVotes.setId})::int`;

// Hacker News' gravity formula: a set needs steadily more votes to hold its
// place as it ages, so "hot" keeps turning over without a scheduled job.
const hotScore = sql`
  count(${setVotes.setId})::numeric
  / power(extract(epoch from (now() - ${pokemonSet.createdAt})) / 3600 + 2, 1.5)`;

// Every route that returns a list of sets goes through here, so the showcase
// and My Sets hand the client exactly the same row shape and one SetCard renders
// both. The caller decides which sets (where), what order and how many.
//
// The relational db.query API can't order by an aggregate over a joined table,
// so this drops to the core builder and stitches moves and tags on afterwards.
// GET /:id has no aggregate and keeps using db.query.
async function querySets(options: {
  where: SQL | undefined;
  orderBy: SQL[] | PgColumn[] | (SQL | PgColumn)[];
  limit: number;
  /** Rows to skip first - Browse's page * page size */
  offset?: number;
  viewerId: string | undefined;
}) {
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
      // Always true on the public list, but My Sets mixes both
      isPublic: pokemonSet.isPublic,
      createdAt: pokemonSet.createdAt,
      updatedAt: pokemonSet.updatedAt,
      // user.name only - email lives on the same table and must not ship
      authorName: user.name,
      voteCount,
    })
    .from(pokemonSet)
    .innerJoin(user, eq(user.id, pokemonSet.userId))
    .leftJoin(setVotes, eq(setVotes.setId, pokemonSet.id))
    .where(options.where)
    // pokemonSet.id is the primary key so its own columns come along for free,
    // but user.name is from another table and has to be grouped explicitly
    .groupBy(pokemonSet.id, user.name)
    .orderBy(...options.orderBy)
    .limit(options.limit)
    .offset(options.offset ?? 0);

  const ids = rows.map((row) => row.id);
  if (ids.length === 0) return [];

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

  // Same one-query-for-all shape as the moves above
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
  const votedIds = new Set<string>();
  if (options.viewerId) {
    const voted = await db
      .select({ setId: setVotes.setId })
      .from(setVotes)
      .where(and(eq(setVotes.userId, options.viewerId), inArray(setVotes.setId, ids)));
    for (const row of voted) votedIds.add(row.setId);
  }

  // And which the viewer has saved, for the star on each card
  const savedIds = new Set<string>();
  if (options.viewerId) {
    const saved = await db
      .select({ setId: setSaves.setId })
      .from(setSaves)
      .where(and(eq(setSaves.userId, options.viewerId), inArray(setSaves.setId, ids)));
    for (const row of saved) savedIds.add(row.setId);
  }

  return rows.map((row) => ({
    ...row,
    moves: movesBySet.get(row.id) ?? [],
    tags: tagsBySet.get(row.id) ?? [],
    hasVoted: votedIds.has(row.id),
    hasSaved: savedIds.has(row.id),
  }));
}

// Public set list, powering the home page showcase.
// optionalAuth rather than requireAuth: anyone can read it, but a signed-in
// viewer also gets told which of these they have already voted on.
setsRouter.get("/", optionalAuth, async (req: Request, res: Response) => {
  const parsed = listSetsSchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.issues });
  }
  const { sort, limit, page, species, forms, items, tags } = parsed.data;

  const orderBy =
    sort === "new"  ? [desc(pokemonSet.createdAt)] :
    sort === "best" ? [desc(voteCount), desc(pokemonSet.createdAt)] :
                      [desc(hotScore), desc(pokemonSet.createdAt)];

  // Every filter is optional, and and() skips the undefined ones
  const where = and(
    eq(pokemonSet.isPublic, true),
    species.length > 0 ? inArray(pokemonSet.species, species) : undefined,
    forms.length > 0 ? inArray(pokemonSet.form, forms) : undefined,
    items.length > 0 ? inArray(pokemonSet.item, items) : undefined,
    // A set must carry EVERY selected tag, so each extra tag narrows the list.
    // Counting distinct matches per set and requiring all of them is what
    // turns "has any of these" into "has all of these".
    tags.length > 0
      ? inArray(
          pokemonSet.id,
          db.select({ id: setTags.setId })
            .from(setTags)
            .where(inArray(setTags.tag, tags))
            .groupBy(setTags.setId)
            .having(sql`count(distinct ${setTags.tag}) = ${tags.length}`),
        )
      : undefined,
  );

  try {
    const [sets, [{ total }]] = await Promise.all([
      querySets({ where, orderBy, limit, offset: (page - 1) * limit, viewerId: req.user?.id }),
      // Same filters, no paging - how many pages there are in total
      db.select({ total: sql<number>`count(*)::int` }).from(pokemonSet).where(where),
    ]);
    res.json({ sets, total, page });
  } catch (error) {
    console.error("Failed to list sets: ", error);
    res.status(500).json({ error: "Could not load sets" });
  }
});

// The signed-in user's own sets, private ones included.
// Registered before GET /:id on purpose - otherwise Express would match "mine"
// as a set id and this route would never be reached.
setsRouter.get("/mine", requireAuth, async (req: Request, res: Response) => {
  try {
    const sets = await querySets({
      where: eq(pokemonSet.userId, req.user!.id),
      // Most recently edited first, so a set you've just changed is at the top.
      // createdAt breaks ties between sets saved in the same instant.
      orderBy: [desc(pokemonSet.updatedAt), desc(pokemonSet.createdAt)],
      // A ceiling rather than paging for now - well past what anyone has yet
      limit: 500,
      viewerId: req.user!.id,
    });
    res.json({ sets });
  } catch (error) {
    console.error("Failed to list own sets: ", error);
    res.status(500).json({ error: "Could not load your sets" });
  }
});

// Other people's sets the signed-in user has saved, for My Sets' Saved tab.
// Like /mine, this has to come before GET /:id or "saved" is read as an id.
setsRouter.get("/saved", requireAuth, async (req: Request, res: Response) => {
  const userId = req.user!.id;
  try {
    const sets = await querySets({
      where: and(
        inArray(
          pokemonSet.id,
          db.select({ id: setSaves.setId }).from(setSaves).where(eq(setSaves.userId, userId)),
        ),
        // An author unpublishing a set hides it from savers too. The save row
        // is kept, so it reappears if the set is published again.
        eq(pokemonSet.isPublic, true),
      ),
      orderBy: [desc(pokemonSet.updatedAt), desc(pokemonSet.createdAt)],
      limit: 500,
      viewerId: userId,
    });
    res.json({ sets });
  } catch (error) {
    console.error("Failed to list saved sets: ", error);
    res.status(500).json({ error: "Could not load saved sets" });
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
  const [voteCount, hasVoted, hasSaved] = await Promise.all([
    countVotes(set.id),
    req.user
      ? db.query.setVotes
          .findFirst({where: and(eq(setVotes.setId, set.id), eq(setVotes.userId, req.user.id))})
          .then((row) => row !== undefined)
      : Promise.resolve(false),
    req.user
      ? db.query.setSaves
          .findFirst({where: and(eq(setSaves.setId, set.id), eq(setSaves.userId, req.user.id))})
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
    hasSaved,
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
// --- owner-only: edit, publish/unpublish, delete ---------------------------

// The row's owner and species, or null when it doesn't exist OR belongs to
// someone else. The routes below answer 404 in both cases, the same as the GET
// above does for a private set - a stranger shouldn't learn that an id exists.
async function ownedSet(setId: string, userId: string) {
  const row = await db.query.pokemonSet.findFirst({
    where: eq(pokemonSet.id, setId),
    columns: {id: true, userId: true, species: true},
  });
  return row && row.userId === userId ? row : null;
}

// Replaces the whole set. Same body as POST, same all-or-nothing transaction.
setsRouter.put("/:id", requireAuth, async (req: Request<{id: string}>, res: Response) => {
  const parsed = createSetSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({errors: parsed.error.issues});
  }

  const existing = await ownedSet(req.params.id, req.user!.id);
  if (!existing) {
    return res.status(404).json({error: "Set not found"});
  }

  const {moves, tags, ...set} = parsed.data;
  const setId = existing.id;

  // A set's Pokemon is fixed once it's saved - forms, moves and everything else
  // can change, but a different species is a different set and should be made
  // as one. This is what lets votes carry across edits safely: nobody can build
  // up a score on one Pokemon and then swap in another to inherit it.
  if (set.species !== existing.species) {
    return res.status(400).json({error: "A set's Pokémon can't be changed. Create a new set instead."});
  }

  try {
    const updated = await db.transaction(async (tx) => {
      const [row] = await tx.update(pokemonSet).set(set).where(eq(pokemonSet.id, setId)).returning();

      // Moves and tags are replaced wholesale rather than diffed - four moves and
      // at most seven tags, so rewriting them is simpler than working out changes
      await tx.delete(setMoves).where(eq(setMoves.setId, setId));
      await tx.insert(setMoves).values(
        moves.map((move, index) => ({setId, slot: index + 1, move})),
      );

      await tx.delete(setTags).where(eq(setTags.setId, setId));
      if (tags.length > 0) {
        await tx.insert(setTags).values(tags.map((tag) => ({setId, tag})));
      }

      return row;
    });

    res.json({set: updated});
  } catch (error) {
    console.error("Failed to update set: ", error);
    res.status(500).json({error: "Could not update set"});
  }
});

// Publish or unpublish without re-sending the whole set. Votes are kept either
// way - the set just drops out of public lists while it's private.
setsRouter.patch("/:id", requireAuth, async (req: Request<{id: string}>, res: Response) => {
  const parsed = publishSetSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({errors: parsed.error.issues});
  }

  const existing = await ownedSet(req.params.id, req.user!.id);
  if (!existing) {
    return res.status(404).json({error: "Set not found"});
  }

  try {
    await db.update(pokemonSet)
      .set({isPublic: parsed.data.isPublic})
      .where(eq(pokemonSet.id, existing.id));
    res.json({isPublic: parsed.data.isPublic});
  } catch (error) {
    console.error("Failed to change visibility: ", error);
    res.status(500).json({error: "Could not change visibility"});
  }
});

// Moves, tags and votes all go with it - every one of those foreign keys is
// ON DELETE CASCADE, so one delete is the whole job.
setsRouter.delete("/:id", requireAuth, async (req: Request<{id: string}>, res: Response) => {
  const existing = await ownedSet(req.params.id, req.user!.id);
  if (!existing) {
    return res.status(404).json({error: "Set not found"});
  }

  try {
    await db.delete(pokemonSet).where(eq(pokemonSet.id, existing.id));
    res.status(204).end();
  } catch (error) {
    console.error("Failed to delete set: ", error);
    res.status(500).json({error: "Could not delete set"});
  }
});

// --- saving other people's sets --------------------------------------------

// Bookmarks a set for the Saved tab. Only someone else's public set can be
// saved - your own are already listed under My Sets.
setsRouter.post("/:id/save", requireAuth, async (req: Request<{id: string}>, res: Response) => {
  const userId = req.user!.id;
  const setId = req.params.id;

  const target = await db.query.pokemonSet.findFirst({
    where: eq(pokemonSet.id, setId),
    columns: {id: true, isPublic: true, userId: true},
  });

  // Private sets 404 for the same reason as everywhere else - don't confirm
  // that an id someone guessed exists
  if (!target || !target.isPublic) {
    return res.status(404).json({error: "Set not found"});
  }
  if (target.userId === userId) {
    return res.status(400).json({error: "Your own sets are already in My Sets"});
  }

  try {
    // Idempotent, like voting: a double click is a no-op, not a key violation
    await db.insert(setSaves).values({setId, userId}).onConflictDoNothing();
    res.json({hasSaved: true});
  } catch (error) {
    console.error("Failed to save set: ", error);
    res.status(500).json({error: "Could not save set"});
  }
});

setsRouter.delete("/:id/save", requireAuth, async (req: Request<{id: string}>, res: Response) => {
  try {
    // Removing a save that isn't there affects no rows - the state asked for
    await db.delete(setSaves).where(and(eq(setSaves.setId, req.params.id), eq(setSaves.userId, req.user!.id)));
    res.json({hasSaved: false});
  } catch (error) {
    console.error("Failed to unsave set: ", error);
    res.status(500).json({error: "Could not unsave set"});
  }
});
