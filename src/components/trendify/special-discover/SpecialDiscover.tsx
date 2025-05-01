import discoverImg from '@assets/images/discover.webp';
import Button from '@components/common/button/Button';

export default function SpecialDiscover() {
  return (
    <section style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${discoverImg})`}} className="discover py-6 md:py-12 bg-top bg-cover">
      <div className="container">
        <div className="h-[300px] md:h-[400px] relative">
          <div className="absolute w-full text-center text-white left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] p-5">
            <h2 className="text-[30px] md:text-[50px] font-bold mb-2">Discover Fashion That Speaks To You.</h2>
            <p className="text-[14px] md:text-[25px]">
              Explore a range of high-quality, affordable furniture designed to transform any room.
              Discover the perfect blend of style, comfort, and functionality for your space.
            </p>
            <Button color="#fff" />
          </div>
        </div>
      </div>
    </section>
  )
}
