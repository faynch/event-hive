import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const prisma = new PrismaClient();
    const sportUser = await prisma.user.findMany({
        where: {
            OR: {
                tags: {
                    some: {
                        id: 1
                    }
                }
            }
        }
        
    })

    return res.json(sportUser)
}