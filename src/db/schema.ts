import { sql } from "drizzle-orm";
import { integer, pgTableCreator, timestamp, varchar } from "drizzle-orm/pg-core";


export const createTable = pgTableCreator((name) => `capespring${name}`);


export const usersTable = createTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  number: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});


//comments table should go here
export const commentsTable = createTable("post",{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    comment: varchar({ length: 255 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    likes: integer().default(0)
  });


