-- AlterTable
ALTER TABLE "users" ADD COLUMN     "description" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "location" VARCHAR(120) NOT NULL DEFAULT '',
ADD COLUMN     "profile_picture_url" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "user_ratings" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rater_id" INTEGER NOT NULL,

    CONSTRAINT "user_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_posts" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_post_likes" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "user_post_id" INTEGER NOT NULL,

    CONSTRAINT "user_post_likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_post_comments" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "user_post_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_post_comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_ratings" ADD CONSTRAINT "user_ratings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_ratings" ADD CONSTRAINT "user_ratings_rater_id_fkey" FOREIGN KEY ("rater_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_posts" ADD CONSTRAINT "user_posts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_post_likes" ADD CONSTRAINT "user_post_likes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_post_likes" ADD CONSTRAINT "user_post_likes_user_post_id_fkey" FOREIGN KEY ("user_post_id") REFERENCES "user_posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_post_comments" ADD CONSTRAINT "user_post_comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_post_comments" ADD CONSTRAINT "user_post_comments_user_post_id_fkey" FOREIGN KEY ("user_post_id") REFERENCES "user_posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
