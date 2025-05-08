import PageTitle from "@components/common/page-title/PageTitle";
import useProductDetailsQuery from "@hooks/useProductDetailsQuery";
import { Heart, Star, Truck } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const colors = [
  {name: 'Blue', color: '#507ccd'},
  {name: 'White', color: '#fff'},
  {name: 'Brown', color: '#c88242'},
  {name: 'Black', color: '#000'},
  {name: 'Soft Clay', color: '#dcb9a8'},
  {name: 'Misty Olive', color: '#a7b2a3'}
]
const sizes = [
  {name: 'Extra Small', size: 'XS'},
  {name: 'Small', size: 'S'},
  {name: 'Medium', size: 'M'},
  {name: 'Large', size: 'L'},
  {name: 'Extra Large', size: 'XL'},
  {name: 'Double Extra Large', size: 'XXL'},
  {name: 'Triple Extra Large', size: 'XXXL'}
]

export default function ProductDetails() {
  const [colorName, setColorName] = useState('Blue');
  const [sizeName, setSizeName] = useState('Medium');
  const [imgPath, setImgPath] = useState('');
  function selectedColor(name: string) {
    setColorName(name);
  }
  function selectedSize(name: string) {
    setSizeName(name);
  }
  function selectedImg(img: string) {
    setImgPath(img);
  }
  const params = useParams();
  const {isLoading, data: product} = useProductDetailsQuery(params.id as string);
  return (
    <>
      <PageTitle title="ProductDetails" />
      <section className="product-details py-10 md:py-16">
        <div className="container">
          {isLoading ? (
            <>
              <div className="flex items-center justify-center h-screen">
                <span className="loader"></span>
              </div>
            </>
            ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="image flex flex-col md:flex-row gap-4 md:gap-8 justify-between">
                  <div className="w-full flex flex-row justify-between md:flex-col md:w-[100px] order-2 md:order-1">
                    {product?.data.images.slice(0,4).map((img, index) => (
                      <div key={index} className="img mb-3 border border-primary dark:border-gray-100 rounded-3xl cursor-pointer overflow-hidden">
                        <img onClick={() => selectedImg(img)} src={img} className="w-[80px]" alt="product-image" />
                      </div>
                    ))}
                  </div>
                  <div className="h-[400px] md:h-[500px] w-full relative order-1 md:order-2">
                    <img src={imgPath == '' ? product?.data.imageCover : imgPath} className="w-full h-full" alt="product-image" />
                    <span className="w-[2.5rem] h-[40px] bg-white dark:bg-[#1e1e1e] border absolute top-3 right-3 flex justify-center items-center z-30 rounded-full cursor-pointer">
                      <Heart className='text-primary dark:text-gray-100' />
                    </span>
                  </div>
                </div>
                <div className="content">
                  <div className="flex items-center gap-1 py-2">
                    <Star className="text-yellow-600" />
                    <span className="text-text dark:text-gray-100"> {product?.data.ratingsAverage} </span>
                    <span className="text-gray-500 text-sm">(18+)</span>
                  </div>
                  <h2 className="text-text dark:text-gray-100 text-3xl font-semibold"> {product?.data.title} </h2>
                  <p className="my-4 text-sm text-gray-400 dark:text-gray-300"> {product?.data.description} </p>
                  <div className="product_color text-text dark:text-gray-100 text-lg font-medium">
                    Color :
                    <span className="text-gray-400 dark:text-gray-300"> {colorName} </span>
                  </div>
                  <ul className="product_colors flex gap-3 my-3">
                    {colors.map((item, index) => (
                      <li key={index} onClick={() => selectedColor(item.name)} className={`w-8 h-8 rounded-full cursor-pointer`} style={{backgroundColor: item.color}}></li>
                    ))}
                  </ul>
                  <div className="product_size text-text dark:text-gray-100 text-lg font-medium">
                    Size :
                    <span className="text-primary dark:text-gray-100"> {sizeName} </span>
                  </div>
                  <ul className="product_sizes flex gap-3 my-3">
                    {sizes.map((item, index) => (
                      <li key={index} onClick={() => selectedSize(item.name)} className="bg-[#FCFCFD] dark:bg-[#1e1e1e] dark:text-gray-100 px-4 py-2 rounded-lg cursor-pointer text-[#667085] border border-[#EAECF0]"> {item.size} </li>
                    ))}
                  </ul>
                  <div className="product_quantity text-text dark:text-gray-100 text-lg font-medium">
                    Quantity :
                    <span className="text-primary dark:text-gray-100"> {product?.data.quantity} </span>
                  </div>
                  <div className="my-4">
                    <button  className="w-full md:w-[70%] bg-primary rounded-xl py-3 text-white">
                      <span> {product?.data.price} EGP</span>
                      .
                      <span>Add to Cart</span>
                    </button>
                  </div>
                  <div className="product-delivery flex gap-3 items-center text-gray-400 dark:text-gray-300 px-3 py-2 bg-[#F2F4F7] dark:bg-[#121212] mt-2">
                    <Truck />
                    <span>Estimated Delivery :</span>
                    <span className="text-text dark:text-gray-100 font-medium"> 5 may 2025 - 31 May 2025</span>
                  </div>
                </div>
              </div>
            </>
            )}
        </div>
      </section>
    </>
  )
}
