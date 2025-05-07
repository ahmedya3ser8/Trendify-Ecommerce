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
  const [isOpenModal, setIsOpenModal] = useState(false);
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
        setIsOpenModal(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const toggleDropDown = () => {
    setIsOpenModal((prev) => !prev);
  }
  return (
    <header className="fixed w-full bg-white z-[999] shadow-md">
      <div className="container flex justify-between items-center flex-wrap py-4">
        <Link to="/home" className="text-3xl text-primary font-serif">Trendify</Link>
        <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
          <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
        </button>
        <nav className={`flex-col md:flex-row items-start justify-between md:items-center mt-4 md:mt-0 md:flex-1 p-0 md:ps-16 md:flex w-full ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row pb-3 md:pb-0 gap-3">
            <li>
              <NavLink to='/home' onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-400 font-semibold transition-colors duration-300">Home</NavLink>
            </li>
            <li>
              <NavLink to='/products' onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-400 font-semibold transition-colors duration-300">Products</NavLink>
            </li>
            <li>
              <NavLink to='/aboutus' onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-400 font-semibold transition-colors duration-300">About us</NavLink>
            </li>
            <li>
              <NavLink to='/blog' onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-400 font-semibold transition-colors duration-300">Blog</NavLink>
            </li>
            <li>
              <NavLink to='/contactus' onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-400 font-semibold transition-colors duration-300">Contact us</NavLink>
            </li>
          </ul>
          <ul className="flex pt-3 md:pt-0 gap-3">
            <li>
              <Link to='/wishlist' onClick={() => setIsOpen(!isOpen)} className="relative">
                <Heart className="h-8 text-primary" /> 
                <span className="absolute -top-[7px] -right-[7px] w-[23px] h-[23px] bg-primary text-white rounded-full flex justify-center items-center text-xs border border-white">
                  {count}
                </span>
              </Link>
            </li>
            <li>
              <Link to='/cart' onClick={() => setIsOpen(!isOpen)} className="relative"> 
                <ShoppingCart className="h-8 text-primary" />
                <span className="absolute -top-[7px] -right-[7px] w-[23px] h-[23px] bg-primary text-white rounded-full flex justify-center items-center text-xs border border-white">
                  {numOfCartItems}
                </span>
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <User onClick={() => toggleDropDown()} className="h-8 text-primary cursor-pointer" />
              <ul className={`${isOpenModal ? 'block' : 'hidden'} absolute w-[200px] bg-white left-[40px] md:left-auto top-[47px] md:right-0 md:top-[40px] p-[6px] z-[999] shadow-md rounded-md`}>
                <li className="p-2">Hello {userName}</li>
                <Link to='/allorders' onClick={() => setIsOpenModal(false)} className="flex items-center gap-2 p-2 transition-colors hover:bg-[#f1f5f9] duration-300 cursor-pointer"> <History className="size-5" /> Orders </Link>
                <Link to='/auth/login' onClick={() => dispatch(logout())} className="flex items-center gap-2 p-2 transition-colors hover:bg-[#f1f5f9] duration-300 cursor-pointer"> <LogOut className="size-5" /> Logout </Link>
              </ul>
            </li>
          </ul>
        </nav> 
      </div>
    </header>
  )
}
