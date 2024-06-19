function PaymentErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="bg-red-600 px-3 py-1 text-white">{children}</p>
    </div>
  )
}

export default PaymentErrorMessage
