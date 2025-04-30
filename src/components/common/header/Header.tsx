import { Link, NavLink } from "react-router-dom";
import { Heart, ShoppingCart, LogOut } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
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
              <Link to='/'> <Heart className="h-8 text-primary" /> </Link>
            </li>
            <li>
              <Link to='/'> <ShoppingCart className="h-8 text-primary" /> </Link>
            </li>
            <li>
              <span> <LogOut className="h-8 text-primary" /> </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
