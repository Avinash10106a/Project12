import React from 'react';
import { ChevronRight, Gift, ShieldCheck, Truck } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-10 sm:pt-16 lg:pt-8 xl:pt-16">
            <div className="sm:text-center lg:text-left px-4 sm:px-8 xl:pl-0">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Shop Smarter</span>
                <span className="block text-blue-600">Earn Farther</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                Get rewarded for every purchase. Earn Distance points and redeem them for travelling across the world. Quality products,from your trusted Platform .
              </p>
              
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    <span>Shop Now</span>
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-center justify-center bg-blue-100 rounded-full p-2">
                    <Gift className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="mt-2 text-sm text-gray-500 text-center sm:text-left">Reward Distance</p>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-center justify-center bg-blue-100 rounded-full p-2">
                    <Truck className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="mt-2 text-sm text-gray-500 text-center sm:text-left">Fast Delivery</p>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-center justify-center bg-blue-100 rounded-full p-2">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="mt-2 text-sm text-gray-500 text-center sm:text-left">Secure Shopping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Shopping experience"
        />
      </div>
    </div>
  );
};

export default Hero;