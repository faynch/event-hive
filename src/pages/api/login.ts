import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import checkExist from "utils/checkExist";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method != "GET"){
        return res.status(405).json({message: 'Method is not allowed'});
    }
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({message: 'Please provide all required fields'});
        }

        const role = ""
        const existingEmail = await checkExist(email)
        
        if(!existingEmail || !existingEmail.query ){
            return res.status(400).json({message: 'The email does not exist'})
        }
        if(password !== existingEmail.query.password){
            return res.status(200).json({message: 'The password is not correct'})
        }
        // trying to output both existingEmail and the message together
        // testing so that might return both existingEmail and the role
        return res.status(200).json({existingEmail: existingEmail.query, role: existingEmail.role, message: 'The email and the password are matched'})
    }catch(error){
        return res.status(400).json({message: 'Something went wrong'})
    }
}