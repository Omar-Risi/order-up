import { User, CreditCard, Gift, Settings, HelpCircle, ChevronRight } from 'lucide-react';

export function AccountPage() {
  const menuItems = [
    {
      icon: CreditCard,
      label: 'Payment Methods',
      description: 'Manage your cards and payment options',
    },
    {
      icon: Gift,
      label: 'Rewards',
      description: 'View your points and rewards',
    },
    {
      icon: Settings,
      label: 'Settings',
      description: 'App preferences and notifications',
    },
    {
      icon: HelpCircle,
      label: 'Help & Support',
      description: 'Get help or contact us',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl mb-1">Account</h1>
        <p className="text-orange-100 text-sm">Manage your profile and settings</p>
      </header>

      {/* Profile Section */}
      <div className="p-6">
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center text-white">
              <User size={32} />
            </div>
            <div>
              <h2 className="text-xl text-gray-800">John Doe</h2>
              <p className="text-sm text-gray-500">john.doe@email.com</p>
              <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 text-left"
              >
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Icon size={20} className="text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-800 mb-1">{item.label}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </button>
            );
          })}
        </div>

        {/* Logout Button */}
        <button className="w-full mt-6 bg-red-50 text-red-600 py-3 rounded-xl hover:bg-red-100 transition-colors">
          Log Out
        </button>
      </div>
    </div>
  );
}
