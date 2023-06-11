import { PrismaClient } from '@prisma/client'

export default async function clearTags(type: string, id: string) {
    if (!type || !id) {
        return null
    }

    const prisma = new PrismaClient()

    if (type === 'visitor') {
        const visitor = await prisma.visitor.findFirst({
            where: { id },
            include: { tags: true }, // Include the tags relation
        })

        console.log('before ', visitor)
        if (!visitor) {
            console.log('Visitor not found!')
            return
        }

        const tagsToDisconnect = visitor.tags.map((tag) => ({ id: tag.id }))
        const updatedVisitor = await prisma.visitor.update({
            where: { id },
            data: {
                tags: {
                    disconnect: tagsToDisconnect,
                },
            },
            include: {
                tags: true,
            },
        })

        console.log(updatedVisitor)
    } else if (type === 'shop') {
        const shop = await prisma.shop.findFirst({
            where: { id },
            include: { tags: true },
        })

        if (!shop) {
            console.log('Shop not found!')
            return
        }

        const tagsToDisconnect = shop.tags.map((tag) => ({ id: tag.id }))
        const updatedShop = await prisma.shop.update({
            where: { id },
            data: {
                tags: {
                    disconnect: tagsToDisconnect,
                },
            },
        })
    } else if (type === 'event') {
        const event = await prisma.event.findFirst({
            where: { id },
            include: { tags: true },
        })

        if (!event) {
            console.log('Event not found!')
            return
        }

        const tagsToDisconnect = event.tags.map((tag) => ({ id: tag.id }))
        const updatedEvent = await prisma.event.update({
            where: { id },
            data: {
                tags: {
                    disconnect: tagsToDisconnect,
                },
            },
        })
    }
}
