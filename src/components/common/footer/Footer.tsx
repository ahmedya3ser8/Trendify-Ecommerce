import { Link } from "react-router-dom";

const colAboutUs = ["FAQ", "Contact", "Returns", "Blog", "Shipping"];
const colCoustomerSupport = ["Affiliates", "Apply Pay Payments", "Returns", "Returns Policy", "Returns"];

export default function Footer() {
  return (
    <footer className="bg-[#2e2e2e] py-10 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-[60px] text-white">
          <div className="col col-span-2">
            <h2 className="text-4xl font-semibold mb-3">Trendify</h2>
            <p className="text-gray-400 text-sm my-6">Join Our newsletter to stay up to date on feautres and releases.</p>
            <div className="flex gap-4 mb-3">
              <input type="text" className="w-full px-2 outline-none text-text border border-primary rounded-lg focus:ring-0 focus:border-primary focus:shadow-none" placeholder="Enter Your Email" />
              <button className="p-2 bg-primary text-white border border-white rounded-lg">Subscribe</button>
            </div>
            <p className="text-[11px]">
              By Subscribeing you agree to with our Privacy Policy and provide consent to receive updates from our company
            </p>
          </div>
          <div className="col">
            <h2 className="font-semibold mb-3">About Us</h2>
            <ul className="flex flex-col gap-3">
              {colAboutUs.map((text, index) => (
                <li key={index}>
                  <a className="cursor-pointer">{text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h2 className="font-semibold mb-3">Coustomer Support</h2>
            <ul className="flex flex-col gap-3">
              {colCoustomerSupport.map((text, index) => (
                <li key={index}>
                  <a className="cursor-pointer">{text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h2 className="font-semibold mb-3">Follow Us</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to='' className="flex items-center gap-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  Facebook
                </Link>
              </li>
              <li>
                <Link to=''className="flex items-center gap-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  Instagram
                </Link>
              </li>
              <li>
                <Link to='' className="flex items-center gap-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  Twitter
                </Link>
              </li>
              <li>
                <Link to='' className="flex items-center gap-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright flex flex-col md:flex-row justify-between items-center gap-3 text-gray-300 text-sm mt-7 md:mt-10">
          <p>© 2025 Trendify. All right reserved</p>
          <ul className="flex gap-5 text-xs">
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms of Services</li>
            <li className="cursor-pointer">Cookies Setting</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
