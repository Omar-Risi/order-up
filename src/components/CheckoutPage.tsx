import { useState } from 'react';
import { ArrowLeft, CreditCard, Clock } from 'lucide-react';
import type { CartItem } from '../App';

type CheckoutPageProps = {
  cart: CartItem[];
  onBack: () => void;
  onPlaceOrder: (paymentMethod: string, pickupTime: string) => void;
};

export function CheckoutPage({ cart, onBack, onPlaceOrder }: CheckoutPageProps) {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [pickupTime, setPickupTime] = useState('asap');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handlePlaceOrder = () => {
    onPlaceOrder(paymentMethod, pickupTime);
  };

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
          <h1 className="text-2xl text-gray-800">Checkout</h1>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Order Summary */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg text-gray-800 mb-4">Order Summary</h2>
          <div className="space-y-2">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {item.quantity}x {item.name}
                </span>
                <span className="text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg text-gray-800">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Method */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg text-gray-800 mb-4 flex items-center gap-2">
            <CreditCard size={20} />
            Payment Method
          </h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="payment"
                value="credit-card"
                checked={paymentMethod === 'credit-card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-orange-500"
              />
              <div className="flex-1">
                <div className="text-gray-800">Credit/Debit Card</div>
                <div className="text-sm text-gray-500">•••• 4242</div>
              </div>
            </label>
            <label className="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="payment"
                value="apple-pay"
                checked={paymentMethod === 'apple-pay'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-orange-500"
              />
              <div className="flex-1">
                <div className="text-gray-800">Apple Pay</div>
              </div>
            </label>
            <label className="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-orange-500"
              />
              <div className="flex-1">
                <div className="text-gray-800">Cash on Pickup</div>
              </div>
            </label>
          </div>
        </section>

        {/* Pickup Time */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg text-gray-800 mb-4 flex items-center gap-2">
            <Clock size={20} />
            Pickup Time
          </h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="pickup"
                value="asap"
                checked={pickupTime === 'asap'}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-4 h-4 text-orange-500"
              />
              <div className="flex-1">
                <div className="text-gray-800">ASAP</div>
                <div className="text-sm text-gray-500">Ready in 15-20 min</div>
              </div>
            </label>
            <label className="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="pickup"
                value="scheduled"
                checked={pickupTime === 'scheduled'}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-4 h-4 text-orange-500"
              />
              <div className="flex-1">
                <div className="text-gray-800">Schedule for later</div>
                <div className="text-sm text-gray-500">Choose a specific time</div>
              </div>
            </label>
          </div>
        </section>
      </div>

      {/* Place Order Button */}
      <div className="bg-white p-6 shadow-lg">
        <button
          onClick={handlePlaceOrder}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
        >
          Place Order - ${total.toFixed(2)}
        </button>
      </div>
    </div>
  );
}
