"use server"

import prisma from '@repo/db/client';
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function createOnRampTxn(amount : number,provider :string){
    // Ideally the token should come from the banking provider (hdfc/axis)
    // const token = await axios.get("/bankurl/getToken",{
    //     amount : ...
    // })
    const token = (Math.random() * 1000).toString();
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    if(!userId){
        return {
            message : "User not logged in"
        }
    }

    await prisma.onRampTransaction.create({
        data: {
            provider,
            status: "Processing",
            startTime: new Date(),
            token: token,
            userId: Number(session?.user?.id),
            amount: amount * 100
        }
    })
    return {
        message: "Done"
    }
}