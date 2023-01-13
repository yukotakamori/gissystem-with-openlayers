-- CreateTable
CREATE TABLE "lin" (
    "id" SERIAL NOT NULL,
    "geom" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL,

    CONSTRAINT "lin_pkey" PRIMARY KEY ("id")
);
