import { PrismaClient } from '@prisma/client'
import { transformDocument } from '@prisma/client/runtime';
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const { query } = req;
    const { id } = query;
    const prisma = new PrismaClient();
    const tag = await prisma.tag.findMany({
        where: {
            OR: [
                {
                    id: parseInt( id as string)
                },
            ],
        },
        include: {
            visitors: {
                include: {
                    favouriteShops: true,
                    favouriteEvents: true,
                },

            },
            shops: {
                include:{ 
                    tags: true,
                    shopOwner: true,
                    eventApplications: true,
                    eventParticipations: true,
                    favouriteByVisitors:true,
                    products: true,
                }
            },
            events: {
                include:{ 
                    tags: true,
                    eventOrganizer: true,
                    shopApplications: true,
                    shopParticipations:true,
                    favouriteByVisitors: true,
                }
            },
        },
    },
    );

    if(tag === undefined || tag.length == 0){
        return res.status(404).json({message: 'The page does not exist'});
    }
    return res.json(tag);
}