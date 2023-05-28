import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const { query } = req;
    const { id } = query;
    const prisma = new PrismaClient();
    const eventOrganizer = await prisma.eventOrganizer.findMany({
        where: {
            OR: [
                {
                    id: {
                        contains: Array.isArray(id)
                        ? id[0]: id,
                    }
                }
            ]
        },
        include: {
            events: true,
        }
    })

    if(eventOrganizer === undefined || eventOrganizer.length == 0){
        return res.status(404).json({message: 'The page does not exist'});
    }

    if(req.method == "GET"){
        return res.json(eventOrganizer);
    }
    
    if(req.method == "POST"){
        const { companyName, email, password, events } = req.body;
    }
}