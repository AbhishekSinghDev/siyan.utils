/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `ShortUrl` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ShortUrl_url_key" ON "ShortUrl"("url");
