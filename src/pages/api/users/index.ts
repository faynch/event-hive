import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const prisma = new PrismaClient();
    const user = await prisma.user.findMany({
        include: {
            tags: true,
            favouriteShops: true,
            favouriteEvents: true,
        }
    });

    return res.json(user);
    // return res.status(200).json('works well from users index api');
}