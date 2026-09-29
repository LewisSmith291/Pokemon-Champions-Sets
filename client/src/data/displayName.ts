// Mirrors server/src/validation/displayName.ts so a form can say what's wrong
// before submitting. The server is what enforces it - and only the server checks
// uniqueness and profanity, since those need the database and a word list the
// browser shouldn't have to download.
export const NAME_MIN = 3;
export const NAME_MAX = 24;

const NAME_PATTERN = /^[A-Za-z0-9_-]+( [A-Za-z0-9_-]+)*$/;

/** Trims the ends and collapses runs of spaces, matching what the server stores */
export function normaliseName(raw: string): string {
  return raw.trim().replace(/\s+/g, " ");
}

/** The problem with a name, or null when it passes the checks a browser can do */
export function nameProblem(raw: string): string | null {
  const name = normaliseName(raw);
  if (name.length < NAME_MIN || name.length > NAME_MAX) {
    return `Display names must be ${NAME_MIN}-${NAME_MAX} characters.`;
  }
  if (!NAME_PATTERN.test(name)) {
    return "Display names can only use letters, numbers, spaces, _ and -.";
  }
  return null;
}

export const NAME_HINT = `${NAME_MIN}-${NAME_MAX} characters: letters, numbers, spaces, _ and -. Shown on every set you publish.`;
