import { Router } from "express";
import type { Request, Response } from "express";
import { db } from "../db/index.js";
import { eq } from "drizzle-orm";
import { pokemonSet, setMoves, setTags } from "../db/schema.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { createSetSchema } from "../schemas/set.js";
import { optionalAuth } from "../middleware/optionalAuth.js";

export const setsRouter = Router();
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

  // Returns 200 with set if successful
  res.json(set);
});