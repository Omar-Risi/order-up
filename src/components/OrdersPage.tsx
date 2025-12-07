import { Clock, CheckCircle, XCircle, QrCode, X } from 'lucide-react';
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import type { Order } from '../App';

type OrdersPageProps = {
  orders: Order[];
};

export function OrdersPage({ orders }: OrdersPageProps) {
  const [showQRCode, setShowQRCode] = useState<string | null>(null);

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'Ready':
        return <Clock size={20} className="text-orange-500" />;
      case 'Completed':
        return <CheckCircle size={20} className="text-green-500" />;
      case 'Cancelled':
        return <XCircle size={20} className="text-red-500" />;
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'Ready':
        return 'bg-orange-100 text-orange-700';
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl">My Orders</h1>
        <p className="text-orange-100 text-sm">Track your current and past orders</p>
      </header>

      {/* Orders List */}
      <div className="p-6">
        {orders.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={32} className="text-gray-400" />
            </div>
            <p className="text-xl text-gray-800 mb-2">No orders yet</p>
            <p className="text-gray-500">Start ordering your favorite meals!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map(order => (
              <div
                key={order.id}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg text-gray-800 mb-1">
                      {order.restaurantName}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {new Date(order.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {getStatusIcon(order.status)}
                    {order.status}
                  </span>
                </div>

                {order.pickupCode && order.status === 'Ready' && (
                  <div className="bg-orange-50 rounded-lg p-3 mb-3">
                    <p className="text-xs text-gray-600 mb-1">Pickup Code</p>
                    <p className="text-xl tracking-wider text-orange-600">
                      {order.pickupCode}
                    </p>
                  </div>
                )}

                <div className="flex justify-between items-center pt-3 border-t">
                  <span className="text-gray-600">Total</span>
                  <span className="text-xl text-gray-800">
                    OMR {order.total.toFixed(2)}
                  </span>
                </div>

                {/* Show QR Code Button for Ready orders */}
                {order.status === 'Ready' && order.pickupCode && (
                  <button
                    onClick={() => setShowQRCode(order.id)}
                    className="w-full mt-3 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <QrCode size={18} />
                    Show QR Code
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* QR Code Modal */}
      {showQRCode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full relative">
            <button
              onClick={() => setShowQRCode(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {(() => {
              const order = orders.find(o => o.id === showQRCode);
              if (!order) return null;

              return (
                <>
                  <h2 className="text-xl text-gray-800 mb-2 text-center">
                    {order.restaurantName}
                  </h2>
                  <p className="text-sm text-gray-500 mb-6 text-center">
                    Show this code at pickup
                  </p>

                  {/* QR Code */}
                  <div className="bg-white p-4 rounded-xl mb-6 flex justify-center">
                    <QRCodeSVG
                      value={order.pickupCode || 'ORDER'}
                      size={200}
                      level="H"
                      includeMargin={true}
                    />
                  </div>

                  {/* Pickup Code */}
                  <div className="bg-orange-50 rounded-xl p-6 text-center">
                    <p className="text-sm text-gray-600 mb-2">Pickup Code</p>
                    <p className="text-4xl tracking-widest text-orange-600">
                      {order.pickupCode}
                    </p>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
