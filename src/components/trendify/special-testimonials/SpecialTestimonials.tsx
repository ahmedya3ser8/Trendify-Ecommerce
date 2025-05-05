import MainTitle from '../main-title/MainTitle';
import customerImg from '@assets/images/testimonial.png'
import { Quote, Star } from 'lucide-react';

const data = [
  {title: 'Berry Gunawan', count: 3.5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis quam vitae voluptas illum!'},
  {title: 'Berry Gunawan', count: 3.8, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis quam vitae voluptas illum!'},
  {title: 'Berry Gunawan', count: 3.7, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis quam vitae voluptas illum!'}
]

export default function SpecialTestimonials() {
  return (
    <section className="testimonials py-10 md:py-16">
      <div className="container">
        <MainTitle title='Testimonials' description={<>What Our Customer Say</>} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          {data.map((item, index) => (
            <div key={index} className="card bg-white rounded-md shadow-sm p-5 text-center md:text-left">
              <span className="text-4xl text-primary">
                <Quote className='size-7' />
              </span>
              <p className="my-3 text-gray-400">{item.description}</p>
              <div className="flex gap-2">
                <img loading='lazy' src={customerImg} className="size-12 rounded-full" alt="customer-image" />
                <div className="flex justify-between items-center flex-1">
                  <h3 className="text-text text-xl font-bold"> {item.title} </h3>
                  <div className="flex items-center gap-1">
                    <span>
                      <Star className='size-5 text-primary' />
                    </span>
                    <span>{item.count}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
