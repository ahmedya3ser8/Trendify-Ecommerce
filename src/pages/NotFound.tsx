import Lottie from "lottie-react";
import notFound from '@assets/lottieFiles/notFound.json'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-[500px]">
          <Lottie animationData={notFound} />
        </div>
        <Link to='/' className="text-primary underline" replace={true}>
          How about going back to safety?
        </Link>
      </div>
    </>
  )
}
