import { API_URL } from "./api";
import { type Gender } from "@/data/forms";
import { type Boosts } from "@/data/stats";

export type SetSort = "new" | "hot" | "best";

// What GET /api/sets returns per row. The detail route returns the same fields
// plus the few below, so anything that only needs to *render* a set - a showcase
// card, the set page - can take this type.
export interface SetSummary extends Boosts {
  id: string;
  /** Author's user id - compared against the session to block self-voting */
  userId: string;
  species: string;
  form: string;
  gender: Gender;
  ability: string;
  nature: string;
  /** null means no held item, matching the nullable column */
  item: string | null;
  /** Slugs in slot order, already flattened by the API */
  moves: string[];
  /** Tag slugs - label them through tagLabel() in data/tags.ts */
  tags: string[];
  /** Always true on the public list; My Sets mixes both */
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
  /** Display name of the author - the API never sends their email */
  authorName: string;
  voteCount: number;
  /** Always false for a logged-out viewer */
  hasVoted: boolean;
}

// The detail route returns the same fields as a list row, plus nothing extra now
// that isPublic and updatedAt are on the summary - kept as its own name so the
// set page's intent stays readable.
export type SetDetail = SetSummary;

/** Thrown for a 404 so the page can tell "no such set" from "server broke" */
export class SetNotFound extends Error {}

export async function listSets(
  sort: SetSort,
  limit: number,
  signal?: AbortSignal,
): Promise<SetSummary[]> {
  const response = await fetch(`${API_URL}/api/sets?sort=${sort}&limit=${limit}`, {
    // Sent so the API can report hasVoted - the list itself is public
    credentials: "include",
    signal,
  });
  if (!response.ok) throw new Error(`Could not load sets (${response.status})`);
  const data = await response.json();
  return data.sets;
}

/** The signed-in user's own sets, private ones included, recently edited first */
export async function listMySets(signal?: AbortSignal): Promise<SetSummary[]> {
  const response = await fetch(`${API_URL}/api/sets/mine`, {
    credentials: "include",
    signal,
  });
  if (!response.ok) throw new Error(`Could not load your sets (${response.status})`);
  const data = await response.json();
  return data.sets;
}

export async function getSet(id: string, signal?: AbortSignal): Promise<SetDetail> {
  const response = await fetch(`${API_URL}/api/sets/${id}`, {
    // A private set is visible to its owner, so the session has to go with it
    credentials: "include",
    signal,
  });
  if (response.status === 404) throw new SetNotFound();
  if (!response.ok) throw new Error(`Could not load set (${response.status})`);
  return response.json();
}

/** Toggles the viewer's vote. Returns the set's fresh count. */
export async function setVote(
  id: string,
  voted: boolean,
): Promise<{ voteCount: number; hasVoted: boolean }> {
  const response = await fetch(`${API_URL}/api/sets/${id}/vote`, {
    method: voted ? "POST" : "DELETE",
    credentials: "include",
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error ?? `Could not update vote (${response.status})`);
  }
  return response.json();
}

// Pulls the API's error message out of a failed response, where there is one
async function failure(response: Response, fallback: string): Promise<Error> {
  const data = await response.json().catch(() => ({}));
  return new Error(data.error ?? `${fallback} (${response.status})`);
}

/** Owner-only. The body is the same shape POST /api/sets takes. */
export async function updateSet(id: string, payload: unknown): Promise<void> {
  const response = await fetch(`${API_URL}/api/sets/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw await failure(response, "Could not save changes");
}

/** Owner-only. Publishes or unpublishes without re-sending the set. */
export async function setPublished(id: string, isPublic: boolean): Promise<boolean> {
  const response = await fetch(`${API_URL}/api/sets/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ isPublic }),
  });
  if (!response.ok) throw await failure(response, "Could not change visibility");
  return (await response.json()).isPublic;
}

/** Owner-only. Moves, tags and votes are removed with it. */
export async function deleteSet(id: string): Promise<void> {
  const response = await fetch(`${API_URL}/api/sets/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!response.ok) throw await failure(response, "Could not delete set");
}
