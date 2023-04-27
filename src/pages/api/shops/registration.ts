import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function register(req: NextApiRequest, res: NextApiResponse){
    if(req.method != "POST"){
        return res.status(405).json({message: 'Method is not allowed'});
    }
    try{
        const { registerInfo } = req.body;
        const prisma = new PrismaClient;
        const savedInfo = await prisma.shop.create({
            data: registerInfo
        });
        return res.status(200).json(savedInfo);
    } catch (error) {
        return res.status(400).json({message: 'Something went wrong'});
    }
}