import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validateInput from "utils/validateInput";

export default async function register(req: NextApiRequest, res: NextApiResponse){
    if(req.method != "POST"){
        return res.status(405).json({message: 'Method is not allowed'});
    }
    try{
        // need to give defaut parameter for picture (like default pic of the event)
        const { eventName, about, location, picture, tagIds, startDate, endDate, telephone, facebook, instagram
            , line, eventOrganizerId, shopApplications, shopParticipations, favouriteByUsers } = req.body;
        const prisma = new PrismaClient;
        
        if(!eventName || !about || !location || !tagIds || !startDate || !endDate || !telephone || !eventOrganizerId){
            return res.status(400).json({message: 'Please provide all required fields'});
        }

        const eventTags = await validateInput(tagIds, 'tag');

        // wonder if these supposed to be initialized later
        const eventShopApplications = await validateInput(shopApplications, 'shop');
        const eventShopParticipations = await validateInput(shopParticipations, 'shop');
        const eventFavouriteByUsers = await validateInput(favouriteByUsers, 'user');
        
        const event = await prisma.event.create({
            data: {
                eventName: eventName,
                about: about,
                location: location,
                picture: picture,
                tags: eventTags,
                startDate: startDate,
                endDate: endDate,
                telephone: telephone,
                facebook: facebook,
                line: line,
                eventOrganizerId: eventOrganizerId,
                shopApplications: eventShopApplications,
                shopParticipations: eventShopParticipations,
                favouriteByUsers: eventFavouriteByUsers,
            }
        });
        return res.status(200).json(event);
    } catch (error) {
        return res.status(400).json({message: 'Something went wrong'});
    }
}