import prisma from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(info: any) {
  try {
    const response = await info.json()
    console.log(response.purchasedItems)

    // const updateOrder = await prisma.confirmedOrder.create()

    
    
      

        return NextResponse.json({data: response})
      
    } catch (error) {
    
    return NextResponse.json({ data: { error: "Server error" } });
  }
}
