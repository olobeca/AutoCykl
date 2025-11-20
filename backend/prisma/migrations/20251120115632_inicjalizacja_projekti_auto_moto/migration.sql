-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(120) NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "passwordHashed" VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(9) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "offers" (
    "id" SERIAL NOT NULL,
    "owner_name" VARCHAR(120) NOT NULL,
    "brand" VARCHAR(120) NOT NULL,
    "model" VARCHAR(120) NOT NULL,
    "version" VARCHAR(120) NOT NULL,
    "Cartype" VARCHAR(60) NOT NULL DEFAULT 'Samochody osobowe',
    "year" INTEGER NOT NULL,
    "mileage" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "fuel_type" VARCHAR(60) NOT NULL,
    "engine_capacity" INTEGER NOT NULL,
    "power" INTEGER NOT NULL,
    "doors" INTEGER NOT NULL,
    "color" VARCHAR(60) NOT NULL,
    "interior_color" VARCHAR(60) NOT NULL,
    "torque" INTEGER NOT NULL,
    "body_type" VARCHAR(60) NOT NULL,
    "seats" INTEGER NOT NULL,
    "vin" VARCHAR(17) NOT NULL,
    "transmission" VARCHAR(60) NOT NULL,
    "equipment" TEXT[],
    "warranty" TEXT NOT NULL,
    "is_no_accident" BOOLEAN NOT NULL DEFAULT true,
    "offerType" TEXT NOT NULL DEFAULT 'Standardowe',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "message_count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "offers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car_service_histories" (
    "id" SERIAL NOT NULL,
    "offer_id" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "mileage" INTEGER NOT NULL,
    "type" VARCHAR(60) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "car_service_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_conversations" (
    "id" SERIAL NOT NULL,
    "offer_id" INTEGER NOT NULL,
    "seller_id" INTEGER NOT NULL,
    "buyer_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,

    CONSTRAINT "chat_conversations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "chat_conversation_id" INTEGER NOT NULL,
    "sender_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_owner_name_fkey" FOREIGN KEY ("owner_name") REFERENCES "users"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car_service_histories" ADD CONSTRAINT "car_service_histories_offer_id_fkey" FOREIGN KEY ("offer_id") REFERENCES "offers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_conversations" ADD CONSTRAINT "chat_conversations_offer_id_fkey" FOREIGN KEY ("offer_id") REFERENCES "offers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_conversations" ADD CONSTRAINT "chat_conversations_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_conversations" ADD CONSTRAINT "chat_conversations_buyer_id_fkey" FOREIGN KEY ("buyer_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_conversations" ADD CONSTRAINT "chat_conversations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_chat_conversation_id_fkey" FOREIGN KEY ("chat_conversation_id") REFERENCES "chat_conversations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
