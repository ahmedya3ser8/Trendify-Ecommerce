import { Helmet } from 'react-helmet';
import HeroHome from './components/HeroHome';
import FlashSale from './components/FlashSale';
import SpecialProducts from '@components/trendify/special-products/SpecialProducts';
import TopProducts from './components/TopProducts';
import SpecialDiscover from '@components/trendify/special-discover/SpecialDiscover';
import SpecialServices from '@components/trendify/special-services/SpecialServices';
import SpecialTestimonials from '@components/trendify/special-testimonials/SpecialTestimonials';
import NewCollection from './components/NewCollection';
import CategoriesSlider from './components/CategoriesSlider';
import HomeSlider from './components/HomeSlider';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
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
