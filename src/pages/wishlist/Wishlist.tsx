import { Link } from "react-router-dom";
import PageTitle from "@components/common/page-title/PageTitle";
import WishlistItem from "./components/WishlistItem";
import useWishlist from "@hooks/useWishlist";

export default function Wishlist() {
  const {removeFromWishlist, addToCart, currentId, loading, wishlistLoading, data, count} = useWishlist();
  return (
    <>
      <PageTitle title="Wishlist" />
      <section className="wishlist py-10 md:py-16">
        <div className="container">
          <div className="flex items-center gap-1">
            <h2 className="text-text text-3xl font-medium">Wishlist</h2>
            <span className="text-primary"> {count} items</span>
          </div>
            {data.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {data.map((product) => (
                  <WishlistItem key={product.id} addToCart={addToCart} removeFromWishlist={removeFromWishlist} product={product} wishlistLoading={wishlistLoading} loading={loading} currentId={currentId} />
                ))}
              </div>
              ) : <div className='flex justify-center items-center h-screen'>
              your cart is empty! <Link to='/products' className='text-gray-400 underline ms-1' >Go To Shop</Link> 🛒🚫
              </div>
            }
        </div>
      </section>
    </>
  )
}
