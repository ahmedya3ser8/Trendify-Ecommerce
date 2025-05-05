import PageTitle from '@components/common/page-title/PageTitle';
import ContactMe from '@components/trendify/contact-me/ContactMe';
import Subscription from '@components/trendify/subscription/Subscription';

export default function ContactUs() {
  return (
    <>
      <PageTitle title="ContactUs" />
      <>
        <ContactMe />
        <Subscription />
      </>
    </>
  )
}
