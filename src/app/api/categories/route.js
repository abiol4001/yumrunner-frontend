import { prisma } from "@/utils/connect"
import { NextResponse } from "next/server"


//FETCH all Categories
export const GET = async () => {
    try {
        const categories = await prisma.category.findMany()
        return new NextResponse(JSON.stringify(categories), {status: 200})
    } catch (error) {
        
        return new NextResponse(JSON.stringify({msg: "Something went wrong"}), {status: 500})
    }
}