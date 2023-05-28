import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next";
import validateInput from 'utils/validateInput';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const { query } = req;
    const { id } = query;
    const prisma = new PrismaClient();
    const shop = await prisma.shop.findMany({
        where: {
            OR: [
                {
                    id: {
                        contains: Array.isArray(id)
                        ? id[0]: id,

                    },
                },
            ],
        },
        include: {
            tags: true,
            shopOwner: true,
            eventApplications: true,
            eventParticipations: true,
            favouriteByVisitors: true,
            products: true,
        },
    },
    );

    if(shop === undefined || shop.length == 0){
        return res.status(404).json({message: 'The page does not exist'});
    }

    if(req.method == 'GET'){
        return res.status(200).json(shop);
    }

    if(req.method == 'PATCH'){
        try {
            const { id, shopName, about, address, picture, tags, telephone, facebook, instagram, line
                , tiktok, eventApplications, eventParticipations, favouriteByUsers, products} = req.body;

            if (!id) {
                return res.status(400).json({ message: 'Please provide the visitor ID' });
            }
             
            const prisma = new PrismaClient();

            const existingShop = await prisma.shop.findUnique({ where: { id },include: {tags: true,
                eventApplications: true,
                eventParticipations: true,
                favouriteByVisitors: true,
                products: true,}},);

            if (!existingShop) {
                return res.status(404).json({ message: 'Shop not found' });
              }

            const shopTags = await validateInput(tags, 'tag');
            const shopEventApplications = await validateInput(eventApplications, 'event');
            const shopEventParticipations = await validateInput(eventParticipations, 'event');
            const shopFavouriteByVisitors = await validateInput(favouriteByUsers, 'user');
        
            const updatedShop = await prisma.shop.update({
                where: {id},
              data: {
                shopName: shopName || existingShop.shopName,
                about: about || existingShop.about,
                address: address || existingShop.address,
                picture: picture || existingShop.picture,
                tags: shopTags || existingShop.tags,
                telephone: telephone || existingShop.telephone,
                facebook: facebook || existingShop.facebook,
                instagram: instagram || existingShop.instagram,
                line: line || existingShop.line,
                tiktok: tiktok || existingShop.tiktok,
                eventApplications: shopEventApplications || existingShop.eventApplications,
                eventParticipations: shopEventParticipations || existingShop.eventParticipations,
                favouriteByVisitors: shopFavouriteByVisitors || existingShop.favouriteByVisitors,
                products: products || existingShop.products,
              },
              include: {
                tags: true,
                eventApplications: true,
                eventParticipations: true,
                favouriteByVisitors: true,
                products: true,
              }
            });
            return res.status(200).json(updatedShop);
          } catch (error) {
            console.log(error)
            return res.status(400).json({ message: 'Something went wrong' });
          }
    }

    return res.status(400).json({message: 'Something went wrong'});
}