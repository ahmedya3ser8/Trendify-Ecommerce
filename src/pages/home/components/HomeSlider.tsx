import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import homeSliderImg from '@assets/images/home-slider.jpeg'

export default function HomeSlider() {
  return (
    <section className="home-slider overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {[...Array(3).fill(0)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="relative text-white dark:bg-[#1e1e1e]">
              <img loading='lazy' src={homeSliderImg} className="w-full h-[500px] object-cover" alt="slide-image" />
              <div className="absolute top-[40%] left-0 translate-x-[50%]">
                <h2 className="text-3xl md:text-4xl font-medium mb-3"> Upgrade your Style </h2>
                <p className="text-[16px] md:text-[25px] mb-5"> up to 50% off on all <br/> clothing and accessories! </p>
                <button className="py-3 px-5 bg-primary text-white rounded-md">Shop Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
