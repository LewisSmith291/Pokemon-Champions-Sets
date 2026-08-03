import {relations, sql} from "drizzle-orm";
import { pgTable, text, integer, boolean, timestamp, index, check, primaryKey } from "drizzle-orm/pg-core";

export const setTags = pgTable(
  "set_tags",
  {
    setId: text("set_id").notNull().references(() => pokemonSet.id, {onDelete: "cascade"}),
    
  }
)