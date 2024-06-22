import prisma from "@/app/lib/prisma"
import { NextResponse } from "next/server"
import { ConfirmedOrderSubmit, CartItemsType } from "@/app/lib/type"

export async function POST(info: any) {
  try {
    const response = await info.json()
    
    const userId = response.purchasedItems[0].userId

    const updateOrder: ConfirmedOrderSubmit = await prisma.confirmedOrder.create({
      data: {
        userId: userId,
        totalPrice: response.totalPrice,
        paymentMethod: response.paymentMode,
        DeliverStatus: "PENDING"
      }
    })

    console.log(updateOrder)

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
    
      return NextResponse.json({status:"complete", id: updateOrder.id})
      
    } catch (error) {
    
    return NextResponse.json({status:"Server error. Please try again"});
  }
}
