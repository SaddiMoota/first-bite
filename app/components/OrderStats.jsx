'use client';

export default function OrderStats({ orders }) {
  // Calculate statistics
  const totalOrders = orders.length;
  const vegOrders = orders.filter(order => 
    order.items.every(item => item.isVeg)
  ).length;
  const nonVegOrders = orders.filter(order => 
    order.items.some(item => !item.isVeg)
  ).length;

  // Calculate most repeated order
  const itemFrequency = orders.reduce((acc, order) => {
    order.items.forEach(item => {
      const key = item.name;
      acc[key] = (acc[key] || 0) + item.quantity;
    });
    return acc;
  }, {});

  const mostRepeatedItem = Object.entries(itemFrequency)
    .sort(([,a], [,b]) => b - a)[0];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {/* Total Orders */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="text-base font-medium text-gray-600 mb-1">Total Orders</div>
        <div className="text-2xl font-bold text-gray-900">{totalOrders}</div>
      </div>

      {/* Veg Orders */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center gap-2 text-base font-medium text-green-800 mb-1">
          <span className="w-3 h-3">
            <img src="/images/icons/veg-icon.svg" alt="Veg" />
          </span>
          Veg Orders
        </div>
        <div className="text-2xl font-semibold text-gray-900">{vegOrders}</div>
      </div>

      {/* Non-veg Orders */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center gap-2 text-base font-medium text-red-500 mb-1">
          <span className="w-3 h-3">
            <img src="/images/icons/non-veg-icon.svg" alt="Non-veg" />
          </span>
          Non-veg Orders
        </div>
        <div className="text-2xl font-semibold text-gray-900">{nonVegOrders}</div>
      </div>

      {/* Most Repeated Order */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="text-base font-medium text-purple-800 mb-1">Most Ordered Item</div>
        <div className="text-base font-semibold text-gray-900">{mostRepeatedItem?.[0]}</div>
        <div className="text-sm text-gray-600">Ordered {mostRepeatedItem?.[1]} times</div>
      </div>
    </div>
  );
}
