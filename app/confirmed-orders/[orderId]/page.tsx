import { getOrderItems } from "@/app/actions/actions";
import ConfirmedOrderItem from "@/app/components/ConfirmedOrderItem";
import { ConfirmedItemsType, ConfirmedOrderItemsType ,ProductType } from "@/app/lib/type";

async function page({ params } : { params : { orderId: string }}) {

  const { orderId } = params;
  let confirmedOrderItems: ConfirmedItemsType[] = [];

  const items: ConfirmedOrderItemsType = await getOrderItems(orderId);

  if (items.status === "valid"){
    confirmedOrderItems = items.data
  }


  return (
    <div className="w-full md:w-4/5 mx-auto mt-5 p-5">
      <h1 className="text-2xl">Order ID: <span className="font-bold">#{orderId}</span></h1>
      {confirmedOrderItems.map((item)=>{
        return <ConfirmedOrderItem key={item.id} item={item} />
      })}
    </div>
  )
}

export default page
