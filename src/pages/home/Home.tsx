import PageTitle from '@components/common/page-title/PageTitle';
import SpecialDiscover from '@components/trendify/special-discover/SpecialDiscover';
import SpecialProducts from '@components/trendify/special-products/SpecialProducts';
import SpecialServices from '@components/trendify/special-services/SpecialServices';
import SpecialTestimonials from '@components/trendify/special-testimonials/SpecialTestimonials';
import CategoriesSlider from './components/CategoriesSlider';
import FlashSale from './components/FlashSale';
import HeroHome from './components/HeroHome';
import HomeSlider from './components/HomeSlider';
import NewCollection from './components/NewCollection';
import TopProducts from './components/TopProducts';

export default function Home() {
  return (
    <>
      <PageTitle title="Home" />
      <>
        <HeroHome />
        <CategoriesSlider />
        <HomeSlider />
        <FlashSale />
        <NewCollection />
        <SpecialProducts />
        <TopProducts />
        <SpecialDiscover />
        <SpecialServices />
        <SpecialTestimonials />
      </>
    </>
  )
}
