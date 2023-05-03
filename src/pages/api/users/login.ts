import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method != "GET"){
        return res.status(405).json({message: 'Method is not allowed'});
    }
    try{
        const { email, password } = req.body;
        const prisma = new PrismaClient();

        if(!email || !password){
            return res.status(400).json({message: 'Please provide all required fields'});
        }

        const existingEmail = await prisma.user.findFirst({
            where: {
                email: email,
            },
        })

        if(!existingEmail){
            return res.status(400).json({message: 'The email does not exist'})
        }
        if(password !== existingEmail.password){
            return res.status(200).json({message: 'The password is not correct'})
        }
        return res.status(200).json({message: 'The email and the password are matched'})
    }catch(error){
        return res.status(400).json({message: 'Something went wrong'})
    }
}