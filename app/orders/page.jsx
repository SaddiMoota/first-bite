'use client';
import { useState } from 'react';
import OrderStats from '../components/OrderStats';
import OrderList from '../components/OrderList';

// Dummy data - Replace with actual data from your backend
const dummyOrders = [
  {
    id: '1001',
    date: '2025-09-02T10:30:00',
    status: 'Delivered',
    total: 850,
    items: [
      { name: 'Butter Chicken', quantity: 2, price: 250, isVeg: false },
      { name: 'Naan', quantity: 4, price: 40, isVeg: true },
      { name: 'Dal Makhani', quantity: 1, price: 200, isVeg: true }
    ]
  },
  {
    id: '1002',
    date: '2025-09-01T19:45:00',
    status: 'Delivered',
    total: 650,
    items: [
      { name: 'Paneer Tikka', quantity: 1, price: 220, isVeg: true },
      { name: 'Jeera Rice', quantity: 2, price: 150, isVeg: true },
      { name: 'Mixed Raita', quantity: 1, price: 80, isVeg: true }
    ]
  }
];

export default function OrderHistoryPage() {
  const [orders] = useState(dummyOrders);
  const [filter, setFilter] = useState('all'); // 'all', 'veg', 'non-veg'

  const filteredOrders = orders.filter(order => {
    if (filter === 'veg') {
      return order.items.every(item => item.isVeg);
    }
    if (filter === 'non-veg') {
      return order.items.some(item => !item.isVeg);
    }
    return true;
  });

  return (
    <div className='bg-white min-h-screen pt-6 pb-32'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Order History</h1>

      {/* Stats Section */}
      <OrderStats orders={orders} />

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-3">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-1 rounded-full text-sm text-gray-600 border border-gray-200 pointer ${
            filter === 'all'
              ? 'border border-green-600'
              : ' text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('veg')}
          className={`px-4 py-1 rounded-full text-sm text-gray-600 border border-gray-200 flex items-center gap-2 pointer ${
            filter === 'veg'
              ? 'border border-green-600 text-green-600'
              : ' text-gray-700 hover:bg-gray-200'
          }`}
        >
          <img src="/images/icons/veg-icon.svg" alt="Veg" className="w-3 h-3" />
          Veg
        </button>
        <button
          onClick={() => setFilter('non-veg')}
          className={`px-4 py-1 rounded-full text-sm text-gray-600 border border-gray-200 flex items-center gap-2 pointer ${
            filter === 'non-veg'
              ? 'border border-red-600 text-red-500'
              : ' text-gray-700 hover:bg-gray-200'
          }`}
        >
          <img src="/images/icons/non-veg-icon.svg" alt="Non-veg" className="w-3 h-3" />
          Non-veg
        </button>
      </div>

      {/* Order List */}
      <OrderList orders={filteredOrders} />
    </div>
    </div>
  );
}
