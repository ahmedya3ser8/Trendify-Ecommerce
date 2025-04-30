import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "@layouts/mainLayout/MainLayout"
import AuthLayout from "@layouts/authLayout/AuthLayout"
import ProtectedRoute from "@components/auth/ProtectedRoute"
const Landing = lazy(() => import('@pages/landing/Landing'))
const Home = lazy(() => import('@pages/home/Home'))
const Products = lazy(() => import('@pages/products/Products'))
const AboutUs = lazy(() => import('@pages/about/AboutUs'))
const Blog = lazy(() => import('@pages/blog/Blog'))
const ContactUs = lazy(() => import('@pages/contact-us/ContactUs'))
const Register = lazy(() => import('@pages/Register'))
const Login = lazy(() => import('@pages/Login'))
const ForgetPassword = lazy(() => import('@pages/ForgetPassword'))
import NotFound from "@pages/NotFound"

const router  = createBrowserRouter([
  {
    "path": '',
    errorElement: <NotFound />,
    element: <MainLayout />,
    children: [
      { index: true, element: <Suspense> <Landing /> </Suspense> },
      { path: 'home', element: <Suspense> <ProtectedRoute> <Home /> </ProtectedRoute> </Suspense> },
      { path: 'products', element: <Suspense> <ProtectedRoute> <Products /> </ProtectedRoute> </Suspense> },
      { path: 'aboutus', element: <Suspense> <ProtectedRoute> <AboutUs /> </ProtectedRoute> </Suspense> },
      { path: 'blog', element: <Suspense> <ProtectedRoute> <Blog /> </ProtectedRoute> </Suspense> },
      { path: 'contactus', element: <Suspense> <ProtectedRoute> <ContactUs /> </ProtectedRoute> </Suspense> },
    ]
  },
  {
    path: 'auth',
    errorElement: <NotFound />,
    element: <AuthLayout />,
    children: [
      { path: 'register', element: <Suspense> <Register /> </Suspense> },
      { path: 'login', element: <Suspense> <Login /> </Suspense> },
      { path: 'forget-password', element: <Suspense> <ForgetPassword /> </Suspense> }
    ]
  }
])

export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}
