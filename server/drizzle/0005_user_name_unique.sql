-- Display names are unique regardless of case: "Dave" is taken if "dave" exists.
-- The sign-up and rename hooks in auth.ts check this first and give a friendly
-- error; this index is the backstop for two requests racing past that check.
--
-- Hand-written rather than generated because the user table lives in
-- auth-schema.ts, which Better Auth's CLI regenerates - an index declared there
-- would be dropped the next time it's regenerated.
CREATE UNIQUE INDEX IF NOT EXISTS "user_name_lower_unique" ON "user" (lower("name"));
