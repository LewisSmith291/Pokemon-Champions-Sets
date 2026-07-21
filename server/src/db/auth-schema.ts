import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, boolean, index } from "drizzle-orm/pg-core";


// Table shape: export const session = pgTable("session", { ...columns... }, (table) => [ ...indexes... ]);
// "session": table name
// "{ ...columns... }": columns in table
// "(table) => [ ...indexes... ])": optional callback function that returns indexes, composite keys, and constraints

// Table contents:
// example: emailVerified: boolean("email_verified").default(false).notNull(),
// "emailVerified": TypeScript name used in queries (camel Case)
// "boolean("email_verified")": actual SQL column name. prefixed by type of data in column (snake case)
// ".default(false).notNull()": additional parameters about column

// Identity of the user 
export const user = pgTable("user", {
  // Better auth generates random string IDs
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  // Unique index
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  // Profile picture, can be null
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() =>  new Date())
    .notNull(),
});

// One row per active login
// Because sessions are rows in db, they can be killed whenever by removing the row
export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    // Kills session on schedule
    expiresAt: timestamp("expires_at").notNull(),
    // Used to fetch user's id
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
    // ipAddress and userAgent stored so user can see what devices they are logged into or find suspicious logins
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      // gives a FOREIGN KEY constraint. Turns into this in migration file: FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE
      // deleting a user automatically deletes their sessions and accounts
      // enforced by database, rather than cleanup code
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => [index("session_userId_idx").on(table.userId)],
);

// One row per authentication method per user
// keyed by providerId + accountId
// e.g. If user signs in with email and password, an account row is added with 'providerId: "credential"' and a hashed password in password column,
// If user then signs in later with a Discord login, a second account row is added with 'accessToken, refreshToken, and scope' populated instead

// Having password saved here instead of user means that users can log in without neccesarily having a pssword (logged in with Discord only for example), 
// Or they could have several login methods, making it easy for OAuth to just insert more rows
export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [index("account_userId_idx").on(table.userId)],
);

// Short-lived tokens for email confirmation and password reset
export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    // Email of user
    identifier: text("identifier").notNull(),
    // Token
    value: text("value").notNull(),
    // Timing out
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

// Produces no SQL, rather is metadata for Drizzle's query API
// So using Drizzle's query API I can write db.query.user.findMany({width: {sessions: true} }) and get a typed nested result
export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));
