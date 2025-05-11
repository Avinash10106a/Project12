import { Product } from '../types';

// Sample product data for the e-commerce store
export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    price: 299.99,
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    inStock: true,
    rewardPoints: 150,
    rating: 4.8,
    reviews: 245
  },
  {
    id: '2',
    name: 'Smart Watch Series 5',
    description: 'Latest smart watch with health monitoring, GPS, and cellular connectivity.',
    price: 399.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    inStock: true,
    rewardPoints: 200,
    rating: 4.6,
    reviews: 189
  },
  {
    id: '3',
    name: 'Organic Cotton T-shirt',
    description: 'Eco-friendly cotton t-shirt, perfect for everyday wear.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Clothing',
    inStock: true,
    rewardPoints: 15,
    rating: 4.3,
    reviews: 112
  },
  {
    id: '4',
    name: 'Designer Sunglasses',
    description: 'Premium sunglasses with UV protection and stylish design.',
    price: 159.99,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Accessories',
    inStock: true,
    rewardPoints: 80,
    rating: 4.5,
    reviews: 78
  },
  {
    id: '5',
    name: 'Premium Coffee Maker',
    description: 'Automatic coffee maker with programmable settings and thermal carafe.',
    price: 149.99,
    image: 'https://images.pexels.com/photos/6347/coffee-cup-working-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Home',
    inStock: true,
    rewardPoints: 75,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '6',
    name: 'Leather Wallet',
    description: 'Genuine leather wallet with RFID protection and multiple card slots.',
    price: 49.99,
    image: 'https://images.pexels.com/photos/3424573/pexels-photo-3424573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Accessories',
    inStock: true,
    rewardPoints: 25,
    rating: 4.4,
    reviews: 93
  },
  {
    id: '7',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: 39.99,
    image: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    inStock: true,
    rewardPoints: 20,
    rating: 4.2,
    reviews: 67
  },
  {
    id: '8',
    name: 'Fitness Tracker',
    description: 'Advanced fitness tracker with heart rate monitoring and sleep tracking.',
    price: 129.99,
    image: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    inStock: true,
    rewardPoints: 65,
    rating: 4.5,
    reviews: 134
  }
];

// Get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Search products
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    product => 
      product.name.toLowerCase().includes(lowercaseQuery) || 
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  );
};