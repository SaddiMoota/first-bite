'use client';

export default function Offers() {
  const offers = [
    {
      code: 'FIRSTBITE25',
      discount: '25% OFF',
      description: 'Get 25% off on your first order',
      minOrder: '£20',
      validUntil: 'September 30, 2025'
    },
    {
      code: 'WEEKEND50',
      discount: '£5 OFF',
      description: 'Weekend special discount on orders above £30',
      minOrder: '£30',
      validUntil: 'Limited time offer'
    },
    {
      code: 'SPECIAL10',
      discount: '10% OFF',
      description: 'Special discount on selected restaurants',
      minOrder: '£25',
      validUntil: 'September 15, 2025'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-32">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Special Offers</h1>
        
        <div className="grid gap-6">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 rounded-bl">
                {offer.discount}
              </div>
              
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {offer.description}
                </h2>
                <div className="space-y-2 text-gray-600">
                  <p>Use code: <span className="font-mono font-semibold text-green-600">{offer.code}</span></p>
                  <p>Minimum order: {offer.minOrder}</p>
                  <p>Valid until: {offer.validUntil}</p>
                </div>
              </div>

              <button 
                onClick={() => {
                  navigator.clipboard.writeText(offer.code);
                  alert('Promo code copied!');
                }}
                className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Copy Code
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-green-800 mb-2">Terms & Conditions</h2>
          <ul className="list-disc list-inside text-green-600 space-y-2">
            <li>Offers cannot be combined with other promotions</li>
            <li>Valid only on selected items and restaurants</li>
            <li>First Bite reserves the right to modify or cancel any offer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
