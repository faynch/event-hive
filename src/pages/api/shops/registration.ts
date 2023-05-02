import { PrismaClient } from "@prisma/client";
import { ADDRCONFIG } from "dns";
import { NextApiRequest, NextApiResponse } from "next";
import validateInput from "utils/validateInput";

export default async function register(req: NextApiRequest, res: NextApiResponse){
    if(req.method != "POST"){
        return res.status(405).json({message: 'Method is not allowed'});
    }
    try{
        // what will the website be, will the shop owner create product when they create shop
        const { shopName, about, address, picture, tags, telephone, facebook, instagram, line
            , shopOwnerId, eventApplications, eventParticipations, favouriteByUsers, products } = req.body;
        const prisma = new PrismaClient;

        if(!shopName || !about || !address || !tags || !telephone || !shopOwnerId){
                return res.status(400).json({message: 'Please provide all required fields'});
        }

        const shopTags = await validateInput(tags, 'tag');
        const validOwnerId = await validateInput(shopOwnerId, 'shopOwner');
        const shopEventApplications = await validateInput(eventApplications, 'event');
        const shopEventParticipations = await validateInput(eventParticipations, 'event');
        const shopFavouriteByUsers = await validateInput(favouriteByUsers, 'user');

        const shop = await prisma.shop.create({
            data: {
                shopName: shopName,
                about: about,
                address: address,
                picture: picture,
                tags: shopTags,
                telephone: telephone,
                facebook: facebook,
                instagram: instagram,
                line: line,
                shopOwner: validOwnerId,
                eventApplications: shopEventApplications,
                eventParticipations: shopEventParticipations,
                favouriteByUsers: shopFavouriteByUsers,
                // products: products,
            },
            include: {
                tags: true,
                eventApplications: true,
                eventParticipations: true,
                favouriteByUsers: true,
                products: true,
            }
        });
        return res.status(200).json(shop);
    } catch (error) {
        return res.status(400).json({message: 'Something went wrong'});
    }
}