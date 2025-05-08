import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Button({color}: {color?: string}) {
  return (
    <Link to='/products' style={{color: color}} className="py-2 px-6 w-fit rounded-3xl flex items-center mx-auto gap-2 border border-primary dark:border-gray-100 text-primary dark:text-gray-100 transition-all duration-300 hover:bg-primary hover:text-white mt-6">
      See All
      <ArrowRight className='size-5' />
    </Link>
  )
}
