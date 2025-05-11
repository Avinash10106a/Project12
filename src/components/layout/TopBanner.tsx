import React from 'react';
import { Star } from 'lucide-react';

const TopBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2">
          <Star className="h-4 w-4 fill-current" />
          <p className="text-sm font-medium">The More You Shop, the Farther You Go!</p>
          <Star className="h-4 w-4 fill-current" />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;