import { PrismaClient } from "@prisma/client";

export default async function checkExist(email: string){
    if(!email){
        return null;
    }
    
    const prisma = new PrismaClient();

    const existingUser = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });

    const existingShopOwner = await prisma.shopOwner.findFirst({
        where: {
            email: email,
        },
    });

    const existingEventOrganizer = await prisma.eventOrganizer.findFirst({
        where: {
            email: email,
        },
    });

    if(existingUser){
        return existingUser;
    }else if(existingShopOwner){
        return existingShopOwner;
    }else{
        return existingEventOrganizer;
    }
}