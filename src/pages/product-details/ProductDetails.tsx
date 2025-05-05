import PageTitle from "@components/common/page-title/PageTitle";
import useProductDetails from "@hooks/useProductDetails";
import { Heart, Star, Truck } from "lucide-react";

export default function ProductDetails() {
  const {product, loading, colorName, sizeName, imgPath, colors, sizes, selectedColor, selectedSize, selectedImg} = useProductDetails()
  return (
    <>
      <PageTitle title="ProductDetails" />
      <section className="product-details py-10 md:py-16">
        <div className="container">
          {loading === 'pending' ? (
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
                    {product?.images.slice(0,4).map((img, index) => (
                      <div key={index} className="img mb-3 border border-primary rounded-3xl cursor-pointer overflow-hidden">
                        <img onClick={() => selectedImg(img)} src={img} className="w-[80px]" alt="product-image" />
                      </div>
                    ))}
                  </div>
                  <div className="h-[400px] md:h-[500px] w-full relative order-1 md:order-2">
                    <img src={imgPath == '' ? product?.imageCover : imgPath} className="w-full h-full" alt="product-image" />
                    <span className="w-[2.5rem] h-[40px] bg-white border absolute top-3 right-3 flex justify-center items-center z-30 rounded-full cursor-pointer">
                      <Heart className='text-primary' />
                    </span>
                  </div>
                </div>
                <div className="content">
                  <div className="flex items-center gap-1 py-2">
                    <Star className="text-yellow-600" />
                    <span className="text-text"> {product?.ratingsAverage} </span>
                    <span className="text-gray-500 text-sm">(18+)</span>
                  </div>
                  <h2 className="text-text text-3xl font-semibold"> {product?.title} </h2>
                  <p className="my-4 text-sm text-gray-400"> {product?.description} </p>
                  <div className="product_color text-text text-lg font-medium">
                    Color :
                    <span className="text-gray-400"> {colorName} </span>
                  </div>
                  <ul className="product_colors flex gap-3 my-3">
                    {colors.map((item, index) => (
                      <li key={index} onClick={() => selectedColor(item.name)} className={`w-8 h-8 rounded-full cursor-pointer`} style={{backgroundColor: item.color}}></li>
                    ))}
                  </ul>
                  <div className="product_size text-text text-lg font-medium">
                    Size :
                    <span className="text-primary"> {sizeName} </span>
                  </div>
                  <ul className="product_sizes flex gap-3 my-3">
                    {sizes.map((item, index) => (
                      <li key={index} onClick={() => selectedSize(item.name)} className="bg-[#FCFCFD] px-4 py-2 rounded-lg cursor-pointer text-[#667085] border border-[#EAECF0]"> {item.size} </li>
                    ))}
                  </ul>
                  <div className="product_quantity text-text text-lg font-medium">
                    Quantity :
                    <span className="text-primary"> {product?.quantity} </span>
                  </div>
                  <div className="my-4">
                    <button  className="w-full md:w-[70%] bg-primary rounded-xl py-3 text-white">
                      <span> {product?.price} EGP</span>
                      .
                      <span>Add to Cart</span>
                    </button>
                  </div>
                  <div className="product-delivery flex gap-3 items-center text-gray-400 px-3 py-2 bg-[#F2F4F7] mt-2">
                    <Truck />
                    <span>Estimated Delivery :</span>
                    <span className="text-text font-medium"> 5 may 2025 - 31 May 2025</span>
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
