import brush from '@assets/images/Brush.png'
import shape from '@assets/images/shape.png'
import heroImg from '@assets/images/landing.png'

export default function Hero() {
  return (
    <section className='hero py-10 md:py-16'>
      <div className="grid grid-cols-1 md:grid-cols-[65%_30%] gap-12 items-center px-5 md:px-0">
        <div className="col relative">
          <h1 className="text-[30px] text-text md:text-[45px] font-semibold">
            Elevate Your Style With <br/> The Latest Trends.
          </h1>
          <img src={brush} className="absolute top-[25%] md:top-[35%] left-[17%]" alt="Brush" />
          <p className="text-muted max-w-[550px] my-4">
            Explore a curated of stylish, affordable fashion designed to elevate
            your wardrobe. Discover the perfect blend of trend, comfort, and
            individually for your look
          </p>
          <button className="py-3 px-[70px] mt-4 bg-primary text-white rounded-[25px]">Download App</button>
          <img src={shape} className="absolute w-[80px] right-0 -bottom-[30px] md:bottom-[-70px] md:right-[120px]" alt="shape" />
        </div>
        <div className="col relative">
          <img src={heroImg} className="w-full h-[350px] md:h-full rounded-[90px_40px]" alt="landing-image" />
          <img src={shape} className="absolute w-[80px] top-0 left-1/2 -translate-x-[50%] -translate-y-[50%]" alt="shape" />
        </div>
      </div>
    </section>
  )
}
