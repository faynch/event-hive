import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const { query } = req;
    const { id } = query;
    const prisma = new PrismaClient();
    const visitor = await prisma.visitor.findMany({
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
        include: {
            tags: true,
            favouriteShops: true,
            favouriteEvents: true,
        }
    },
    );

    if(visitor === undefined || visitor.length == 0){
        return res.status(404).json({message: 'The page does not exist'});
    }
    
    if(req.method == 'GET'){
        return res.json(visitor);
    }
}