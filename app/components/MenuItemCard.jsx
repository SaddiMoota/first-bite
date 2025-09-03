'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MinusCircleIcon, PlusCircleIcon } from 'lucide-react';

export default function MenuItemCard({ item }) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  
  const cartItem = cartItems.find(i => i.id === item.id);
  const itemQuantity = cartItem?.quantity || 0;

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Image 
                src={item.isVeg ? '/images/icons/veg-icon.svg' : '/images/icons/non-veg-icon.svg'} 
                alt={item.isVeg ? 'Vegetarian' : 'Non-vegetarian'} 
                width={16} 
                height={16}
              />
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{item.name}</h3>
            </div>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
            <div className="flex items-center mt-2">
              <span className="text-green-600 font-semibold">₹{item.price}</span>
            </div>
          </div>
          {item.image && (
            <div className="relative w-24 h-24 ml-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          )}
        </div>
        {itemQuantity > 0 ? (
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => updateQuantity(item.id, itemQuantity - 1)}
              >
                <MinusCircleIcon className='text-green-600' size={28} strokeWidth={1}/>
              </button>
              <span className="text-base sm:text-lg text-green-900 font-medium text-center">{itemQuantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, itemQuantity + 1)}
              >
                <PlusCircleIcon className='text-green-600' size={28} strokeWidth={1}/>
              </button>
            </div>
            <span className="text-green-900 text-base sm:text-lg font-semibold">₹{item.price * itemQuantity}</span>
          </div>
        ) : (
          <button
            onClick={() => setIsBottomSheetOpen(true)}
            className="mt-4 max-w-max text-sm bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-colors"
          >
            Add to Cart
          </button>
        )}
      </div>

      {/* Bottom Sheet */}
      {isBottomSheetOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50">
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl max-w-xl mx-auto p-6 transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Image 
                  src={item.isVeg ? '/images/icons/veg-icon.svg' : '/images/icons/non-veg-icon.svg'} 
                  alt={item.isVeg ? 'Vegetarian' : 'Non-vegetarian'}
                  width={20} 
                  height={20}
                />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 line-clamp-1">{item.name}</h3>
              </div>
              <button 
                onClick={() => setIsBottomSheetOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">{item.description}</p>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                >
                  <MinusCircleIcon className='text-green-600' size={28} strokeWidth={1}/>
                </button>
                <span className="text-base sm:text-lg text-green-900 font-medium text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  <PlusCircleIcon className='text-green-600' size={28} strokeWidth={1}/>
                </button>
              </div>
              <span className="text-green-900 text-base sm:text-lg font-semibold">₹{item.price * quantity}</span>
            </div>
            <button 
              className="w-full bg-green-600 text-white py-2.5 rounded-full text-base font-medium hover:bg-green-700"
              onClick={() => {
                addToCart(item, quantity);
                setIsBottomSheetOpen(false);
                setQuantity(1);
              }}
            >
              Add to Cart ₹{item.price * quantity}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
