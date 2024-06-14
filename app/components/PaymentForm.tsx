'use client'

function PaymentForm() {

  const handleSubmitPayment = () => {

  }
  return (
    <div>
      <form onSubmit={handleSubmitPayment} className="bg-white rounded pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your name"
          // onChange={(e) => setName(e.target.value)}
          required
        />
      </div>


      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
  )
}

export default PaymentForm
