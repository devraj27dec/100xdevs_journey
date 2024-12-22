
import { PrismaClient } from "@repo/db/client";
import { NextResponse } from "next/server";
const client = new PrismaClient()

export async function GET() {
    
    const user = await client.user.create({
        data: {

            email:"dev@test.com",
            name:"dev",
        }
    })

    return NextResponse.json({ user,
        message: "User Createdt !"
    })
}