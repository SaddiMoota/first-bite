'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20 pb-32">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-orange-500 mb-2">404</h1>
            <p className="text-2xl font-semibold text-gray-800">Page Not Found</p>
          </div>
          <div className="mb-8 text-orange-500">
            <svg
              className="w-40 h-40 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
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
