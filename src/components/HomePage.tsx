import { ShoppingCart, Gift, Star, Clock } from 'lucide-react';

type HomePageProps = {
  onNavigateToRestaurant: (restaurantId: string) => void;
  onNavigateToCart: () => void;
  onNavigateToOrders: () => void;
  cartItemsCount: number;
};

const popularFoods = [
  {
    id: '1',
    name: 'Classic Burger',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1688246780164-00c01647e78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmb29kfGVufDF8fHx8MTc2NTExODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc2NTA0MDM4NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '3',
    name: 'Sushi Platter',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1707556294605-fd32496554e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXRlfGVufDF8fHx8MTc2NTEyMzgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '4',
    name: 'Pasta Carbonara',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzY1MTA1ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '5',
    name: 'Tacos al Pastor',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1529704640551-eef9ba5d774a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMGZvb2R8ZW58MXx8fHwxNzY1MDIwMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const nearbyRestaurants = [
  {
    id: 'rest1',
    name: 'Burger Palace',
    cuisine: 'American',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1667388969250-1c7220bf3f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1MDU2MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    time: '15-20 min',
  },
  {
    id: 'rest2',
    name: 'Tokyo Sushi Bar',
    cuisine: 'Japanese',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1476055439777-977cdf3a5699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY1MTIzODI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    time: '20-25 min',
  },
  {
    id: 'rest3',
    name: 'Bella Italia',
    cuisine: 'Italian',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wfGVufDF8fHx8MTc2NTA1NzM3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    time: '10-15 min',
  },
  {
    id: 'rest4',
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1667388969250-1c7220bf3f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1MDU2MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    time: '15-20 min',
  },
];

export function HomePage({
  onNavigateToRestaurant,
  onNavigateToCart,
  onNavigateToOrders,
  cartItemsCount,
}: HomePageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl">OrderUp</h1>
          <button
            onClick={onNavigateToCart}
            className="relative bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
          >
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
        <p className="text-orange-100">Pre-order your favorite meals</p>
      </header>

      {/* Quick Actions */}
      <div className="px-6 py-4 grid grid-cols-2 gap-3">
        <button
          onClick={onNavigateToOrders}
          className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
        >
          <div className="bg-orange-100 p-2 rounded-lg">
            <Clock size={20} className="text-orange-600" />
          </div>
          <span className="text-gray-700">Recent Orders</span>
        </button>
        <button className="bg-gradient-to-br from-yellow-400 to-orange-400 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 text-white">
          <div className="bg-white/20 p-2 rounded-lg">
            <Gift size={20} />
          </div>
          <span>Rewards</span>
        </button>
      </div>

      {/* Popular Foods */}
      <section className="px-6 py-4">
        <h2 className="text-xl mb-3 text-gray-800">Popular Foods</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {popularFoods.map(food => (
            <div
              key={food.id}
              className="flex-shrink-0 w-40 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-32 object-cover rounded-t-xl"
              />
              <div className="p-3">
                <h3 className="text-sm text-gray-800 mb-1">{food.name}</h3>
                <p className="text-orange-600">OMR {food.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Restaurants */}
      <section className="px-6 py-4 pb-8">
        <h2 className="text-xl mb-3 text-gray-800">Nearby Restaurants</h2>
        <div className="space-y-3">
          {nearbyRestaurants.map(restaurant => (
            <div
              key={restaurant.id}
              onClick={() => onNavigateToRestaurant(restaurant.id)}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
            >
              <div className="flex gap-4">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-24 h-24 object-cover"
                />
                <div className="flex-1 py-3 pr-3">
                  <h3 className="text-gray-800 mb-1">{restaurant.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{restaurant.cuisine}</p>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={14} fill="currentColor" />
                      <span className="text-gray-700">{restaurant.rating}</span>
                    </div>
                    <span className="text-gray-500">{restaurant.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
