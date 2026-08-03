import {relations, sql} from "drizzle-orm";
import { pgTable, text, integer, boolean, timestamp, index, check, primaryKey } from "drizzle-orm/pg-core";
import { nanoid } from "nanoid"; 
import { user } from "./auth-schema.js"

export const pokemonSet = pgTable(
  "pokemon_set",
  {
    id: text("id").primaryKey().$defaultFn(() => nanoid()),

    // cascade delete: Deleting a user will delete all of their sets
    userId: text("user_id").notNull().references(() => user.id, {onDelete: "cascade"}),

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
      sql`${table.boostHp} between 0 and 32
      and ${table.boostAtk} between 0 and 32
      and ${table.boostDef} between 0 and 32
      and ${table.boostSpAtk} between 0 and 32
      and ${table.boostSpDef} between 0 and 32
      and ${table.boostSpe} between 0 and 32`,
    ),
    check(
      "set_boost_total",
      sql`${table.boostHp} + ${table.boostAtk} + ${table.boostDef}
        + ${table.boostSpAtk} + ${table.boostSpDef} + ${table.boostSpe} <= 66`,
    ),
  ],
)

export const setMoves = pgTable(
  "set_moves",
  {
    // move rows are deleted when pokemon set is deleted
    setId: text("set_id").notNull().references(() => pokemonSet.id, {onDelete: "cascade"}),
    // slot 1 - 4 that move is in
    slot: integer("slot").notNull(),
    // PokeApi slug
    move: text("move").notNull(),
  },
  (table) => [
    // Composite primary key. setId can appear 4 times, and slot can appear many times. but a combo of setId and slot is always unique
    primaryKey({ columns: [table.setId, table.slot]}),
    // index for "which set contains x move?"
    index("set_moves_move_idx").on(table.move),
    // move slot has to be either 1, 2, 3, 4, enforced by this constraint
    check("set_moves_slot", sql`${table.slot} between 1 and 4`),
  ],
);

export const setTags = pgTable(
  "set_tags",
  {
    // deleted when associated pokemon set is deleted
    setId: text("set_id").notNull().references(() => pokemonSet.id, {onDelete: "cascade"}),
    // slugs from tags
    tag: text("tag").notNull(),
  },
  (table) => [
    // Composite primary key
    primaryKey({columns: [table.setId, table.tag]}),
    index("set_tags_tag_idx").on(table.tag),
  ],
);

// Produces no SQL 
// TypeScript metadata for db.query

// With these relations, using {schema} and drizzle(), you can find for example:
// const set = await db.query.pokemonSet.findFirst({
//    where: eq(pokemonSet.id, "abc123"),
//    with: {moves: true},
// });
// Which will return a typed, nested object:
// { id: "abc123", species: "gengar", moves: [{slot: 1, move: "shadow-ball"}, ...]}
export const pokemonSetRelations = relations(pokemonSet, ({one, many}) => ({
  user: one(user, {fields: [pokemonSet.userId], references: [user.id] }),
  moves: many(setMoves), 
  tags: many(setTags),
}));

export const setMovesRelations = relations(setMoves, ({one}) => ({
  set: one(pokemonSet, {fields:[setMoves.setId], references: [pokemonSet.id]}),
}));

export const setTagsRelations = relations(setTags, ({one}) => ({
  set: one(pokemonSet, {fields: [setTags.setId], references: [pokemonSet.id]})
}));