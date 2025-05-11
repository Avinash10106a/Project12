import React from 'react';
import { X, Wallet } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';
import CartItem from './CartItem';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart, cartTotal, totalRewardPoints, clearCart } = useCart();
  const { isAuthenticated, user } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-hidden z-50">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      
      {/* Sidebar content */}
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md transform transition-transform duration-300 ease-in-out">
          <div className="h-full flex flex-col bg-white shadow-xl">
            {/* Header */}
            <div className="px-4 sm:px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                <button 
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Wallet Section */}
            {isAuthenticated && (
              <div className="px-4 sm:px-6 py-4 bg-blue-50 border-b border-blue-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Wallet className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Your Rewards Wallet</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-blue-600">{user?.rewardPoints} pts</span>
                  </div>
                </div>
                <p className="mt-1 text-xs text-blue-600">
                  You'll earn {totalRewardPoints} points with this purchase!
                </p>
              </div>
            )}
            
            {/* Cart items */}
            <div className="flex-1 py-6 px-4 sm:px-6 overflow-auto">
              {cart.length === 0 ? (
                <div className="text-center py-10">
                  <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Add products to your cart to see them here.
                  </p>
                  <div className="mt-6">
                    <Button variant="primary" onClick={onClose}>
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </ul>
              )}
            </div>
            
            {/* Cart footer */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 px-4 sm:px-6 py-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal:</p>
                    <p>${cartTotal.toFixed(2)}</p>
                  </div>
                  
                  {isAuthenticated && (
                    <div className="flex justify-between items-center text-sm">
                      <p className="text-gray-500">Reward points you'll earn:</p>
                      <p className="font-medium text-amber-500">+{totalRewardPoints} pts</p>
                    </div>
                  )}
                  
                  <div className="mt-6">
                    <Button variant="primary" fullWidth>
                      Checkout
                    </Button>
                  </div>
                  
                  <div className="mt-2">
                    <Button 
                      variant="outline" 
                      fullWidth
                      onClick={clearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;