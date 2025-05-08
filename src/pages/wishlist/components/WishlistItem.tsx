import { TLoading } from "@customTypes/shared";
import { IProduct } from "@interfaces/iproduct";
import { Loader, ShoppingCart, Star, Trash } from "lucide-react";
import { memo } from "react";

type TwishlistItem = {
  product: IProduct,
  wishlistLoading: TLoading,
  loading: TLoading,
  currentId: string,
  addToCart: (productId: string) => void,
  removeFromWishlist: (productId: string) => void,
}

const WishlistItem = memo(({product, wishlistLoading, loading, currentId, addToCart, removeFromWishlist}: TwishlistItem) => {
  return (
    <div key={product.id} className="product flex flex-col gap-3 md:flex-row md:items-center border-b border-gray-300 dark:border-gray-100 bg-white dark:bg-[#1e1e1e] p-5 rounded-md pt-5 first:pt-0 last:border-b-0">
      <div className="image">
        <img src={product.imageCover} className="w-32 mx-auto" alt="product-image" />
      </div>
      <div className="content flex justify-between items-center flex-1">
        <div className="caption">
          <span className="text-gray-400 dark:text-gray-300 text-sm mb-2 block"> {product.category.name} </span>
          <h3 className="text-text dark:text-gray-100 text-xl font-semibold"> {product.title.split(' ', 2).join(' ')} </h3>
          <div className="star bg-[#fafafa] dark:bg-black rounded-3xl py-1 px-2 w-fit flex items-center gap-1">
            <span className="dark:text-gray-100"> {product.ratingsAverage} </span>
            <Star className="size-4 text-yellow-500 dark:text-gray-100" />
          </div>
        </div>
        <div className="text-right">
          <span className="text-xl dark:text-gray-100"> {product.price} EGP</span>
          <div className="flex items-center gap-2 mt-3">
            <span onClick={() => removeFromWishlist(product.id)} className="h-10 px-3 text-primary dark:text-gray-100 flex justify-center items-center cursor-pointer border border-primary rounded-xl transition-all duration-300 hover:bg-primary hover:text-white">
              {wishlistLoading === "pending" && currentId === product.id ? <Loader className='animate-spin mx-auto' /> : <Trash className="size-5" />}
            </span>
            <button onClick={() => addToCart(product.id)} className="w-[150px] h-10 flex items-center justify-center gap-1 bg-primary text-white rounded-md">
              {loading === "pending" && currentId === product.id ? <Loader className='animate-spin mx-auto' /> : <> <ShoppingCart className="size-5" /> Add To Cart</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default WishlistItem;
