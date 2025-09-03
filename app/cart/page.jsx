'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { MinusCircleIcon, PlusCircleIcon, PlusIcon } from 'lucide-react';

export default function Cart() {
  const router = useRouter();
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const processPayment = () => {
    return new Promise((resolve) => {
      // Simulating payment processing
      setTimeout(() => {
        // For demo purposes, let's say payment succeeds 80% of the time
        const success = Math.random() < 0.8;
        resolve({ success });
      }, 1500);
    });
  };
  const deliveryFee = cartItems.length > 0 ? 40 : 0;
  const subtotal = getCartTotal();
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 pb-32 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some delicious items to your cart and they will appear here!</p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            <span>Browse Menu</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-32">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl text-gray-700 font-bold">Your Cart</h1>
          <Link
            href="/"
            className="flex items-center gap-1 text-green-600 hover:text-green-700 text-sm sm:text-base font-medium"
          >
            <span>Add More Items</span>
            <PlusIcon/>
          </Link>
        </div>

        <div className='flex flex-col sm:flex-row gap-6 mb-32'>
        {/* Cart Items */}
        <div className="bg-white rounded-lg shadow-sm mb-6 sm:w-2/3 ">
          {cartItems.map((item) => (
            <div key={item.id} className="p-4 border-b last:border-b-0">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Image 
                      src={item.isVeg ? '/images/icons/veg-icon.svg' : '/images/icons/non-veg-icon.svg'} 
                      alt={item.isVeg ? 'Vegetarian' : 'Non-vegetarian'}
                      width={16} 
                      height={16}
                    />
                    <h3 className="text-gray-700 text-sm sm:text-base font-medium line-clamp-1">{item.name}</h3>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <MinusCircleIcon className='text-green-600' size={28} strokeWidth={1}/>
                      </button>
                      <span className='text-gray-700 text-sm sm:text-base font-medium'>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                        <PlusCircleIcon className='text-green-600' size={28} strokeWidth={1}/>
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-green-900 text-sm sm:text-base font-medium">₹{item.price * item.quantity}</span>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600 pointer"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                {item.image && (
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Bill Details */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 sm:w-1/3 h-fit">
          <h2 className="text-gray-700 text-lg font-semibold mb-4">Bill Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700 text-xs sm:text-sm">Item Total</span>
              <span className='text-xs sm:text-sm text-gray-600'>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 text-xs sm:text-sm">Delivery Fee</span>
              <span className='text-xs sm:text-sm text-gray-600'>₹{deliveryFee}</span>
            </div>
            <div className="border-t pt-2 mt-2 font-semibold flex justify-between">
              <span className='text-gray-700 text-xs sm:text-sm'>Total</span>
              <span className='text-xs sm:text-sm text-gray-600'>₹{total}</span>
            </div>
          </div>
        </div>
        </div>





        {/* Checkout Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="max-w-2xl mx-auto">
            <button 
              className="w-full bg-green-600 text-white py-2.5 rounded-full text-base sm:text-lg hover:bg-green-700 pointer"
              onClick={async () => {
                try {
                  // Simulating payment process
                  const response = await processPayment();
                  if (response.success) {
                    router.push('/order-success');
                  } else {
                    router.push('/order-failed');
                  }
                } catch (error) {
                  router.push('/order-failed');
                }
              }}
            >
              Proceed to Pay ₹{total}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
