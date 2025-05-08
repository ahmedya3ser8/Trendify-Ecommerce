import { Mail } from 'lucide-react'

export default function Subscription() {
  return (
    <section className="subscription py-10 md:py-16">
      <div className="container bg-white dark:bg-[#1e1e1e] flex justify-center items-center flex-col text-center p-12">
        <span className="text-primary dark:text-gray-100 text-4xl">
          <Mail className='size-10' />
        </span>
        <h3 className="uppercase text-text dark:text-gray-100 font-medium mt-2 mb-4">sign up for teemate style news</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
          Get 15% of your first purchaxsel! plus, be the first to known about sales, <br/>
          new product launches and exclusive offers!
        </p>
        <div className="flex gap-4 mb-3 w-full md:w-[450px]">
          <input type="text" className="w-full bg-white p-2 border border-primary dark:placeholder-gray-400 dark:border-gray-100 outline-none rounded-lg focus:ring-0 focus:border-primary dark:focus:border-gray-100 focus:shadow-none" placeholder="Enter Your Email" />
          <button className="p-2 bg-primary transition-all duration-300 hover:bg-[#9a612d] text-white border border-white rounded-lg">Subscribe</button>
        </div>
      </div>
    </section>
  )
}
