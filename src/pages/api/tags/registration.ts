import { PrismaClient } from "@prisma/client";
import { ADDRCONFIG } from "dns";
import { NextApiRequest, NextApiResponse } from "next";
import validateInput from "utils/validateInput";

export default async function register(req: NextApiRequest, res: NextApiResponse){
    if(req.method != "POST"){
        return res.status(405).json({message: 'Method is not allowed'});
    }
    try{
        const { tagName, users, shops, events } = req.body;
        const prisma = new PrismaClient;

        if(!tagName){
                return res.status(400).json({message: 'Please provide all required fields'});
        }

        const tagUsers = await validateInput(users, 'user');
        const tagShops = await validateInput(shops, 'shop');
        const tagEvents = await validateInput(events, 'event');

        const shop = await prisma.tag.create({
            data: {
                tagName: tagName,
                users: tagUsers,
                shops: tagShops,
                events: tagEvents,
            },
            include: {
                users: true,
                shops: true,
                events: true,
            },
        });
        return res.status(200).json(shop);
    } catch (error) {
        return res.status(400).json({message: 'Something went wrong'});
    }
}