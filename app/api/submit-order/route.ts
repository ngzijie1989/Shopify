import prisma from "@/app/lib/prisma"
import { NextResponse } from "next/server"
import { ConfirmedOrderType, ConfirmedItemsType, CartItemsType } from "@/app/lib/type"

export async function POST(info: any) {
  try {
    const response = await info.json()
    
    const userId = response.purchasedItems[0].userId

    const updateOrder: ConfirmedOrderType = await prisma.confirmedOrder.create({
      data: {
        userId: userId,
        totalPrice: response.totalPrice,
        paymentMethod: response.paymentMode,
        DeliverStatus: "PENDING"
      }
    })

    const orderItemsList: CartItemsType[] = response.purchasedItems

    orderItemsList.forEach(async (orderItem: CartItemsType)=>{
      await prisma.confirmedItem.create({
        data: {
          ConfirmedOrderId: updateOrder.id,
          productId: orderItem.productId,
          Quantity: orderItem.cartQuantity,
          BoughtPrice: orderItem.product.price
        }
      })

      await prisma.cartItem.delete({
        where: {
          id: orderItem.id
        }
      })
    })
    
      return NextResponse.json("complete")
      
    } catch (error) {
    
    return NextResponse.json("Server error. Please try again");
  }
}
