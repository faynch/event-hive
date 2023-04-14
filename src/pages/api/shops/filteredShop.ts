import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { searchString } = req.query
    const resultShop = await prisma.shop.findMany({
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
                  shopName: {
                    contains: Array.isArray(searchString)
                      ? searchString[0]
                      : searchString,
                  },
                },
              ],
        },
    })
    return res.json(resultShop)
}