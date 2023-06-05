import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const { visitorId } = req.query
            const prisma = new PrismaClient()

            const events = await prisma.event.findMany({
                select: {
                    id: true,
                    eventName: true,
                    about: true,
                    location: true,
                    picture: true,
                    tags: true,
                    startDate: true,
                    endDate: true,
                    telephone: true,
                    facebook: true,
                    instagram: true,
                    line: true,
                    tiktok: true,
                    eventOrganizer: true,
                    favouriteByVisitors: {
                        select: {
                            id: true,
                        },
                        // where: {
                        //     id: String(visitorId),
                        // },
                    },
                },
            })

            // Format the response data to include the follow status
            const formattedEvents = events.map((event) => ({
                ...event,
                status:
                    event.favouriteByVisitors.length > 0
                        ? 'followed'
                        : 'unfollowed',
            }))

            res.status(200).json(formattedEvents)
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Internal server error' })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}
