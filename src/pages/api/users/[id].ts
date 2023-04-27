import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const { query } = req;
    const { id } = query;
    const prisma = new PrismaClient();
    const user = await prisma.user.findMany({
        where: {
            OR: [
                {
                    id: {
                        contains: Array.isArray(id)
                        ? id[0]: id,

                    },
                },
            ],
        },
    },
    );

    if(user === undefined || user.length == 0){
        return res.status(404).json({message: 'The page does not exist'});
    }
    
    return res.json(user);
}