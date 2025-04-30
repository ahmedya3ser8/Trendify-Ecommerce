import { Helmet } from 'react-helmet';
import Hero from './components/Hero';
import SpecialServices from '@components/trendify/special-services/SpecialServices';

export default function Landing() {
  return (
    <>
      <Helmet>
        <title>Landing</title>
      </Helmet>
      <>
        <Hero />
        <SpecialServices />
      </>
    </>
  )
}
