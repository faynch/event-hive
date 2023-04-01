// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if(req.method !== 'POST'){
//     return res.status(405).json({ message: 'Method is not allowed'});
//   }

//   try {
//     const { user } = req.body
//     const prisma = new PrismaClient()
//     // const user: Prisma.UserCreateInput = JSON.parse(req.body);
//     const savedUser = await prisma.user.create({
//       data: user
//     })
//     res.status(200).json(savedUser)
//   } catch (error) {
//     res.status(400).json({message: 'Something went wrong'})
//   }

// }

export default async function register(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== 'POST'){
    return res.status(405).json({message: 'Method is not allowed'})
  }
  try {
    const { registerInfo } = req.body
    const prisma = new PrismaClient()
    const savedInfo = await prisma.user.create({
      data: registerInfo
    })
    res.status(200).json(savedInfo)
  } catch (error) {
    res.status(400).json({message: 'Something went wrong'})
  }
}
  