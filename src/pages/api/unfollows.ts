import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  //need to be in session before using the follows feature
  const session = await getSession({ req });

  if (!session || !session.user || !session.user.name) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { type, id } = req.body; 

  if (!type || !id) {
    return res.status(400).json({ message: 'Invalid Request' });
  }

  if(!session.user.name){
      return res.status(401).json({ message: 'Unauthorized' });
    }
   const userId = session.user.name

  try {
    let user;
    if (type === 'shop') {
        const shop = await prisma.shop.update({
        where: { id: id },
        data: {
          favouriteByVisitors: {
            disconnect: { id: userId },
          },
        },
    });
    user = await prisma.visitor.update({
      where: {id: userId},
      data: {
        favouriteShops: {
          disconnect: {id},
        },
      },
    });
    } else if (type === 'event') {
        const event = await prisma.event.update({
        where: { id: id },
        data: {
          favouriteByVisitors: {
            disconnect: { id: userId },
          },
        },
      });
      user = await prisma.visitor.update({
        where: {id: userId},
        data: {
          favouriteEvents: {
            disconnect: {id},
          },
        },
      });
    } else {
      return res.status(400).json({ message: 'Invalid Type' });
    }
    
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}
