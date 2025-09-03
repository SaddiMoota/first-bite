'use client';

import { useState } from 'react';
import Image from 'next/image';
import ConfirmModal from '@/app/components/ConfirmModal';

export default function Account() {
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Mock order history data
  const orders = [
    {
      id: 'ORD001',
      date: '2025-09-01',
      total: 549,
      items: [
        { name: 'Chicken Biryani', quantity: 2, price: 199 },
        { name: 'Dal Tadka', quantity: 1, price: 149 }
      ],
      status: 'Delivered'
    },
    // Add more orders as needed
  ];

  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();
    // Add phone number validation here
    setIsEditingPhone(false);
    setIsVerifyingOTP(true);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // Add OTP verification logic here
    setIsVerifyingOTP(false);
    // Update phone number in user profile
  };

  const handleDeleteAccount = () => {
    // Add account deletion logic here
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-32">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">My Account</h1>

        {/* Account Settings Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
          
          {/* Phone Number Section */}
          <div className="mb-6 pb-6 border-b">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Phone Number</h3>
            {!isEditingPhone && !isVerifyingOTP ? (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">+91 9876543210</span>
                <button
                  onClick={() => setIsEditingPhone(true)}
                  className="text-green-600 text-sm hover:text-green-700"
                >
                  Change
                </button>
              </div>
            ) : isEditingPhone ? (
              <form onSubmit={handlePhoneNumberSubmit} className="space-y-3">
                <div>
                  <input
                    type="tel"
                    value={newPhoneNumber}
                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                    placeholder="Enter new phone number"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsEditingPhone(false)}
                    className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Send OTP
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleOTPSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    maxLength={6}
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsVerifyingOTP(false);
                      setIsEditingPhone(true);
                    }}
                    className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Verify OTP
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Delete Account Section */}
          <div>
            <button
              onClick={() => setIsDeleteModalOpen(true)}
              className="text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Delete Account
            </button>
          </div>
        </div>

      </div>

      {/* Delete Account Confirmation Modal */}
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteAccount}
        title="Delete Account"
        message="Are you sure you want to delete your account? This action cannot be undone and you will lose all your order history and saved information."
      />
    </div>
  );
}
