import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "@layouts/mainLayout/MainLayout"
import AuthLayout from "@layouts/authLayout/AuthLayout"
import ProtectedRoute from "@components/auth/ProtectedRoute"
const Landing = lazy(() => import('@pages/landing/Landing'))
const Home = lazy(() => import('@pages/home/Home'))
const Products = lazy(() => import('@pages/products/Products'))
const AboutUs = lazy(() => import('@pages/about-us/AboutUs'))
const Blog = lazy(() => import('@pages/blog/Blog'))
const ContactUs = lazy(() => import('@pages/contact-us/ContactUs'))
const Register = lazy(() => import('@pages/Register'))
const Login = lazy(() => import('@pages/Login'))
const Cart = lazy(() => import('@pages/cart/Cart'))
const Wishlist = lazy(() => import('@pages/wishlist/Wishlist'))
const ForgetPassword = lazy(() => import('@pages/ForgetPassword'))
const Checkout = lazy(() => import('@pages/checkout/Checkout'))
const AllOrders = lazy(() => import('@pages/all-orders/AllOrders'))
const ProductDetails = lazy(() => import('@pages/product-details/ProductDetails'))
import NotFound from "@pages/NotFound"
import LoadingScreen from "@components/feedback/LoadingScreen"

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
      { path: 'cart', element: <Suspense> <ProtectedRoute> <Cart /> </ProtectedRoute> </Suspense> },
      { path: 'allorders', element: <Suspense> <ProtectedRoute> <AllOrders /> </ProtectedRoute> </Suspense> },
      { path: 'wishlist', element: <Suspense fallback={<LoadingScreen />}> <ProtectedRoute> <Wishlist /> </ProtectedRoute> </Suspense> },
      { path: 'checkout/:id', element: <Suspense> <ProtectedRoute> <Checkout /> </ProtectedRoute> </Suspense> },
      { path: 'product/:id', element: <Suspense> <ProtectedRoute> <ProductDetails /> </ProtectedRoute> </Suspense> }
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
