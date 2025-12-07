import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { RestaurantPage } from './components/RestaurantPage';
import { CartPage } from './components/CartPage';
import { CheckoutPage } from './components/CheckoutPage';
import { OrderConfirmationPage } from './components/OrderConfirmationPage';
import { OrdersPage } from './components/OrdersPage';
import { AccountPage } from './components/AccountPage';
import { BottomNav } from './components/BottomNav';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  restaurantId: string;
};

export type Order = {
  id: string;
  restaurantName: string;
  date: string;
  total: number;
  status: 'Ready' | 'Completed' | 'Cancelled';
  items: CartItem[];
  pickupCode?: string;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'restaurant' | 'cart' | 'checkout' | 'confirmation' | 'orders' | 'account'>('home');
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([
    {
      id: '1',
      restaurantName: 'Burger Palace',
      date: '2025-12-05',
      total: 24.99,
      status: 'Completed',
      items: [],
    },
    {
      id: '2',
      restaurantName: 'Tokyo Sushi Bar',
      date: '2025-12-06',
      total: 45.50,
      status: 'Ready',
      items: [],
      pickupCode: 'A7B9Q2',
    },
  ]);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(i => i.id === item.id);
      if (existingItem) {
        return prevCart.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateCartItemQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== id));
    } else {
      setCart(prevCart =>
        prevCart.map(item => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = (paymentMethod: string, pickupTime: string) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const newOrder: Order = {
      id: (orders.length + 1).toString(),
      restaurantName: 'Selected Restaurant',
      date: new Date().toISOString().split('T')[0],
      total: total * 1.1, // Including tax
      status: 'Ready',
      items: [...cart],
      pickupCode: generatePickupCode(),
    };
    setOrders(prevOrders => [newOrder, ...prevOrders]);
    setCurrentOrder(newOrder);
    clearCart();
    setCurrentPage('confirmation');
  };

  const generatePickupCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const navigateToRestaurant = (restaurantId: string) => {
    setSelectedRestaurantId(restaurantId);
    setCurrentPage('restaurant');
  };

  const showBottomNav = currentPage === 'home' || currentPage === 'orders' || currentPage === 'account';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto relative">
      {/* Main Content */}
      <div className={showBottomNav ? 'pb-20' : 'pb-4'}>
        {currentPage === 'home' && (
          <HomePage
            onNavigateToRestaurant={navigateToRestaurant}
            onNavigateToCart={() => setCurrentPage('cart')}
            onNavigateToOrders={() => setCurrentPage('orders')}
            cartItemsCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          />
        )}
        {currentPage === 'restaurant' && selectedRestaurantId && (
          <RestaurantPage
            restaurantId={selectedRestaurantId}
            onBack={() => setCurrentPage('home')}
            onAddToCart={addToCart}
            onNavigateToCart={() => setCurrentPage('cart')}
            cartItemsCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          />
        )}
        {currentPage === 'cart' && (
          <CartPage
            cart={cart}
            onBack={() => setCurrentPage(selectedRestaurantId ? 'restaurant' : 'home')}
            onUpdateQuantity={updateCartItemQuantity}
            onCheckout={() => setCurrentPage('checkout')}
          />
        )}
        {currentPage === 'checkout' && (
          <CheckoutPage
            cart={cart}
            onBack={() => setCurrentPage('cart')}
            onPlaceOrder={placeOrder}
          />
        )}
        {currentPage === 'confirmation' && currentOrder && (
          <OrderConfirmationPage
            order={currentOrder}
            onBackToHome={() => setCurrentPage('home')}
            onViewOrders={() => setCurrentPage('orders')}
          />
        )}
        {currentPage === 'orders' && (
          <OrdersPage orders={orders} />
        )}
        {currentPage === 'account' && (
          <AccountPage />
        )}
      </div>

      {/* Bottom Navigation */}
      {showBottomNav && (
        <BottomNav
          currentPage={currentPage}
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
}
