import { Lightbulb, Headphones, Truck } from 'lucide-react';
import MainTitle from '../main-title/MainTitle';

const servicesList = [
  {
    id: 1,
    icon: <Lightbulb className='text-primary size-7' />,
    title: 'Inspiration',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis est, quod dicta eveniet ea itaque'
  },
  {
    id: 2,
    icon: <Headphones className='text-primary size-7' />,
    title: '24/7 Customer Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis est, quod dicta eveniet ea itaque'
  },
  {
    id: 3,
    icon: <Truck className='text-primary size-7' />,
    title: 'Express Shipping',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis est, quod dicta eveniet ea itaque'
  }
]

export default function SpecialServices() {
  return (
    <section className="special-services py-10 md:py-16">
      <div className="container">
        <MainTitle title='Services' description={<>Benefits when using <br/> our services</>} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-7">
          {servicesList.map((card) => (
            <div key={card.id} className="card bg-white rounded-lg text-center md:text-left p-5">
              <span className="size-12 rounded-full bg-[#f6f6f6] mx-auto md:mr-auto md:ml-0 flex justify-center items-center mb-2">
                {card.icon}
              </span>
              <h3 className="text-text text-lg font-medium mb-4">{card.title}</h3>
              <p className="text-muted text-sm md:text-[16px] pb-4"> {card.description} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
