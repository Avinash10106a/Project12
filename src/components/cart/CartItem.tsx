import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <li className="py-6 flex">
      {/* Product image */}
      <div className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-md overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-center object-cover"
        />
      </div>

      {/* Product info */}
      <div className="ml-4 flex-1 flex flex-col">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium text-gray-900">
            {product.name}
          </h3>
          <p className="ml-4 text-sm font-medium text-gray-900">
            ${(product.price * quantity).toFixed(2)}
          </p>
        </div>
        <p className="mt-1 text-sm text-gray-500 line-clamp-1">
          {product.category}
        </p>
        
        <div className="flex-1 flex items-end justify-between text-sm">
          {/* Quantity controls */}
          <div className="flex items-center border rounded-md">
            <button 
              onClick={handleDecreaseQuantity}
              className="p-1 text-gray-500 hover:text-gray-700"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            
            <span className="px-2 py-1 text-gray-700">{quantity}</span>
            
            <button 
              onClick={handleIncreaseQuantity}
              className="p-1 text-gray-500 hover:text-gray-700"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          {/* Remove button */}
          <button 
            onClick={() => removeFromCart(product.id)}
            className="text-red-500 hover:text-red-700 transition-colors"
            aria-label="Remove item"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
        
        {/* Reward points */}
        <div className="mt-2 text-xs text-amber-600 font-medium">
          Earn {product.rewardPoints * quantity} points
        </div>
      </div>
    </li>
  );
};

export default CartItem;