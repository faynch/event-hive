import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { query } = req
    const { id } = query
    const prisma = new PrismaClient()
    const product = await prisma.product.findMany({
        where: {
            OR: [
                {
                    shopId: {
                        contains: Array.isArray(id) ? id[0] : id,
                    },
                },
            ],
        },
        include: {
            shop: true,
        },
    })

    if (product === undefined || product.length == 0) {
        return res.status(404).json({ message: 'The page does not exist' })
    }

    if (req.method == 'GET') {
        return res.status(200).json(product)
    }

    if (req.method == 'PATCH') {
        try {
            const { productName, description, price, image } = req.body
            const id = product[0].id

            const updatedProduct = await prisma.product.update({
                where: { id },
                data: {
                    productName: productName || product[0].productName,
                    description: description || product[0].description,
                    price: price || product[0].price,
                },
                include: {
                    shop: true,
                },
            })
            return res.status(200).json(updatedProduct)
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: 'Something went wrong' })
        }
    }

    return res.status(400).json({ message: 'Something went wrong' })
}
