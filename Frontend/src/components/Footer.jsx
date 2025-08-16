

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-gray-300 dark:border-gray-700">

        {/* Column 1 - Brand */}
        <div>
          <h2 className="text-xl font-bold mb-2">Epic Reads</h2>
          <p className="text-sm leading-relaxed">
            Your one-stop online bookstore for every genre.  
            Discover your next favorite read today.
          </p>
          <div className="flex space-x-3 mt-3">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 3 - Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Stay Updated</h3>
          <p className="text-sm mb-2">Subscribe to get our latest offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-1 text-sm border rounded-l-md focus:outline-none dark:bg-gray-800 dark:border-gray-700"
            />
            <button className="px-4 py-1 bg-blue-600 text-white text-sm rounded-r-md hover:bg-blue-500">
              Go
            </button>
          </form>
        </div>

        {/* Column 4 - App Download */}
        <div>
          <h3 className="font-semibold mb-2">Get Our App</h3>
          <p className="text-sm mb-3">Download on your device</p>
          <div className="space-y-2">
            <a
              href="#"
              className="flex items-center space-x-2 bg-black text-white px-3 py-2 rounded-md hover:opacity-90"
            >
              <FaApple size={20} />
              <span className="text-xs leading-tight">
                Download on the <br /><span className="font-bold text-sm">App Store</span>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 bg-black text-white px-3 py-2 rounded-md hover:opacity-90"
            >
              <FaGooglePlay size={20} />
              <span className="text-xs leading-tight">
                GET IT ON <br /><span className="font-bold text-sm">Google Play</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs py-3 border-t border-gray-300 dark:border-gray-700">
        © {new Date().getFullYear()} Epic Reads. All rights reserved.
      </div>
    </footer>
  );
}
