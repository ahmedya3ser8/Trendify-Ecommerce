import { IProductCart } from '@interfaces/icart';
import { Trash, Plus, Minus, Star } from 'lucide-react';
import { memo } from 'react';

type TCartItem = {
  count: number, 
  price: number, 
  product: IProductCart, 
  removeCartItem: (id: string) => void,
  updateQuantity: (id: string, count: number) => void
}

const CartItem = memo(({count, price, product, removeCartItem, updateQuantity}: TCartItem) => {
  return (
    <div className="product flex flex-col gap-3 md:flex-row md:items-center border-b border-gray-300 py-5 first:pt-0 last:border-b-0">
      <div className="image mb-3">
        <img loading='lazy' src={product.imageCover} className="w-32" alt="product-image" />
      </div>
      <div className="content flex justify-between items-center flex-1">
        <div className="caption">
          <span className="text-gray-400 text-sm mb-2 block"> {product.category.name} </span>
          <h3 className="text-text text-xl font-semibold"> {product.title.split(' ', 2).join(' ')} </h3>
          <div className="star bg-[#fafafa] rounded-3xl py-1 px-2 w-fit flex items-center gap-1">
            <span> {product.ratingsAverage}</span>
            <Star className='text-yellow-500 size-4' />
          </div>
        </div>
        <div className="text-right">
          <span className="text-xl"> {price} EGP</span>
          <div className="flex items-center gap-2 mt-3">
            <span onClick={() => removeCartItem(product.id)} className="h-10 px-3 text-primary flex justify-center items-center cursor-pointer border border-primary rounded-xl transition-all duration-300 hover:bg-primary hover:text-white">
              <Trash className='size-4' />
            </span>
            <div className="btns overflow-hidden flex items-center justify-around text-text w-[120px] h-10 border border-primary rounded-xl">
              <button onClick={() => updateQuantity(product.id, count - 1)} className="w-[30%] p-2 h-full transition-all duration-300 hover:bg-primary hover:text-white">
                <Minus className='size-4' />
              </button>
              <span className="w-[40%] h-full flex justify-center items-center"> {count} </span>
              <button onClick={() => updateQuantity(product.id, count + 1)} className="w-[30%] p-2 h-full transition-all duration-300 hover:bg-primary hover:text-white">
                <Plus className='size-4' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default CartItem;
