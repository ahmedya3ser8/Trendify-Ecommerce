import { logout } from "@store/auth/authSlice";
import actGetLoggedUserCart from "@store/cart/act/actGetLoggedUserCart";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetLoggedUserWishlist from "@store/wishlist/act/actGetLoggedUserWishlist";
import { Heart, History, LogOut, ShoppingCart, User } from 'lucide-react';
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const dispatch = useAppDispatch();
  const {numOfCartItems} = useAppSelector(state => state.cart);
  const {count} = useAppSelector(state => state.wishlist);
  const {token} = useAppSelector(state => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);
  const userName = localStorage.getItem('userName') as string;
  useEffect(() => {
    if (token !== null) {
      dispatch(actGetLoggedUserCart()).unwrap();
      dispatch(actGetLoggedUserWishlist()).unwrap();
    }
  }, [dispatch, token])
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const toggleDropDown = () => {
    setIsOpen((prev) => !prev);
  }
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
          </ul>
          <ul className="flex gap-3">
            <li>
              <Link to='/wishlist' className="relative">
                <Heart className="h-8 text-primary" /> 
                <span className="absolute -top-[7px] -right-[7px] w-[23px] h-[23px] bg-primary text-white rounded-full flex justify-center items-center text-xs border border-white">
                  {count}
                </span>
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
            <li className="relative" ref={dropdownRef}>
              <User onClick={() => toggleDropDown()} className="h-8 text-primary cursor-pointer" />
              <ul className={`${isOpen ? 'block' : 'hidden'} absolute w-[200px] bg-white right-0 top-[40px] p-[6px] z-[999] shadow-md rounded-md`}>
                <li className="p-2">Hello {userName}</li>
                <Link to='/allorders' onClick={() => setIsOpen(false)} className="flex items-center gap-2 p-2 transition-colors hover:bg-[#f1f5f9] duration-300 cursor-pointer"> <History className="size-5" /> Orders </Link>
                <Link to='/auth/login' onClick={() => dispatch(logout())} className="flex items-center gap-2 p-2 transition-colors hover:bg-[#f1f5f9] duration-300 cursor-pointer"> <LogOut className="size-5" /> Logout </Link>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
