import PageTitle from '@components/common/page-title/PageTitle';
import ContactMe from '@components/trendify/contact-me/ContactMe';
import SpecialDiscover from '@components/trendify/special-discover/SpecialDiscover';
import SpecialProducts from '@components/trendify/special-products/SpecialProducts';
import SpecialServices from '@components/trendify/special-services/SpecialServices';
import SpecialTestimonials from '@components/trendify/special-testimonials/SpecialTestimonials';
import Hero from './components/Hero';

export default function Landing() {
  return (
    <>
      <PageTitle title="Landing" />
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
