import { PrismaClient } from "@prisma/client";
const prismaClient=new PrismaClient();

prismaClient.users.create({});
prismaClient.todos.create({});