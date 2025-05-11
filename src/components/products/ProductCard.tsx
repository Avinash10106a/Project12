import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Product image */}
      <div className="relative aspect-w-3 aspect-h-2 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Reward points badge */}
        <div className="absolute top-3 left-3 bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full flex items-center">
          <Star className="h-3 w-3 mr-1 fill-amber-500 stroke-amber-500" />
          <span>{product.rewardPoints} points</span>
        </div>
      </div>
      
      {/* Product content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />
            <span className="ml-1 text-sm text-gray-700">{product.rating}</span>
          </div>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-sm text-gray-500">{product.reviews} reviews</span>
        </div>
        
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          
          <Button 
            variant="primary"
            size="sm"
            onClick={handleAddToCart}
            className="flex items-center space-x-1"
          >
            <ShoppingCart className="h-4 w-4" />
            <a href="https://www.flipkart.com/red-tape-etpu-athleisure-shoes-men-cultured-round-toe-shape-cushioning-technology-walking/p/itme1cdb29af57db?pid=SHOH4D4TJGBVRUUP&lid=LSTSHOH4D4TJGBVRUUPB4SFI6&marketplace=FLIPKART&store=osp%2Fcil&srno=b_1_1&otracker=browse&fm=organic&iid=en_tses1nmYulP4yWJYdpET13i_IneuQiCXunwEVgPH3VkzDcI_xNVmndJ_vJHT3HZ7F6lE1G5XoeBjUEm6iDsssvUFjCTyOHoHZs-Z5_PS_w0%3D&ppt=browse&ppn=browse&ssid=4pggw28nb40000001746987412888" target='_blank'><span>Buy</span></a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;