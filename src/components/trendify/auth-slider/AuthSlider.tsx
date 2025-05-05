import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade  } from 'swiper/modules';
import authSlider1 from '@assets/images/auth-slider-1.png';
import authSlider2 from '@assets/images/auth-slider-2.png';
import authSlider3 from '@assets/images/auth-slider-3.png';

const slides: string[] = [authSlider1, authSlider2, authSlider3];

export default function AuthSlider() {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      modules={[Autoplay, EffectFade]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      effect="fade"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img loading='lazy' src={slide} className='w-full object-cover' alt="auth-slider" />
          <div className="w-full absolute left-1/2 bottom-[20%] text-white -translate-x-[50%] -translate-y-[50%] text-center">
            <h2 className="text-2xl font-bold">Welcome to Trendify</h2>
            <p>Discover the latest trends, <br/> express your unique style.</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
