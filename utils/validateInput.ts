import { PrismaClient } from "@prisma/client";

export default async function validateInput(fieldValue: any, modelName: String){
    const prisma = new PrismaClient();
    if(!fieldValue){
      return {};
    }
  
    const existingModel = await (prisma as any).modelName.findMany({
      where: {
        id: {
          in: fieldValue,
        },
      },
    });
  
    if(!existingModel){
      throw new Error(`${modelName} does not exist`);
    }
  
    return {
      connect: {
        id: fieldValue,
      },
    };
  }