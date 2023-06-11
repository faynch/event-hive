import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { query } = req
    const { id } = query as { id: string }
    const prisma = new PrismaClient()
    const eventOrganizer = await prisma.eventOrganizer.findMany({
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
            events: {
                include: {
                    tags: true,
                    eventOrganizer: true,
                },
            },
        },
    })

    if (eventOrganizer === undefined || eventOrganizer.length == 0) {
        return res.status(404).json({ message: 'The page does not exist' })
    }

    if (req.method == 'GET') {
        return res.status(200).json(eventOrganizer)
    }

    if (req.method == 'PATCH') {
        try {
            const { companyName, email, password, events } = req.body
            const id = eventOrganizer[0].id

            const updatedEventOrganizer = await prisma.eventOrganizer.update({
                where: { id },
                data: {
                    companyName: companyName || eventOrganizer[0].companyName,
                    email: email || eventOrganizer[0].email,
                    password: password || eventOrganizer[0].password,
                },
                include: {
                    events: true,
                },
            })
            return res.status(200).json(updatedEventOrganizer)
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: 'Something went wrong' })
        }
    }

    return res.status(400).json({ message: 'Something went wrong' })
}
