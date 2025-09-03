"use client";

import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Link from "next/link";
import { Menu, X, ShoppingBag, User, Gift, Info, HelpCircle, FileText, Shield, LogOut, Facebook, Twitter, Instagram, LinkedIn, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getItemCount } = useCart();
  const cartCount = getItemCount();

  const dummyUser = {
    name: "John Doe",
    avatar: "JD",
    phone: "+1 234 567 890"
  };

  return (
    <>
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="ml-2 text-green-600 font-bold text-xl">
                First Bite
              </span>
            </Link>

            {/* Desktop menus */}
            <div className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-base text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-base text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="rounded-full border bg-green-600 w-10 h-10 text-base text-white font-medium shadow-sm"
              >
                FB
              </button>
              <Link
                href="/login"
                className="flex items-center px-6 py-2 bg-green-600 hover:bg-green-700 rounded-full transition text-base leading-normal font-medium pointer"
              >
                Login
              </Link>
              {/* Cart button on desktop */}
              {cartCount > 0 && (
                <div className="flex items-center">
                  <Link
                    href="/cart"
                    className="flex items-center px-3 py-2 border border-green-600 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition text-base font-medium pointer"
                  >
                    <ShoppingBag className="w-4 mr-1" strokeWidth={3} />
                    Cart{" "}
                    {cartCount > 0 && (
                      <span className="ml-1 bg-green-600 text-white rounded-full px-2 py-0.5 text-xs">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </div>
              )}
              {/*Menu Toggle*/}
              <button 
                type="button"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="text-green-600 pointer w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50">
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                {/* User Profile */}
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-600 w-10 h-10 flex items-center justify-center text-white text-xl font-medium">
                    {dummyUser.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{dummyUser.name}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <Phone className="w-3 h-3" />
                      {dummyUser.phone}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto py-4">
                <div className="px-4 space-y-1">
                  <Link href="/orders" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                    <ShoppingBag className="w-5 h-5" />
                    <span>Orders</span>
                  </Link>
                  <Link href="/account" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                    <User className="w-5 h-5" />
                    <span>Account</span>
                  </Link>
                  <Link href="/offers" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                    <Gift className="w-5 h-5" />
                    <span>Offers</span>
                  </Link>
                  <Link href="/about" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                    <Info className="w-5 h-5" />
                    <span>About</span>
                  </Link>
                  <Link href="/faq" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                    <HelpCircle className="w-5 h-5" />
                    <span>FAQ</span>
                  </Link>
                  <Link href="/cancellation-policy" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                    <FileText className="w-5 h-5" />
                    <span>Cancellation Policy</span>
                  </Link>
                  <Link href="/terms" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                    <FileText className="w-5 h-5" />
                    <span>Terms & Conditions</span>
                  </Link>
                  <Link href="/privacy" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                    <Shield className="w-5 h-5" />
                    <span>Privacy Policy</span>
                  </Link>
                  <button className="w-full flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg">
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t px-4 py-6">
                <div className="flex justify-center space-x-6 mb-4">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    {/* <LinkedIn className="w-6 h-6" /> */}
                  </a>
                </div>
                <p className="text-center text-sm text-gray-500">
                  © 2025 firstbite.com
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
