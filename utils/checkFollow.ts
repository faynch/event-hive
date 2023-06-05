import { PrismaClient } from '@prisma/client'

export default async function checkFollow(
    type: string,
    targetId: string,
    userId: any
): Promise<boolean> {
    if (!type || !targetId || !userId) {
        return false
    }

    const prisma = new PrismaClient()

    if (type === 'shop') {
        const shop = await prisma.shop.findFirst({
            where: {
                id: targetId,
            },
        })

        if (!shop) {
            console.log('Shop not found!')
            return false
        }

        const existingUser = await prisma.visitor.findFirst({
            where: {
                id: userId,
                favouriteShops: {
                    some: {
                        id: shop.id,
                    },
                },
            },
        })
        return !!existingUser
    } else if (type === 'event') {
        const event = await prisma.event.findFirst({
            where: {
                id: targetId,
            },
        })

        if (!event) {
            console.log('Event not found!')
            return false
        }

        const existingUser = await prisma.visitor.findFirst({
            where: {
                id: userId,
                favouriteEvents: {
                    some: {
                        id: event.id,
                    },
                },
            },
        })
        return !!existingUser
    } else {
        return false
    }
}
