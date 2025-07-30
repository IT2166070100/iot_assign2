// Coffee Menu Table
export const coffeeMenus = t.pgTable("coffee_menus", {
  id: t.bigserial({ mode: "number" }).primaryKey(),
  name: t.varchar({ length: 255 }).notNull(),
  image: t.varchar({ length: 255 }).notNull(),
  description: t.text().notNull(),
  price: t.numeric().notNull(),
});

// Coffee Order Table
export const coffeeOrders = t.pgTable("coffee_orders", {
  id: t.bigserial({ mode: "number" }).primaryKey(),
  menuId: t.bigint({ mode: "number" }).references(() => coffeeMenus.id, { onDelete: "cascade" }),
  amount: t.integer().notNull(),
  description: t.text().notNull(),
  status: t.varchar({ length: 50 }).notNull().default('pending'),
  createdAt: t.timestamp().notNull().defaultNow(),
});
import { relations } from "drizzle-orm";
import * as t from "drizzle-orm/pg-core";

export const genres = t.pgTable("genres", {
  id: t.bigserial({ mode: "number" }).primaryKey(),
  title: t
    .varchar({
      length: 255,
    })
    .notNull(),
});

export const books = t.pgTable("books", {
  id: t.bigserial({ mode: "number" }).primaryKey(),
  title: t
    .varchar({
      length: 255,
    })
    .notNull(),
  author: t
    .varchar({
      length: 255,
    })
    .notNull(),
  publishedAt: t.timestamp().notNull(),

  description: t.text().notNull(),
  summary: t.text().notNull(),
  category: t.varchar({ length: 255 }).notNull(),

  genreId: t.bigint({ mode: "number" }).references(() => genres.id, {
    onDelete: "set null",
  }),
});

export const bookRelations = relations(books, ({ one }) => ({
  genre: one(genres, {
    fields: [books.genreId],
    references: [genres.id],
  }),
}));
