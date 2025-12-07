import { ArrowLeft, Plus, Minus, Trash2 } from 'lucide-react';
import type { CartItem } from '../App';

type CartPageProps = {
  cart: CartItem[];
  onBack: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onCheckout: () => void;
};

export function CartPage({ cart, onBack, onUpdateQuantity, onCheckout }: CartPageProps) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white p-6 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl text-gray-800">Cart</h1>
        </div>
      </header>

      {/* Cart Items */}
      <div className="flex-1 p-6">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="bg-gray-100 p-8 rounded-full mb-4">
              <Trash2 size={48} className="text-gray-400" />
            </div>
            <p className="text-xl text-gray-800 mb-2">Your cart is empty</p>
            <p className="text-gray-500">Add some delicious items to get started!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {cart.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="flex gap-4 p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-gray-800 mb-1">{item.name}</h3>
                    <p className="text-orange-600 mb-3">OMR {item.price}</p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-100 p-1 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        {item.quantity === 1 ? (
                          <Trash2 size={16} className="text-red-500" />
                        ) : (
                          <Minus size={16} />
                        )}
                      </button>
                      <span className="text-gray-800 min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-100 p-1 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Checkout Section */}
      {cart.length > 0 && (
        <div className="bg-white p-6 shadow-lg rounded-t-3xl">
          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax (5%)</span>
              <span>OMR {tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl text-gray-800 pt-3 border-t">
              <span>Total</span>
              <span>OMR {total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={onCheckout}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
