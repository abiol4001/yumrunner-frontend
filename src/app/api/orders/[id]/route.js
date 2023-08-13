import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

//UPDATE an Order
export const PUT = async (req, {params}) => {
    const { id } = params
  try {
    
    const body = await req.json()
    await prisma.order.update({
        where: {
            id: id
        },
        data: { status: body}
    })
    return new NextResponse(JSON.stringify({msg: "Order has been updated"}), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ msg: "Something went wrong" }), {
      status: 500,
    });
  }
};
