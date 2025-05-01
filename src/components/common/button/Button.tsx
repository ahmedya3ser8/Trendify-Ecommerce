import { ArrowRight } from "lucide-react";

export default function Button({color}: {color?: string}) {
  return (
    <button style={{color: color}} className="py-2 px-6 rounded-3xl flex items-center mx-auto gap-2 border border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-white mt-6">
      See All
      <ArrowRight className='size-5' />
    </button>
  )
}
