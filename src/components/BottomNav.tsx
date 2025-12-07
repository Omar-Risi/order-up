import { Home, ShoppingBag, User } from 'lucide-react';

type BottomNavProps = {
  currentPage: 'home' | 'orders' | 'account';
  onNavigate: (page: 'home' | 'orders' | 'account') => void;
};

export function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
      <div className="flex justify-around items-center py-2">
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
            currentPage === 'home'
              ? 'text-orange-500'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <Home size={24} />
          <span className="text-xs">Home</span>
        </button>
        <button
          onClick={() => onNavigate('orders')}
          className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
            currentPage === 'orders'
              ? 'text-orange-500'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <ShoppingBag size={24} />
          <span className="text-xs">Orders</span>
        </button>
        <button
          onClick={() => onNavigate('account')}
          className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
            currentPage === 'account'
              ? 'text-orange-500'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <User size={24} />
          <span className="text-xs">Account</span>
        </button>
      </div>
    </nav>
  );
}
