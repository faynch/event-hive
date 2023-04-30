// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

import { NextApiRequest, NextApiResponse } from "next"
import { Prisma, PrismaClient } from "@prisma/client"
import validateInput from "utils/validateInput";

export default async function register(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== 'POST'){
    return res.status(405).json({message: 'Method is not allowed'})
  }
  try {
    const { firstName, lastName, email, password, tagIds, favouriteShopIds, favouriteEventIds } = req.body;
    const prisma = new PrismaClient();

    if(!firstName || !lastName || !email || !password){
      return res.status(400).json({message: 'Please provide all required fields'});
    }

    const userTags = await validateInput(tagIds, 'tag');
    const userFavouriteShops = await validateInput(favouriteShopIds, 'shop');
    const userFavouriteEvents = await validateInput(favouriteEventIds, 'event');
    const user = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        tags: userTags,
        favouriteShops: userFavouriteShops,
        favouriteEvents: userFavouriteEvents,
      },
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({message: 'Something went wrong'});
  }
}