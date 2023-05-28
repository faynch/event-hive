import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const { tags } = query;
  
  if(typeof tags === 'undefined'){
    return res.status(400).json("The tags is not provided")
  }
  
  const tagIds = Array.isArray(tags) ? tags.map((tag) => parseInt(tag)) : [parseInt(tags)];
  const prisma = new PrismaClient();
  
  const tag = await prisma.tag.findMany({
    where: {
      OR: tagIds.map((tagId) => ({
        id: tagId,
      })),
    },
    include: {
      shops: {
        where: {
          tags: {
            some: {
              id: {
                in: tagIds,
              },
            },
          },
        },
      },
      events: {
        where: {
          tags: {
            some: {
              id: {
                in: tagIds,
              },
            },
          },
        },
      },
    },
  });

  if (tag === undefined || tag.length === 0) {
    return res.status(404).json({ message: 'The page does not exist' });
  }

  return res.json(tag);
}