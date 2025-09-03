'use client';

export default function OrderList({ orders }) {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="border rounded-lg p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <span className="text-sm text-gray-700 font-medium">Order #{order.id}</span>
              <p className="text-xs text-gray-500">
                {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <span className={`text-sm px-2 py-1 rounded-full ${
              order.status === 'Delivered' 
                ? 'bg-green-100 text-green-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              {order.status}
            </span>
          </div>
          <div className="space-y-2">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3">
                    <img 
                      src={item.isVeg ? "/images/icons/veg-icon.svg" : "/images/icons/non-veg-icon.svg"} 
                      alt={item.isVeg ? "Veg" : "Non-veg"} 
                    />
                  </span>
                  <span className="text-sm text-gray-600">
                    {item.quantity}x {item.name}
                  </span>
                </div>
                <span className="text-sm text-gray-800">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t flex justify-between items-center">
            <span className="text-sm text-gray-700 font-medium">Total</span>
            <span className="text-green-600 font-medium">₹{order.total}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
