import React from 'react';
import { Mail, Phone, MapPin, CreditCard, Gift, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">RewardShop</h3>
            <p className="text-gray-300 text-sm mb-4">
              Premium shopping experience with rewards on every purchase.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ankitasingh_2910?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/diva__flawless?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/harshika_mystic/?__pwa=1" className="text-gray-300 hover:text-white transition-colors" target="_blank">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">All Products</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Electronics</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Clothing</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Accessories</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Home & Kitchen</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a>
              </li>
              <li>
                {/*<a href="#" className="hover:text-white transition-colors">Order Tracking</a>*/}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>Dr. Akhilesh Das Gupta Institute of Professional Studies</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(+91) XXXX XXXX XX</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>support@rewardshop.com</span>
              </li>
              <li className="flex items-center">
                <CreditCard size={18} className="mr-2 flex-shrink-0" />
                <span>Secure Payments</span>
              </li>
              <li className="flex items-center">
                <Gift size={18} className="mr-2 flex-shrink-0" />
                <span>Earn Reward Distance on Every Purchase</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} FarMiles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;