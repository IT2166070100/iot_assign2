ALTER TABLE "books" ADD COLUMN "description" text NOT NULL DEFAULT '';
ALTER TABLE "books" ADD COLUMN "summary" text NOT NULL DEFAULT '';
ALTER TABLE "books" ADD COLUMN "category" varchar(255) NOT NULL DEFAULT '';
