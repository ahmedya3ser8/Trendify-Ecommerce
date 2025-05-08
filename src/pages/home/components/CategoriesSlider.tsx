import useCategoriesQuery from '@hooks/useCategoriesQuery';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CategoriesSlider() {
  const {data, isLoading} = useCategoriesQuery();
  return (
    <section className="categories-slider bg-white dark:bg-[#1e1e1e] py-10 md:py-16">
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
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 8,
            },
          }}
        >
          {isLoading  ? (
            <div className="flex items-center justify-center h-screen">
              <span className="loader"></span>
            </div> 
          ) : data?.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="text-center">
                <div className="w-[140px] h-[140px] mb-3 mx-auto">
                  <img loading='lazy' src={item.image} className="w-full h-full object-cover rounded-full" alt="category-image" />
                </div>
                <h3 className="text-text dark:text-gray-100 text-sm font-medium"> {item.name} </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
