import { and, ne, sql } from "drizzle-orm";
import { RegExpMatcher, englishDataset, englishRecommendedTransformers } from "obscenity";
import { db } from "../db/index.js";
import { user } from "../db/schema.js";

// A display name is the one piece of user-written text the site shows publicly -
// it's the byline on every set - so it's held to a strict shape rather than
// being free text. client/src/data/displayName.ts mirrors these rules for
// instant feedback; this file is the one that's enforced.
export const NAME_MIN = 3;
export const NAME_MAX = 24;

// Words of letters, numbers, underscores and hyphens, separated by single
// spaces. ASCII only on purpose: it rules out emoji and look-alike characters
// that could be used to pass one name off as another.
const NAME_PATTERN = /^[A-Za-z0-9_-]+( [A-Za-z0-9_-]+)*$/;

// Profanity. A plain word list misses "sh1t", "f_u_c_k" and "ffuucckk"; the
// recommended transformers undo leetspeak, separators and repeated letters
// before matching, and the dataset carries its own exceptions so innocent
// names containing a swear word ("Scunthorpe") aren't caught. Built once - it
// compiles every pattern up front.
const profanity = new RegExpMatcher({
  ...englishDataset.build(),
  ...englishRecommendedTransformers,
});

/** Trims the ends and collapses runs of spaces, so "  lewis   smith " is "lewis smith" */
export function normaliseName(raw: string): string {
  return raw.trim().replace(/\s+/g, " ");
}

/** The problem with a (normalised) name, or null when it's acceptable */
export function nameProblem(name: string): string | null {
  if (name.length < NAME_MIN || name.length > NAME_MAX) {
    return `Display names must be ${NAME_MIN}-${NAME_MAX} characters.`;
  }
  if (!NAME_PATTERN.test(name)) {
    return "Display names can only use letters, numbers, spaces, _ and -.";
  }
  // Checked twice: as typed, and with the allowed separators removed, since the
  // matcher doesn't join letters split by _ - or spaces ("f_u_c_k", "s h i t").
  // Deliberately vague - naming the matched word just helps someone route around it
  if (profanity.hasMatch(name) || profanity.hasMatch(name.replace(/[\s_-]/g, ""))) {
    return "That display name isn't allowed. Please choose another.";
  }
  return null;
}

/**
 * True when another account already has this name, ignoring case - "Dave" is
 * taken if "dave" exists. excludeUserId skips the renaming user's own row, so
 * changing only the capitalisation of your own name is allowed.
 */
export async function isNameTaken(name: string, excludeUserId?: string): Promise<boolean> {
  const sameName = sql`lower(${user.name}) = lower(${name})`;
  const [row] = await db
    .select({ id: user.id })
    .from(user)
    .where(excludeUserId ? and(sameName, ne(user.id, excludeUserId)) : sameName)
    .limit(1);
  return row !== undefined;
}
