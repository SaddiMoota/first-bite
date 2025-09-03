'use client';
import { useRouter } from 'next/navigation';
import { XCircle } from 'lucide-react';

export default function OrderFailed() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20 pb-32">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <XCircle className="w-20 h-20 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Order Failed
          </h1>
          <p className="text-gray-600 mb-8">
            We're sorry, but there was an error processing your order. Please try again or contact our support team if the problem persists.
          </p>
          <div className="space-y-4">
            <button
              onClick={() => router.back()}
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-200"
            >
              Try Again
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-200"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
