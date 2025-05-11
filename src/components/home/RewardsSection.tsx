import React from 'react';
import { Gift, Award, PiggyBank, BarChart3 } from 'lucide-react';
import Button from '../ui/Button';

const RewardsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Rewards System
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Earn Distance points with every purchase Which Takes You Further
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Earn Points */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
              <Gift className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Earn Points</h3>
            <p className="text-gray-600">
              Every purchase earns you Distance points. The More You Spend, the Farther You Go.
            </p>
          </div>

          {/* Achieve Tiers */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-4">
              <Award className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Achieve Tiers</h3>
            <p className="text-gray-600">
              Reach different membership tiers and unlock exclusive perks and benefits.
            </p>
          </div>

          {/* Redeem Rewards */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
              <PiggyBank className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Redeem Rewards</h3>
            <p className="text-gray-600">
              Every purchase you make isn’t just spending — it’s investing in your next Journey.
            </p>
          </div>

          {/* Track Progress */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4">
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Progress</h3>
            <p className="text-gray-600">
              Monitor your points, rewards history, and current tier in your account.
              <br />
                "Shop More, Go Far"
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block py-4 px-8 bg-blue-600 bg-opacity-10 rounded-lg">
            <h3 className="text-lg font-medium text-blue-800">
            This isn’t just shopping — it’s a journey!
            </h3>
          </div>
          <div className="mt-8">
            <Button variant="secondary" size="lg">
              Join Our Rewards Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;