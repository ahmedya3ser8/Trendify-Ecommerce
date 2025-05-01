import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay  } from 'swiper/modules';
import actGetCategories from '@store/categories/act/actGetCategories';
import 'swiper/css';

export default function CategoriesSlider() {
  const dispatch = useAppDispatch();
  const {loading, data} = useAppSelector(state => state.categories);
  useEffect(() => {
    dispatch(actGetCategories()).unwrap();
  }, [dispatch])
  return (
    <section className="categories-slider bg-white py-10 md:py-16">
      <div className="container">
        <Swiper
          spaceBetween={20}
          slidesPerView={8}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {loading === 'pending' ? (
            <div className="flex items-center justify-center h-screen">
              <span className="loader"></span>
            </div> 
          ) : data.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="text-center">
                <div className="w-[140px] h-[140px] mb-3 mx-auto">
                  <img src={item.image} className="w-full h-full object-cover rounded-full" alt="category-image" />
                </div>
                <h3 className="text-text-color font-medium"> {item.name} </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
