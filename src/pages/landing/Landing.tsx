import { Helmet } from 'react-helmet';
import Hero from './components/Hero';
import SpecialServices from '@components/trendify/special-services/SpecialServices';
import SpecialProducts from '@components/trendify/special-products/SpecialProducts';
import SpecialDiscover from '@components/trendify/special-discover/SpecialDiscover';
import SpecialTestimonials from '@components/trendify/special-testimonials/SpecialTestimonials';
import ContactMe from '@components/trendify/contact-me/ContactMe';

export default function Landing() {
  return (
    <>
      <Helmet>
        <title>Landing</title>
      </Helmet>
      <>
        <Hero />
        <SpecialServices />
        <SpecialProducts />
        <SpecialDiscover />
        <SpecialTestimonials />
        <ContactMe />
      </>
    </>
  )
}
