import {relations, sql} from "drizzle-orm";
import { pgTable, text, integer, boolean, timestamp, index, check, primaryKey } from "drizzle-orm/pg-core";
import { nanoid } from "nanoid"; 
import { user } from "./auth-schema.js"

export const pokemonSet = pgTable(
  "pokemon_set",
  {
    id: text("id").primaryKey().$defaultFn(() => nanoid()),

    userId: text("name").notNull(),

    // PokeAPI slugs 
    // species -> /pokemon-species/{slug}
    // form -> /pokemon/{slug}
    species: text("species").notNull(),
    form: text("form").notNull(),
    // "male" | "female" | "genderless"
    gender: text("gender").notNull(),
    ability: text("ability").notNull(),
    nature: text("nature").notNull(),
    // null = no held item
    item: text("item"),
    // Stat points (EVs not a thing in pokemon champions)
    boostHp: integer("boost_hp").default(0).notNull(),
    boostAtk: integer("boost_atk").default(0).notNull(),
    boostDef: integer("boost_def").default(0).notNull(),
    boostSpAtk: integer("boost_sp_atk").default(0).notNull(),
    boostSpDef: integer("boost_sp_def").default(0).notNull(),
    boostSpe: integer("boost_spe").default(0).notNull(),
    // false means set is not queried when searching for sets on browse/search
    // this way a set can be saved to profile, without being public, and the user can choose to publish
    isPublic: boolean("is_public").default(false).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
  },
  (table) => [
    index("set_userId_idx").on(table.userId),
    index("set_species_idx").on(table.species),
    index("set_public_created_idx").on(table.isPublic, table.createdAt),

    // Check two separate constraints so the Postgres error names which rule broke
    check(
      "set_boost_per_stat",
      sql`${table.boostHp}     between 0 and 32
      and ${table.boostAtk}    between 0 and 32
      and ${table.boostDef}    between 0 and 32
      and ${table.boostSpAtk}  between 0 and 32
      and ${table.boostSpDef}  between 0 and 32
      and ${table.boostSpe}    between 0 and 32`,
    ),
    check(
      "set_boost_total",
      sql`${table.boostHp} + ${table.boostAtk} + ${table.boostDef}
        + ${table.boostSpAtk} + ${table.boostSpDef} + ${table.boostSpe} <= 66`,
    ),
  ],
)