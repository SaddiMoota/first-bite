'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function ViewCartCard() {
  const { cartItems, getCartTotal, getItemCount } = useCart();
  const itemCount = getItemCount();
  const total = getCartTotal();

  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.1)] py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between bg-white rounded-lg px-4">
          <div className="flex flex-wrap items-center gap-x-2">
            <span className="text-green-600 text-sm sm:text-base font-medium">{itemCount} items in cart</span>
            <span className="text-gray-900 font-bold">₹{total}</span>
          </div>
          <Link
            href="/cart"
            className="bg-green-600 text-white px-5 py-2 rounded-full text-sm sm:text-base text-nowrap hover:bg-green-700 transition-colors"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
