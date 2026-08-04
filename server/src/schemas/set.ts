import {z} from "zod";
import {TAG_SLUGS} from "../data/tags.js"

// Max of each stat boost is 32
const boost = z.number().int().min(0).max(32);

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
  tags: z.array(z.enum(TAG_SLUGS)).default([]),
  isPublic: z.boolean().default(false),
}).refine(
  // Check for stat boost total of 66 or over 
  (s) => s.boostHp + s.boostAtk + s.boostDef + s.boostSpAtk + s.boostSpDef + s.boostSpe <= 66,
  {message: "Stat boosts bust total 66 or less", path: ["boostHp"]}
);