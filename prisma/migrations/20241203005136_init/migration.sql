-- CreateEnum
CREATE TYPE "TodoStatus" AS ENUM ('TODO', 'DOING', 'DONE', 'DELETED');

-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" "TodoStatus" NOT NULL DEFAULT 'TODO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Todo_name_key" ON "Todo"("name");
