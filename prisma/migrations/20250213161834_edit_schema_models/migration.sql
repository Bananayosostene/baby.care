-- CreateEnum
CREATE TYPE "BabyState" AS ENUM ('crying', 'laughing', 'calm');

-- CreateEnum
CREATE TYPE "DeviceType" AS ENUM ('sensor', 'speaker', 'camera');

-- CreateEnum
CREATE TYPE "DeviceStatus" AS ENUM ('active', 'inactive', 'maintenance');

-- CreateEnum
CREATE TYPE "AudioType" AS ENUM ('lullaby', 'white_noise', 'parent_voice');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "location" TEXT,
ADD COLUMN     "phone" TEXT;

-- CreateTable
CREATE TABLE "Baby" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "age" INTEGER NOT NULL,
    "parentId" TEXT NOT NULL,
    "state" "BabyState" NOT NULL DEFAULT 'calm',
    "selectedAudioId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Baby_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Music" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "AudioType" NOT NULL,
    "url" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "priority" INTEGER NOT NULL DEFAULT 1,
    "isPlaying" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Music_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "DeviceType" NOT NULL,
    "babyId" TEXT NOT NULL,
    "status" "DeviceStatus" NOT NULL DEFAULT 'active',
    "serialNumber" TEXT NOT NULL,
    "lastPing" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SensorData" (
    "id" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "babyId" TEXT NOT NULL,
    "status" "BabyState" NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SensorData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Baby_parentId_key" ON "Baby"("parentId");

-- CreateIndex
CREATE INDEX "Baby_parentId_idx" ON "Baby"("parentId");

-- CreateIndex
CREATE UNIQUE INDEX "Music_priority_key" ON "Music"("priority");

-- CreateIndex
CREATE INDEX "Music_type_idx" ON "Music"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Device_serialNumber_key" ON "Device"("serialNumber");

-- CreateIndex
CREATE INDEX "Device_babyId_idx" ON "Device"("babyId");

-- CreateIndex
CREATE INDEX "Device_type_status_idx" ON "Device"("type", "status");

-- CreateIndex
CREATE INDEX "SensorData_babyId_timestamp_idx" ON "SensorData"("babyId", "timestamp");

-- CreateIndex
CREATE INDEX "SensorData_deviceId_timestamp_idx" ON "SensorData"("deviceId", "timestamp");

-- AddForeignKey
ALTER TABLE "Baby" ADD CONSTRAINT "Baby_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Baby" ADD CONSTRAINT "Baby_selectedAudioId_fkey" FOREIGN KEY ("selectedAudioId") REFERENCES "Music"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_babyId_fkey" FOREIGN KEY ("babyId") REFERENCES "Baby"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SensorData" ADD CONSTRAINT "SensorData_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SensorData" ADD CONSTRAINT "SensorData_babyId_fkey" FOREIGN KEY ("babyId") REFERENCES "Baby"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
