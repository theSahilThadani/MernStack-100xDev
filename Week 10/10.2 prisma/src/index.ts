import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function InsertData (username: string, firstname: string, lastname: string) {
   const res = await prisma.user.create({
        data: {
            username,
            firstname,
            lastname
        }
   })
   console.log(res);
}

// InsertData('thesahilthadani','sahil','thadani')

//update using prisma

interface User{
    firstname: string,
    lastname:string
}

async function UpdateOne(username:string,{firstname,lastname}:User)
{
    const res = await prisma.user.update({
        where:{
            username
        },
        data: {
            firstname,
            lastname
          }
    })
    console.log(res)
} 
UpdateOne("thesahilthadani", {
    firstname: "Sahil",
    lastname: "Thadani"
})