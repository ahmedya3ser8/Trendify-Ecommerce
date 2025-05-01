import collection1 from '@assets/images/collection-1.png';
import collection2 from '@assets/images/collection-2.webp';
import collection3 from '@assets/images/collection-3.webp';
import MainTitle from '@components/trendify/main-title/MainTitle';

export default function NewCollection() {
  return (
    <section className="new-collection py-10 md:py-16">
      <div className="container">
        <MainTitle title='New Collection' description={<>Check the new Collection</>} />
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-5 mt-10">
          <div className="h-[340px] md:h-[700px] relative row-span-2">
            <img src={collection1} className="w-full h-full object-cover aspect-video md:aspect-auto rounded-3xl" alt="collection-image" />
            <div className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-white">
              <h3 className="text-5xl mb-2">Shoes</h3>
              <p className="text-3xl">UP TO 50% OFF</p>
            </div>
          </div>
          <div className="h-[340px] relative">
            <img src={collection2} className="w-full h-full object-cover aspect-video md:aspect-auto rounded-3xl" alt="collection-image" />
            <div className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-white">
              <h3 className="text-5xl mb-2">Bags</h3>
              <p className="text-3xl">UP TO 50% OFF</p>
            </div>
          </div>
          <div className="h-[340px] relative">
            <img src={collection3} className="w-full h-full object-cover aspect-video md:aspect-auto rounded-3xl" alt="collection-image" />
            <div className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-white">
              <h3 className="text-5xl mb-2">Accessories</h3>
              <p className="text-3xl">UP TO 50% OFF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
