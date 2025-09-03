'use client';

export default function CancellationPolicy() {
  const policies = [
    {
      title: "Order Cancellation Timeline",
      content: "You can cancel your order within 2 minutes of placing it without any charges. After this window, cancellation might be subject to charges depending on the order status."
    },
    {
      title: "Refund Process",
      content: "Refunds for cancelled orders are processed within 5-7 business days, depending on your payment method and bank processing times."
    },
    {
      title: "Non-Cancellable Orders",
      content: "Orders that have already been prepared or are out for delivery cannot be cancelled. Please contact customer support for assistance with any issues."
    },
    {
      title: "Delivery Issues",
      content: "If there are issues with your delivery (late delivery, wrong items, quality issues), please report them immediately through the app or contact customer support."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-32">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Cancellation Policy</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          {policies.map((policy, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {policy.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {policy.content}
              </p>
            </div>
          ))}

          <div className="mt-8 border-t pt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              How to Cancel an Order
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Go to 'My Orders' in the app</li>
              <li>Select the order you wish to cancel</li>
              <li>Click on 'Cancel Order' (if available)</li>
              <li>Select a cancellation reason</li>
              <li>Confirm cancellation</li>
            </ol>
          </div>

          <div className="mt-8 bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Need Help?</h3>
            <p className="text-yellow-700">
              If you need assistance with cancelling an order or have questions about our policy, 
              please contact our 24/7 customer support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
