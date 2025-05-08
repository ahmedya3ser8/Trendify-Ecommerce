import heroHomeImg from '@assets/images/home.png'
import arrow from '@assets/images/arrow.png'
import { Star } from 'lucide-react';

export default function HeroHome() {
  return (
    <section style={{backgroundImage: `linear-gradient(#0009, #0009), url(${heroHomeImg})`}} className="hero bg-cover bg-center py-10 md:py-20">
      <div className="container text-white">
        <h1 className="text-[30px] md:text-[45px] font-semibold">
          Elevate Your Home with <br/>
          Stylish Furniture
        </h1>
        <p className="max-w-[500px] text-sm my-5">
          Explore a range of high-quality, affordable furniture designed to transform any room.
          Discover the perfect blend of style, comfort, and functionality for your space.
        </p>
        <button className="py-2 px-5 w-[40%] md:w-2/12 bg-primary text-white rounded-3xl font-semibold">Shop Now</button>
        <img loading='lazy' src={arrow} className="relative w-[70px] md:w-[115px] left-[7%]" alt="arrow-image" />
        <div className="flex flex-col gap-1 relative w-fit left-[24%] md:left-[18%] bottom-10">
          <div className="flex gap-1 text-xl">
            4.8 |
            <div className="stars flex items-center gap-1">
              {[...Array(4)].map((_, i) => <Star key={i} className="size-4" />)}
            </div>
          </div>
          <span>150k Total Review</span>
        </div>
      </div>
    </section>
  )
}
