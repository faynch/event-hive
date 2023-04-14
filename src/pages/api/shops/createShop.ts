import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const newShop = await prisma.shop.create({
        data:{
            
        }
    })
}