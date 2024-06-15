import prisma from "@/app/lib/prisma"
import { NextResponse } from "next/server"
import { ConfirmedOrderType, ConfirmedItemsType } from "@/app/lib/type"

export async function POST(info: any) {
  try {
    const response = await info.json()
    
    const userId = response.purchasedItems[0].userId

    console.log(response)

    const updateOrder: ConfirmedOrderType = await prisma.confirmedOrder.create({
      data: {
        userId: userId,
        totalPrice: response.totalPrice,
        paymentMethod: response.paymentMethod,
        DeliverStatus: "PENDING"
      }
    })

    console.log(updateOrder)

    
    
      

        return NextResponse.json({data: "ok"})
      
    } catch (error) {
    
    return NextResponse.json({ data: { error: "Server error" } });
  }
}
