// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

import { NextApiRequest, NextApiResponse } from "next"

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method !== 'POST'){
    return res.status(405).json({ message: 'Method is not allowed'});
  }

  try {
    const { user } = req.body;
    const {}
  } catch (error) {
    
  }
  
  res.status(200).json({name: 'John Doe'})

}