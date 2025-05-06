import PageTitle from "@components/common/page-title/PageTitle";
import useCheckout from "@hooks/useCheckout";
import { Loader } from "lucide-react";

export default function Checkout() {
  const {loading, setPaymentMethod, register, handleSubmit, errors, submitForm} = useCheckout();
  return (
    <>
      <PageTitle title="Checkout" />
      <section className="checkout py-10 md:py-16">
        <div className="container">
          <form onSubmit={handleSubmit(submitForm)} className="w-full md:w-1/2 mx-auto">
            <div className="mb-3">
              <label htmlFor="details" className="block mb-2 text-text">Details</label>
              <input type="text" id="details" {...register('details')} className="w-full bg-white rounded-md p-2 outline-none border-0 border-none focus:ring-0 focus:shadow-none focus:border-none" />
              <p className="text-red-600 text-sm font-semibold mt-[2px]">{errors.details?.message}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="block mb-2 text-text">Phone</label>
              <input type="tel" id="phone" {...register('phone')}  className="w-full bg-white rounded-md p-2 outline-none border-0 border-none focus:ring-0 focus:shadow-none focus:border-none" />
              <p className="text-red-600 text-sm font-semibold mt-[2px]">{errors.phone?.message}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="block mb-2 text-text">City</label>
              <input type="text" id="city" {...register('city')} className="w-full bg-white rounded-md p-2 outline-none border-0 border-none focus:ring-0 focus:shadow-none focus:border-none" />
              <p className="text-red-600 text-sm font-semibold mt-[2px]">{errors.city?.message}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-text text-2xl font-semibold mb-2">Payment Method</h3>
              <div className="border border-[#D1D1D8] p-2 rounded-md">
                <div className="mb-3 flex items-center gap-2 border-b border-[#D1D1D8] py-4 px-6">
                  <input onChange={(e) => setPaymentMethod(e.target.value)} value="online" type="radio" id="online" name="payment" className="size-4 accent-primary checked:!bg-primary checked:!border-primary focus:ring-0 focus:shadow-none cursor-pointer" />
                  <label htmlFor="online" className="text-text font-medium cursor-pointer">Online Payment</label>
                </div>
                <div className="mb-3 flex items-center gap-2 py-4 px-6">
                  <input onChange={(e) => setPaymentMethod(e.target.value)} value="cash" type="radio" id="cash" name="payment" className="size-4 accent-primary checked:!bg-primary checked:!border-primary focus:ring-0 focus:shadow-none cursor-pointer" />
                  <label htmlFor="cash" className="text-text font-medium cursor-pointer">Cash On Delivery</label>
                </div>
              </div>
            </div>
            <button type="submit" className="p-2 bg-primary text-white rounded-full w-[25%]">
              {loading === "pending" ? <Loader className='animate-spin mx-auto' /> : 'Checkout'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
