'use client';

export default function Privacy() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information that you provide directly to us, including name, contact information, delivery address, and payment details. We also collect data about your orders and preferences to improve our service."
    },
    {
      title: "How We Use Your Information",
      content: "We use your information to process orders, provide customer support, send promotional offers (with your consent), and improve our services. We never sell your personal data to third parties."
    },
    {
      title: "Data Security",
      content: "We implement robust security measures to protect your personal information. All payment data is encrypted and processed securely through our payment partners."
    },
    {
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal data. You can manage your communication preferences and opt out of marketing communications at any time."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-32">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <p className="text-gray-600 mb-8">
            Last updated: September 1, 2025
          </p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 text-sm">
              For any privacy-related questions or concerns, please contact our Data Protection Officer at privacy@firstbite.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
