interface OrderStatusProps {
  isPaid: boolean
}

function OrderStatus({ isPaid }: OrderStatusProps) {
  return (
    <div className="order-status">
      {isPaid ? 'ชำระเงินแล้ว' : 'ยังไม่ชำระเงิน'}
    </div>
  )
}

export default OrderStatus
