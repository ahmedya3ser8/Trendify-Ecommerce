import { IProduct } from '@interfaces/iproduct';
import actAddProductToCart from '@store/cart/act/actAddProductToCart';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Heart, Star, Plus, Loader } from 'lucide-react';
import { memo, useCallback, useState } from 'react';
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';

const ProductItem = memo(({id, imageCover, price, title, ratingsAverage}: IProduct) => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(state => state.cart);
  const [currentId, setCurrentId] = useState('');
  const addToCart = useCallback((productId: string) => {
    setCurrentId(productId);
    dispatch(actAddProductToCart(productId)).unwrap().then((res) => {
      setCurrentId('');
      toast.success(res.message, {
        position: 'top-right'
      })
    }).catch((err) => {
      toast.error(err, {
        position: 'top-right'
      })
    })
  }, [dispatch]);
  return (
    <div className="product bg-white p-2">
      <Link to={`/product/${id}`} className="image block cursor-pointer bg-[#F1F1F1] rounded-[5px] w-full mb-2 relative">
        <img loading="lazy" src={imageCover} className="w-full h-[275px] object-contain" alt="product-image" />
        <span className="w-[2.5rem] h-[40px] bg-white border absolute top-3 right-3 flex justify-center items-center z-30 rounded-full cursor-pointer">
          <Heart className='text-primary' />
        </span>
      </Link>
      <div className="content p-2 text-text">
        <h3 className="text-[24px] line-clamp-1"> {title} </h3>
        <span className="flex items-center gap-1 py-2">
          <Star className='text-yellow-600 size-5' />
          <span className="text-text">{ratingsAverage}</span>
          <span className="text-gray-300 text-sm">(500+)</span>
        </span>
        <div className="flex justify-between items-center">
          <div className="text-primary">
            {price} EGP
          </div>
          <button onClick={() => addToCart(id)} className="w-8 h-8 flex justify-center items-center bg-primary text-white rounded-md">
            {loading === "pending" && currentId === id ? <Loader className='animate-spin mx-auto' /> : <Plus />}
          </button>
        </div>
      </div>
    </div>
  )
})

export default ProductItem;
