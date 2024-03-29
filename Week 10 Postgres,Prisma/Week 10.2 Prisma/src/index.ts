import { PrismaClient } from "@prisma/client";
const prismaClient=new PrismaClient();

async function insertInto(
  username: string,
  password: string,
  firstname: string,
  lastname: string
) {
  const res = await prismaClient.users.create({
    data: {
      username: username,
      password: password,
      firstName: firstname,
      lastName: lastname,
    },
    select: {
      id: true,
      password: true,
    },
  });
  console.log(res);
}
interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  prismaClient.users.update({
    where: {
      username,
    },
    data: {
      firstName: firstName,
      lastName: lastName,
    },
  });
}
