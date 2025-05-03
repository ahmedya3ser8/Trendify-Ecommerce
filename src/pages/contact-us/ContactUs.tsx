import ContactMe from '@components/trendify/contact-me/ContactMe';
import Subscription from '@components/trendify/subscription/Subscription';
import { Helmet } from 'react-helmet';

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>ContactUs</title>
      </Helmet>
      <>
        <ContactMe />
        <Subscription />
      </>
    </>
  )
}
