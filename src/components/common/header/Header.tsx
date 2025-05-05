import { Link, NavLink } from "react-router-dom";
import { Heart, ShoppingCart, LogOut } from 'lucide-react';
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { logout } from "@store/auth/authSlice";
import { useEffect } from "react";
import actGetLoggedUserCart from "@store/cart/act/actGetLoggedUserCart";

export default function Header() {
  const dispatch = useAppDispatch();
  const {numOfCartItems} = useAppSelector(state => state.cart);
  useEffect(() => {
    dispatch(actGetLoggedUserCart()).unwrap();
  }, [dispatch])
  return (
    <header className="fixed w-full bg-white z-[999] shadow-md">
      <div className="container flex justify-between items-center py-4">
        <Link to="/home" className="text-3xl text-primary font-serif">Trendify</Link>
        <nav className="flex justify-between items-center flex-1 ps-16">
          <ul className="flex gap-3">
            <li>
              <NavLink to='/home' className="p-2 text-gray-400 font-semibold transition-colors duration-300">Home</NavLink>
            </li>
            <li>
              <NavLink to='/products' className="p-2 text-gray-400 font-semibold transition-colors duration-300">Products</NavLink>
            </li>
            <li>
              <NavLink to='/aboutus' className="p-2 text-gray-400 font-semibold transition-colors duration-300">About us</NavLink>
            </li>
            <li>
              <NavLink to='/blog' className="p-2 text-gray-400 font-semibold transition-colors duration-300">Blog</NavLink>
            </li>
            <li>
              <NavLink to='/contactus' className="p-2 text-gray-400 font-semibold transition-colors duration-300">Contact us</NavLink>
            </li>
            <li>
              <NavLink to='/allorders' className="p-2 text-gray-400 font-semibold transition-colors duration-300">All Orders</NavLink>
            </li>
          </ul>
          <ul className="flex gap-3">
            <li>
              <Link to='/wishlist' className="relative">
                <Heart className="h-8 text-primary" /> 
              </Link>
            </li>
            <li>
              <Link to='/cart' className="relative"> 
                <ShoppingCart className="h-8 text-primary" />
                <span className="absolute -top-[7px] -right-[7px] w-[23px] h-[23px] bg-primary text-white rounded-full flex justify-center items-center text-xs border border-white">
                  {numOfCartItems}
                </span>
              </Link>
            </li>
            <li>
              <span className="cursor-pointer" onClick={() => dispatch(logout())}> <LogOut className="h-8 text-primary" /> </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
