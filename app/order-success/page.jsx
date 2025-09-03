'use client';
import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

export default function OrderSuccess() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20 pb-32">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your order. We'll start preparing your delicious meal right away!
          </p>
          <button
            onClick={() => router.push('/')}
            className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-200"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}
