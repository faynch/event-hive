import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const result = await prisma.user.create({
        data:{
            ...req.body,
        }
    })
    return res.status(201).json(result)
}
