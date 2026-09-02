import {z} from "zod";
import {TAG_SLUGS, MAX_TAGS} from "../data/tags.js"

// Max of each stat boost is 32
const boost = z.number().int().min(0).max(32);

// Query string for GET /api/sets. Everything arrives as a string, so limit is
// coerced; the cap stops a caller asking for the whole table in one request.
export const listSetsSchema = z.object({
  sort: z.enum(["new", "hot", "best"]).default("new"),
  limit: z.coerce.number().int().min(1).max(50).default(3),
});

export type SetSort = z.infer<typeof listSetsSchema>["sort"];

export const createSetSchema = z.object({
  species: z.string().min(1),
  form: z.string().min(1),
  gender: z.enum(["male", "female", "genderless"]),
  ability: z.string().min(1),
  nature: z.string().min(1),
  item: z.string().nullable(),

  boostHp: boost,
  boostAtk: boost,
  boostDef: boost,
  boostSpAtk: boost,
  boostSpDef: boost,
  boostSpe: boost,

  moves: z.array(z.string().min(1)).min(1).max(4),
  // Capped so tags stay meaningful for the filtering browse and search will want
  tags: z.array(z.enum(TAG_SLUGS)).max(MAX_TAGS).default([]),
  isPublic: z.boolean().default(false),
}).refine(
  // Total stat boosts can't exceed 66
  (s) => s.boostHp + s.boostAtk + s.boostDef + s.boostSpAtk + s.boostSpDef + s.boostSpe <= 66,
  {message: "Stat boosts must total 66 or less", path: ["boostHp"]}
).refine(
  // Can't have duplicate moves
  (s) => new Set(s.moves).size === s.moves.length, { // new Set drops duplicates, so comparing to original sets will show if any duplicates were dropped
    message: "A set cannot hav duplicate moves",
    path: ["moves"],
});
