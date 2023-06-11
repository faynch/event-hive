import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import clearTags from 'utils/clearTags'
import validateInput from 'utils/validateInput'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { query } = req
    const { id } = query
    const prisma = new PrismaClient()
    const visitor = await prisma.visitor.findMany({
        where: {
            OR: [
                {
                    id: {
                        contains: Array.isArray(id) ? id[0] : id,
                    },
                },
            ],
        },
        include: {
            tags: true,
            favouriteShops: {
                include: {
                    tags: true,
                },
            },
            favouriteEvents: {
                include: {
                    tags: true,
                },
            },
        },
    })

    if (visitor === undefined || visitor.length == 0) {
        return res.status(404).json({ message: 'The page does not exist' })
    }

    if (req.method == 'GET') {
        return res.status(200).json(visitor)
    }

    if (req.method == 'PATCH') {
        try {
            const {
                firstName,
                lastName,
                image,
                tags,
                favouriteShops,
                favouriteEvents,
            } = req.body

            const id = visitor[0].id

            if (tags) {
                await clearTags('visitor', id)
            }

            const visitorTags = await validateInput(tags, 'tag')
            const visitorFavouriteShops = await validateInput(
                favouriteShops,
                'shop'
            )
            const visitorFavouriteEvents = await validateInput(
                favouriteEvents,
                'event'
            )

            const updatedVisitor = await prisma.visitor.update({
                where: { id },
                data: {
                    firstName: firstName || visitor[0].firstName,
                    lastName: lastName || visitor[0].lastName,
                    image: image || visitor[0].image,
                    tags: visitorTags || visitor[0].tags,
                    favouriteShops:
                        visitorFavouriteShops || visitor[0].favouriteShops,
                    favouriteEvents:
                        visitorFavouriteEvents || visitor[0].favouriteEvents,
                },
                include: {
                    tags: true,
                    favouriteShops: true,
                    favouriteEvents: true,
                },
            })
            return res.status(200).json(updatedVisitor)
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: 'Something went wrong' })
        }
    }

    return res.status(400).json({ message: 'Something went wrong' })
}
