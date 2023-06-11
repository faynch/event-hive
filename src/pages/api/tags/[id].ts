import { PrismaClient } from '@prisma/client'
import { transformDocument } from '@prisma/client/runtime'
import { NextApiRequest, NextApiResponse } from 'next'
import validateInput from 'utils/validateInput'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { query } = req
    const { id } = query
    const prisma = new PrismaClient()
    const tag = await prisma.tag.findMany({
        where: {
            OR: [
                {
                    id: parseInt(id as string),
                },
            ],
        },
        include: {
            visitors: {
                include: {
                    favouriteShops: true,
                    favouriteEvents: true,
                },
            },
            shops: {
                include: {
                    tags: true,
                    shopOwner: true,
                    eventApplications: true,
                    eventParticipations: true,
                    favouriteByVisitors: true,
                    products: true,
                },
            },
            events: {
                include: {
                    tags: true,
                    eventOrganizer: true,
                    shopApplications: true,
                    shopParticipations: true,
                    favouriteByVisitors: true,
                },
            },
        },
    })

    if (tag === undefined || tag.length == 0) {
        return res.status(404).json({ message: 'The page does not exist' })
    }

    if (req.method == 'GET') {
        return res.status(200).json(tag)
    }

    if (req.method == 'PATCH') {
        try {
            const { tagName, visitors, shops, events } = req.body
            const id = tag[0].id

            const tagVisitors = await validateInput(visitors, 'visitor')
            const tagShops = await validateInput(shops, 'shop')
            const tagEvents = await validateInput(events, 'event')

            const updatedTag = await prisma.tag.update({
                where: { id },
                data: {
                    tagName: tagName || tag[0].tagName,
                    visitors: tagVisitors || tag[0].visitors,
                    shops: tagShops || tag[0].shops,
                    events: tagEvents || tag[0].events,
                },
                include: {
                    visitors: true,
                    shops: true,
                    events: true,
                },
            })
            return res.status(200).json(updatedTag)
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: 'Something went wrong' })
        }
    }

    return res.status(400).json({ message: 'Something went wrong' })
}
