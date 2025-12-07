import { ArrowLeft, Star, ShoppingCart } from 'lucide-react';
import type { CartItem } from '../App';

type RestaurantPageProps = {
  restaurantId: string;
  onBack: () => void;
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
  onNavigateToCart: () => void;
  cartItemsCount: number;
};

const restaurantData: Record<string, any> = {
  rest1: {
    name: 'Burger Palace',
    cuisine: 'American',
    rating: 4.5,
    banner: 'https://images.unsplash.com/photo-1688246780164-00c01647e78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmb29kfGVufDF8fHx8MTc2NTExODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    menu: [
      {
        category: 'Burgers',
        items: [
          {
            id: 'b1',
            name: 'Classic Cheeseburger',
            price: 12.99,
            image: 'https://images.unsplash.com/photo-1688246780164-00c01647e78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmb29kfGVufDF8fHx8MTc2NTExODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
          },
          {
            id: 'b2',
            name: 'Bacon Deluxe Burger',
            price: 14.99,
            image: 'https://images.unsplash.com/photo-1688246780164-00c01647e78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmb29kfGVufDF8fHx8MTc2NTExODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
          },
        ],
      },
      {
        category: 'Sides',
        items: [
          {
            id: 'b3',
            name: 'French Fries',
            price: 4.99,
            image: 'https://images.unsplash.com/photo-1688246780164-00c01647e78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmb29kfGVufDF8fHx8MTc2NTExODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
          },
        ],
      },
      {
        category: 'Drinks',
        items: [
          {
            id: 'b4',
            name: 'Soft Drink',
            price: 2.99,
            image: 'https://images.unsplash.com/photo-1688246780164-00c01647e78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmb29kfGVufDF8fHx8MTc2NTExODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
          },
        ],
      },
    ],
  },
  rest2: {
    name: 'Tokyo Sushi Bar',
    cuisine: 'Japanese',
    rating: 4.8,
    banner: 'https://images.unsplash.com/photo-1707556294605-fd32496554e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXRlfGVufDF8fHx8MTc2NTEyMzgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    menu: [
      {
        category: 'Sushi Rolls',
        items: [
          {
            id: 's1',
            name: 'California Roll',
            price: 12.99,
            image: 'https://images.unsplash.com/photo-1707556294605-fd32496554e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXRlfGVufDF8fHx8MTc2NTEyMzgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
          },
          {
            id: 's2',
            name: 'Spicy Tuna Roll',
            price: 14.99,
            image: 'https://images.unsplash.com/photo-1707556294605-fd32496554e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXRlfGVufDF8fHx8MTc2NTEyMzgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
          },
          {
            id: 's3',
            name: 'Dragon Roll',
            price: 16.99,
            image: 'https://images.unsplash.com/photo-1707556294605-fd32496554e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXRlfGVufDF8fHx8MTc2NTEyMzgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
          },
        ],
      },
      {
        category: 'Sashimi',
        items: [
          {
            id: 's4',
            name: 'Salmon Sashimi',
            price: 18.99,
            image: 'https://images.unsplash.com/photo-1707556294605-fd32496554e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXRlfGVufDF8fHx8MTc2NTEyMzgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
          },
        ],
      },
    ],
  },
  rest3: {
    name: 'Bella Italia',
    cuisine: 'Italian',
    rating: 4.6,
    banner: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzY1MTA1ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    menu: [
      {
        category: 'Pasta',
        items: [
          {
            id: 'p1',
            name: 'Spaghetti Carbonara',
            price: 16.99,
            image: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzY1MTA1ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
          },
          {
            id: 'p2',
            name: 'Penne Arrabbiata',
            price: 14.99,
            image: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzY1MTA1ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
          },
        ],
      },
      {
        category: 'Pizza',
        items: [
          {
            id: 'p3',
            name: 'Margherita Pizza',
            price: 13.99,
            image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc2NTA0MDM4NXww&ixlib=rb-4.1.0&q=80&w=1080',
          },
        ],
      },
    ],
  },
  rest4: {
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.4,
    banner: 'https://images.unsplash.com/photo-1529704640551-eef9ba5d774a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMGZvb2R8ZW58MXx8fHwxNzY1MDIwMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    menu: [
      {
        category: 'Tacos',
        items: [
          {
            id: 't1',
            name: 'Tacos al Pastor',
            price: 11.99,
            image: 'https://images.unsplash.com/photo-1529704640551-eef9ba5d774a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMGZvb2R8ZW58MXx8fHwxNzY1MDIwMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
          },
          {
            id: 't2',
            name: 'Carnitas Tacos',
            price: 12.99,
            image: 'https://images.unsplash.com/photo-1529704640551-eef9ba5d774a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMGZvb2R8ZW58MXx8fHwxNzY1MDIwMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
          },
        ],
      },
      {
        category: 'Sides',
        items: [
          {
            id: 't3',
            name: 'Chips & Guacamole',
            price: 6.99,
            image: 'https://images.unsplash.com/photo-1529704640551-eef9ba5d774a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMGZvb2R8ZW58MXx8fHwxNzY1MDIwMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
          },
        ],
      },
    ],
  },
};

export function RestaurantPage({
  restaurantId,
  onBack,
  onAddToCart,
  onNavigateToCart,
  cartItemsCount,
}: RestaurantPageProps) {
  const restaurant = restaurantData[restaurantId];

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="relative">
        <img
          src={restaurant.banner}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={onNavigateToCart}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ShoppingCart size={20} />
          {cartItemsCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </button>
      </div>

      {/* Restaurant Info */}
      <div className="bg-white p-6 shadow-sm">
        <h1 className="text-2xl text-gray-800 mb-2">{restaurant.name}</h1>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-gray-600">{restaurant.cuisine}</span>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-gray-700">{restaurant.rating}</span>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="p-6 space-y-6">
        {restaurant.menu.map((section: any) => (
          <div key={section.category}>
            <h2 className="text-xl text-gray-800 mb-3">{section.category}</h2>
            <div className="space-y-3">
              {section.items.map((item: any) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="flex-1 py-3 pr-3 flex justify-between items-center">
                      <div>
                        <h3 className="text-gray-800 mb-1">{item.name}</h3>
                        <p className="text-orange-600">${item.price}</p>
                      </div>
                      <button
                        onClick={() =>
                          onAddToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            image: item.image,
                            restaurantId,
                          })
                        }
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
