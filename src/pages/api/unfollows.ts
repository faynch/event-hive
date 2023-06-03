import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { type, targetId, userId } = req.body; 

  if (!type || !targetId || !userId) {
    return res.status(400).json({ message: 'Invalid Request' });
  }

  try {
    let user;
    if (type === 'shop') {
        const shop = await prisma.shop.update({
        where: { id: targetId },
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
          disconnect: {id:targetId},
        },
      },
    });
    } else if (type === 'event') {
        const event = await prisma.event.update({
        where: { id: targetId },
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
            disconnect: {id:targetId},
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