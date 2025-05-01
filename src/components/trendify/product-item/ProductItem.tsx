import { IProduct } from '@interfaces/iproduct';
import { Heart, Star, Plus } from 'lucide-react';

export default function ProductItem({imageCover, price, title, ratingsAverage}: IProduct) {
  return (
    <div className="product bg-white p-2">
      <div className="image cursor-pointer bg-[#F1F1F1] rounded-[5px] w-full mb-2 relative">
        <img  src={imageCover} className="w-full h-[275px] object-contain" alt="product-image" />
        <span className="w-[2.5rem] h-[40px] bg-white border absolute top-3 right-3 flex justify-center items-center z-30 rounded-full cursor-pointer">
          <Heart className='text-primary' />
        </span>
      </div>
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
          <button className="w-8 h-8 flex justify-center items-center bg-primary text-white rounded-md">
            <Plus />
          </button>
        </div>
      </div>
    </div>
  )
}
