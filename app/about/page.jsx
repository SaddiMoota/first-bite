'use client';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-32">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">About First Bite</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2025, First Bite emerged from a simple idea: everyone deserves access to 
              delicious, quality food delivered right to their doorstep. We partner with the finest 
              local restaurants to bring you an unparalleled dining experience.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We're committed to connecting food lovers with the best local cuisine, supporting local 
              businesses, and making every meal a memorable experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-green-600">1000+</h3>
              <p className="text-gray-600">Restaurant Partners</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-green-600">50,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-green-600">30+</h3>
              <p className="text-gray-600">Cities Covered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
