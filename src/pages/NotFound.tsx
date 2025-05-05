import notFound from '@assets/lottieFiles/notFound.json';
import PageTitle from "@components/common/page-title/PageTitle";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <PageTitle title="Not Found" />
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
