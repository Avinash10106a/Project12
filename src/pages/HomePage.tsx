import React from 'react';
import Hero from '../components/home/Hero';
import ProductGrid from '../components/products/ProductGrid';
import RewardsSection from '../components/home/RewardsSection';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  // Get featured products for display
  const featuredProducts = products.slice(0, 4);
  
  return (
    <div>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductGrid products={featuredProducts} title="Featured Products" />
      </div>
      
      <RewardsSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Browse All Products</h2>
          <p className="mt-4 text-gray-600">
            Discover our wide selection of high-quality products
          </p>
        </div>
        
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default HomePage;