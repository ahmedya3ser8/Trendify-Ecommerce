import { Link } from 'react-router-dom';
import useCart from '@hooks/useCart';
import { Trash } from 'lucide-react';
import CartItem from './components/CartItem';
import OrderSummary from './components/OrderSummary';
import PageTitle from '@components/common/page-title/PageTitle';

export default function Cart() {
  const {loading, data, cartId, numOfCartItems, removeCartItem, updateQuantity, clearCart} = useCart();
  return (
    <>
      <PageTitle title="Cart" />    
      <section className="cart py-10 md:py-16">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <h2 className="text-text dark:text-gray-100 text-3xl font-medium">Cart</h2>
              <span className="text-primary dark:text-gray-300"> {numOfCartItems} items</span>
            </div>
            <button onClick={clearCart} className="py-2 px-3 rounded-md bg-primary text-white flex items-center gap-1">
              Remove All
              <Trash className='size-5' />
            </button>
          </div>
          {loading === 'pending' ? (
            <>
              <div className="flex items-center justify-center h-screen">
                <span className="loader"></span>
              </div>
            </>
          ): (
            <>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-5 mt-10">
                <div className="bg-white dark:bg-[#1e1e1e] p-5 rounded-md">
                  {data !== null ? data?.products.map((product) => (
                    <CartItem updateQuantity={updateQuantity} removeCartItem={removeCartItem} key={product._id} count={product.count} price={product.price} product={product.product} />
                    )) : <div className='flex justify-center items-center h-full dark:text-gray-100'>
                      your cart is empty! <Link to='/products' className='text-gray-400 underline ms-1' >Go To Shop</Link> 🛒🚫
                    </div>
                  }
                </div>
                <OrderSummary cartId={cartId as string} totalPrice={data?.totalCartPrice as number} />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
