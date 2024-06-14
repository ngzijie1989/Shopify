'use client'

import { CartItemsType } from "../lib/type";
import { useState } from "react";

function PaymentForm({items, totalPrice}: {items: CartItemsType[]; totalPrice: number}) {
  const [creditCard, setCreditCard ] = useState<boolean>(false)
  const [paymentMode, setPaymentMode] = useState<string>("")
  const [cardNumber, setCardNumber] = useState<string>("")
  const [cardName, setCardName] = useState<string>("")
  const [cardExpiry, setCardExpiry] = useState<string>("")
  const [cardSecurity, setCardSecurity] = useState<string>("")

  const handleSubmitPayment = ({paymentMode, cardNumber, cardName, cardExpiry, cardSecurity} 
    : {paymentMode: string, cardNumber: string, cardName: string, cardExpiry: string, cardSecurity: string}) => {
      console.log(paymentMode)
  }

  const handleCCSelection = () => {
    setCreditCard(true)
    setPaymentMode("creditCard")
  }

  const handleCODSelection = () => {
    setCreditCard(false)
    setPaymentMode("Cash On Delivery")
  }

  const handlePaynowSelection = () => {
    setCreditCard(false)
    setPaymentMode("Paynow")
  }

  return (
    <div>
      <form onSubmit={handleSubmitPayment} className="bg-white rounded pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Payment Mode
        </label>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Cash On Delivery</span> 
            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" onChange={handleCODSelection}/>
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Paynow</span> 
            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" onChange={handlePaynowSelection}/>
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Credit Card</span> 
            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" onChange={handleCCSelection}/>
          </label>
        </div>
        
        {creditCard ? <div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Card number</span>
            </div>
            <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="input input-bordered w-full" onChange={(e) => setCardNumber(e.target.value)} />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name on Card</span>
            </div>
            <input type="text" placeholder="John Doe" className="input input-bordered w-full" onChange={(e) => setCardName(e.target.value)}/>
          </label>

          <div className="flex">
            <label className="form-control w-1/2">
              <div className="label">
                <span className="label-text">Expiry Date</span>
              </div>
              <input type="text" placeholder="MM/YY" className="input input-bordered w-7/8 me-3" onChange={(e) => setCardExpiry(e.target.value)} />
            </label>

            <label className="form-control w-1/2">
              <div className="label">
                <span className="label-text">Security Code</span>
              </div>
              <input type="text" placeholder="XXX" className="input input-bordered w-full" onChange={(e) => setCardSecurity(e.target.value)} />
            </label>
          </div>
        </div> : ""}
        
      </div>


      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit Payment
        </button>
      </div>
    </form>
    </div>
  )
}

export default PaymentForm
