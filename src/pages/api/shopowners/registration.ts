import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function register(req: NextApiRequest, res: NextApiResponse){
    if(req.method != "POST"){
        return res.status(405).json({message: 'Method is not allowed'});
    }
    try{
        const { firstName, lastName, email, password } = req.body;
        const prisma = new PrismaClient;

        // this part might not be used since the website only allowed the user to create id before creating shop
        // let shop = {};
        // if(shopId){
        //     const existingShop = prisma.shop.findUnique({
        //         where: {
        //             id: shopId,
        //         },
        //     });
            
        //     if(!existingShop){
        //         return res.status(400).json({message: `The shop is not exist`});
        //     }

        //     shop = {
        //         connect: {
        //             id: shopId,
        //         },
        //     }
        // }
        
        const shopOwner = await prisma.shopOwner.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            },
            include: {
                shop: true,
            }
        });
        return res.status(200).json(shopOwner);
    } catch (error) {
        return res.status(400).json({message: 'Something went wrong'});
    }
}