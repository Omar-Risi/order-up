import { Check } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import type { Order } from '../App';

type OrderConfirmationPageProps = {
  order: Order;
  onBackToHome: () => void;
  onViewOrders: () => void;
};

export function OrderConfirmationPage({
  order,
  onBackToHome,
  onViewOrders,
}: OrderConfirmationPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Success Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 text-center">
        <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check size={32} />
        </div>
        <h1 className="text-2xl mb-2">Order Placed Successfully!</h1>
        <p className="text-green-100">Your order will be ready soon</p>
      </div>

      {/* QR Code Section */}
      <div className="flex-1 p-6 flex flex-col items-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-sm w-full text-center mb-6">
          <h2 className="text-xl text-gray-800 mb-4">Pickup Code</h2>
          
          {/* QR Code */}
          <div className="bg-white p-4 rounded-xl mb-6 flex justify-center">
            <QRCodeSVG
              value={order.pickupCode || 'ORDER123'}
              size={200}
              level="H"
              includeMargin={true}
            />
          </div>

          {/* Pickup Code */}
          <div className="bg-orange-50 rounded-xl p-6 mb-4">
            <p className="text-sm text-gray-600 mb-2">Your pickup code is</p>
            <p className="text-4xl tracking-widest text-orange-600">
              {order.pickupCode}
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Show this code to the cashier when picking up your order
          </p>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl p-6 shadow-sm max-w-sm w-full mb-6">
          <h3 className="text-lg text-gray-800 mb-4">Order Summary</h3>
          <div className="space-y-2 mb-4">
            {order.items.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {item.quantity}x {item.name}
                </span>
                <span className="text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t pt-3 flex justify-between">
            <span className="text-gray-800">Total</span>
            <span className="text-xl text-gray-800">${order.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 max-w-sm w-full">
          <button
            onClick={onViewOrders}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
          >
            View My Orders
          </button>
          <button
            onClick={onBackToHome}
            className="w-full bg-white text-gray-700 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
