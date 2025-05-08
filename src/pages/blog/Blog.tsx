import blogImg1 from '@assets/images/blog-1.png';
import blogImg2 from '@assets/images/blog-2.png';
import blogImg3 from '@assets/images/blog-3.png';
import blogImg4 from '@assets/images/blog-4.png';
import blogImg5 from '@assets/images/blog-5.png';
import blogImg6 from '@assets/images/blog-6.png';
import PageTitle from '@components/common/page-title/PageTitle';
import Subscription from '@components/trendify/subscription/Subscription';

const blogImgs = [blogImg1, blogImg2, blogImg3, blogImg4, blogImg5, blogImg6];
const date = new Date();
const formattedDate = date.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default function Blog() {
  return (
    <>
      <PageTitle title="Blog" />   
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl px-5 md:px-0">
          <div className="main-title text-center">
            <h1 className="text-text dark:text-gray-100 mb-3 text-3xl md:text-4xl font-bold">Blog</h1>
            <p className="text-[17px] md:text-sm text-gray-400 dark:text-gray-300 font-medium">Make your best moments more stylish with our latest designs of clothing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 mt-10 p-5">
            {blogImgs.map((img, index) => (
              <div key={index} className="blog rounded-md shadow-md">
                <img loading='lazy' src={img} className="w-full" alt="blog-image" />
                <div className="caption bg-white dark:bg-[#1e1e1e] p-5 text-gray-500 dark:text-gray-300">
                  <div className="flex justify-between items-center">
                    <span>Fashion</span>
                    <span> {formattedDate} </span>
                  </div>
                  <h2 className="my-5 text-text dark:text-gray-100 text-xl font-bold">The perfect Shopify theme</h2>
                  <p className="text-sm">
                    Shopify is the second most popular eCommerce store builder in the world. You can use Shopify in...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Subscription />
    </>
  )
}
