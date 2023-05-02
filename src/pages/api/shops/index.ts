import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const prisma = new PrismaClient();
    const shops = await prisma.shop.findMany({
        include: {
            tags: true,
            eventApplications: true,
            eventParticipations: true,
            favouriteByUsers: true,
            products: true,
        },
    });

    return res.json(shops);
}