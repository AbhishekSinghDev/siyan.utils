-- CreateTable
CREATE TABLE "BaseUrl" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BaseUrl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShortUrl" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "baseUrlId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShortUrl_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShortUrl" ADD CONSTRAINT "ShortUrl_baseUrlId_fkey" FOREIGN KEY ("baseUrlId") REFERENCES "BaseUrl"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
