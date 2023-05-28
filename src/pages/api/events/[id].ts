import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validateInput from "utils/validateInput";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const { query } = req;
    const { id } = query;
    const prisma = new PrismaClient();
    const event = await prisma.event.findMany({
        where: {
            OR: [
                {
                    id: {
                        contains: Array.isArray(id)
                        ? id[0]: id,
                    }
                }
            ]
        },
        include: {
            tags: true,
            eventOrganizer: true,
            shopApplications: true,
            shopParticipations: true,
            favouriteByVisitors: true,
        },
    })

    if(event === undefined || event.length == 0){
        return res.status(404).json({message: 'The page does not exist'});
    }
    
    if(req.method == 'GET'){
        return res.status(200).json(event);
    }

    if(req.method == 'PATCH'){
        try {
            const { id, eventName, about, location, picture, tags, startDate, endDate, telephone, facebook, instagram
                , line, tiktok, shopApplications, shopParticipations, favouriteByUsers} = req.body;

            if (!id) {
                return res.status(400).json({ message: 'Please provide the visitor ID' });
            }
             
            const prisma = new PrismaClient();

            const existingEvent = await prisma.event.findUnique({ where: { id },include: {tags: true,
                eventOrganizer: true,
                shopApplications: true,
                shopParticipations: true,
                favouriteByVisitors: true,}},);

            if (!existingEvent) {
                return res.status(404).json({ message: 'Event not found' });
              }

            const eventTags = await validateInput(tags, 'tag');
            // wonder if these supposed to be initialized later
            const eventShopApplications = await validateInput(shopApplications, 'shop');
            const eventShopParticipations = await validateInput(shopParticipations, 'shop');
            const eventFavouriteByVisitors = await validateInput(favouriteByUsers, 'user');
        
            const updatedEvent = await prisma.event.update({
                where: {id},
              data: {
                eventName: eventName || existingEvent.eventName,
                about: about || existingEvent.about,
                location: location || existingEvent.location,
                picture: picture || existingEvent.picture,
                tags: eventTags || existingEvent.tags,
                startDate: startDate || existingEvent.startDate,
                endDate: endDate || existingEvent.endDate,
                telephone: telephone || existingEvent.telephone,
                facebook: facebook || existingEvent.facebook,
                instagram: instagram || existingEvent.instagram,
                line: line || existingEvent.line,
                tiktok: tiktok || existingEvent.tiktok,
                shopApplications: eventShopApplications || existingEvent.shopApplications,
                shopParticipations: eventShopParticipations || existingEvent.shopParticipations,
                favouriteByVisitors: eventFavouriteByVisitors || existingEvent.favouriteByVisitors,
              },
              include: {
                tags: true,
                eventOrganizer: true,
                shopApplications: true,
                shopParticipations: true,
                favouriteByVisitors: true,
              }
            });
            return res.status(200).json(updatedEvent);
          } catch (error) {
            console.log(error)
            return res.status(400).json({ message: 'Something went wrong' });
          }
    }

    return res.status(400).json({message: 'Something went wrong'});
}