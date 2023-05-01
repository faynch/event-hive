import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const eventOrganizers = await prisma.eventOrganizer.findMany();

    return res.json(eventOrganizers);
}