import { Link } from "react-router-dom";

const date = new Date();
const formattedDate = date.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default function OrderSummary({totalPrice, cartId}: {totalPrice: number, cartId: string}) {
  return (
    <div className="bg-white p-5 rounded-md h-fit">
      <h3 className="text-text text-2xl mb-4">Order Summary</h3>
      <div className="border-b border-gray-300">
        <div className="flex justify-between items-center text-text mb-4">
          <span>Price</span>
          <span> {totalPrice} EGP</span>
        </div>
        <div className="flex justify-between items-center text-text mb-4">
          <span>Shipping</span>
          <span className="text-primary">Free</span>
        </div>
        <div className="flex justify-between items-center text-text mb-4">
          <span>Coupon Applied</span>
          <span>0.00EGP</span>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-between items-center text-text mb-4">
          <span className="uppercase">Total</span>
          <span> {totalPrice} EGP</span>
        </div>
        <div className="flex justify-between items-center text-text mb-4">
          <span>Estimated Delivery by</span>
          <span>{formattedDate}</span>
        </div>
        <div className="mb-4 relative">
          <input placeholder="Coupon Code" className="w-full p-2 h-[50px] outline-none rounded-lg border border-gray-300 focus:ring-0 focus:shadow-none focus:border-gray-300" type="text" />
          <button className="absolute right-[5px] top-[10%] py-2 px-3 bg-primary text-white rounded-md">Apply</button>
        </div>
        <Link to={`/checkout/${cartId}`} className="p-2 block text-center w-full bg-primary text-white rounded-full py-3">Proceed To Checkout</Link>
        <p>cartid {cartId}</p>
      </div>
    </div>
  )
}
