import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { searchString } = req.query
    const resultShops = await prisma.event.findMany({
        where: {
            OR: [
                {
                  id: {
                    contains: Array.isArray(searchString)
                      ? searchString[0]
                      : searchString,
                  },
                },
                {
                  eventName: {
                    contains: Array.isArray(searchString)
                      ? searchString[0]
                      : searchString,
                  },
                },
              ],
        },
    })
    return res.json(resultShops)
}