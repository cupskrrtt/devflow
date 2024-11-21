import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
	id: uuid().primaryKey().defaultRandom(),
	email: text().notNull(),
	username: text(),
	password: text(),
	githubId: text(),
	githubUsername: text(),
	avatarUrl: text(),
	createdAt: timestamp().defaultNow(),
	updatedAt: timestamp(),
});
