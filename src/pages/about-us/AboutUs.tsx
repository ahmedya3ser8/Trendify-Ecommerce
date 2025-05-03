import { Helmet } from 'react-helmet';
import { Quote } from 'lucide-react';
import aboutHeroImg from '@assets/images/about-us.jpg'
import aboutSignImg from '@assets/images/about-sign.png'
import aboutUsImg1 from '@assets/images/aboutus-1.png'
import aboutUsImg2 from '@assets/images/aboutus-2.png'
import aboutUsImg3 from '@assets/images/aboutus-3.png'
import aboutUsFooterImg1 from '@assets/images/about-footer-1.jpg'
import aboutUsFooterImg2 from '@assets/images/about-footer-2.webp'
import aboutUsFooterImg3 from '@assets/images/about-footer-3.webp'
import aboutUsFooterImg4 from '@assets/images/about-footer-4.webp'
import aboutUsFooterImg5 from '@assets/images/about-footer-5.jpg'

const aboutUsFooterImgs = [aboutUsFooterImg1, aboutUsFooterImg2, aboutUsFooterImg3, aboutUsFooterImg4, aboutUsFooterImg5];

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>AboutUs</title>
      </Helmet>
      <section className="about-hero py-10 md:py-16">
        <div className="container relative">
          <div className="image md:w-[80%] h-[600px] ms-auto border border-[#EAECF0]">
            <img src={aboutHeroImg} className="w-full h-full rounded-[36px]" alt="about-us" />
          </div>
          <div className="content absolute left-0 top-1/2 -translate-y-[50%] w-[350px] md:w-[500px] p-8 rounded-3xl bg-white">
            <span className="text-primary text-4xl">
              <Quote className='size-7' />
            </span>
            <p className="text-sm mdtext-xl my-3">
              We are glad to present you our most perfect Shopify theme, which supports Sections Everywhere,
              very high metric scores by google page speed insight.
              This is the most mobile-oriented theme that will be convenient on any of your devices.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-text font-bold">Jack Donowan</span>
              <img src={aboutSignImg} className="w-[150px]" alt="about-sign" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-16">
        <div className="container">
          <div className="main-title text-center">
            <h1 className="text-text mb-3 text-3xl md:text-4xl font-bold">A few words about us</h1>
            <p className="text-[16px] md:text-sm text-gray-400 font-medium">
              Make your best moments more stylish with our latest designs of clothing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-10">
            <div className="image">
              <img src={aboutUsImg1} className="w-full object-cover" alt="aboutus" />
            </div>
            <div className="ps-6">
              <h2 className="text-text font-bold text-2xl mb-3">Why choose us ?</h2>
              <p className="text-[17px] text-gray-400 pe-4">
                Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque.
                Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo,
                rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum,
                lobortis sed mauris. Integer congue, sem elementum varius tristique.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="content">
              <h2 className="text-text text-3xl mb-5 font-bold">Trusted online shopping</h2>
              <p className="text-gray-400 text-[18px]">
                Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque.
                Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo,
                rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus,
                commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique.
              </p>
            </div>
            <div className="image">
              <img src={aboutUsImg2} className="w-full object-cover"  alt="aboutus" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="image">
              <img src={aboutUsImg3} className="w-full object-cover"  alt="aboutus" />
            </div>
            <div className="content">
              <h2 className="text-text text-3xl mb-5 font-bold">Trusted online shopping</h2>
              <p className="text-gray-400 text-[18px]">
                Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque.
                Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo,
                rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus,
                commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-footer py-10 md:py-16">
        <div className="px-5 md:px-0">
          <div className="main-title text-center">
            <h2 className="text-text text-4xl flex flex-col items-center md:flex-row gap-3 justify-center">
              <span className='hidden md:block'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></span>
              <span className="text-primary italic font-bold">#iconic_fashion</span>
              <span className="font-bold">On Instagram</span>
            </h2>
            <p className="text-gray-400 text-sm mt-3">Phasellus lorem malesuada ligula pulvinar commodo maecenas</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-0 mt-10">
            {aboutUsFooterImgs.map((img, index) => (
              <div key={index} className="image">
                <img src={img} className="w-full h-full object-cover" alt="aboutus" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
