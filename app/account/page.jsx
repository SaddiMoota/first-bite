'use client';

import { useState } from 'react';
import Image from 'next/image';
import ConfirmModal from '@/app/components/ConfirmModal';
import { Camera } from 'lucide-react';

export default function Account() {
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState('/images/default-avatar.png');
  const [address, setAddress] = useState({
    street: '123 Baker Street',
    city: 'London',
    postcode: 'SW1A 1AA',
    deliveryInstructions: 'Leave with neighbor if not home'
  });

  // Mock user data
  const userData = {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '+44 7911 123456'
  };

  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();
    setIsEditingPhone(false);
    setIsVerifyingOTP(true);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    setIsVerifyingOTP(false);
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setIsEditingAddress(false);
  };

  const handleDeleteAccount = () => {
    setIsDeleteModalOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-32">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl text-gray-700 font-bold mb-8">My Account</h1>

        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-6">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src={profileImage}
                  alt="Profile picture"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <label className="absolute bottom-0 right-0 bg-green-600 rounded-full p-2 cursor-pointer hover:bg-green-700 transition-colors">
                <Camera className="w-4 h-4 text-white" />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            {/* User Info */}
            <div>
              <h2 className="text-lg text-gray-700 font-semibold">
                {userData.firstName} {userData.lastName}
              </h2>
              <p className="text-gray-600">{userData.phoneNumber}</p>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg text-gray-700 font-semibold">Delivery Address</h2>
            <button
              onClick={() => setIsEditingAddress(!isEditingAddress)}
              className="text-green-600 text-sm hover:text-green-700"
            >
              {isEditingAddress ? 'Cancel' : 'Edit'}
            </button>
          </div>

          {!isEditingAddress ? (
            <div className="space-y-2">
              <p className="text-gray-700">{address.street}</p>
              <p className="text-gray-700">{address.city}</p>
              <p className="text-gray-700">{address.postcode}</p>
              {address.deliveryInstructions && (
                <p className="text-gray-600 text-sm mt-2">
                  Note: {address.deliveryInstructions}
                </p>
              )}
            </div>
          ) : (
            <form onSubmit={handleAddressSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Street Address*
                </label>
                <input
                  type="text"
                  value={address.street}
                  onChange={(e) => setAddress({...address, street: e.target.value})}
                  className="w-full px-3 py-2 text-gray-700 placeholder:text-gray-400 border rounded focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  City*
                </label>
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) => setAddress({...address, city: e.target.value})}
                  className="w-full px-3 py-2 text-gray-700 placeholder:text-gray-400 border rounded focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Postcode*
                </label>
                <input
                  type="text"
                  value={address.postcode}
                  onChange={(e) => setAddress({...address, postcode: e.target.value})}
                  pattern="^[A-Za-z]{1,2}\d[A-Za-z\d]? ?\d[A-Za-z]{2}$"
                  className="w-full px-3 py-2 text-gray-700 placeholder:text-gray-400 border rounded focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Delivery Instructions (Optional)
                </label>
                <textarea
                  value={address.deliveryInstructions}
                  onChange={(e) => setAddress({...address, deliveryInstructions: e.target.value})}
                  className="w-full px-3 py-2 text-gray-700 placeholder:text-gray-400 border rounded focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-transparent"
                  rows={3}
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save Changes
              </button>
            </form>
          )}
        </div>

        {/* Phone Number Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg text-gray-700 font-semibold mb-4">Phone Number</h2>
          {!isEditingPhone && !isVerifyingOTP ? (
            <div className="flex items-center justify-between">
              <span className="text-gray-600">{userData.phoneNumber}</span>
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
                  className="w-full px-3 py-2 text-gray-700 placeholder:text-gray-400 border rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
                  className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
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
                  className="w-full px-3 py-2 text-gray-700 placeholder:text-gray-400 border rounded focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-transparent"
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
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Verify OTP
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Delete Account Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 text-red-600">Danger Zone</h2>
          <button
            onClick={() => setIsDeleteModalOpen(true)}
            className="text-red-600 hover:text-red-700 text-sm font-medium"
          >
            Delete Account
          </button>
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
