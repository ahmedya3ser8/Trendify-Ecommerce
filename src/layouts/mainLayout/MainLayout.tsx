import Footer from "@components/common/footer/Footer";
import Header from "@components/common/header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex justify-between flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-[60px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
