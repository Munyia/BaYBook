import React from 'react';

const Policy = () => {
  const policy = {
    introduction: "This Policy outlines the rules and guidelines that govern our community. It aims to ensure that all members understand their rights and responsibilities while participating in our platform.",

    dataCollection: [
      "We collect personal information that you provide voluntarily, such as your name, email address, and other contact details.",
      "We may collect usage data to understand how our services are being used and to improve user experience."
    ],

    dataUsage: [
      "Your data may be used to communicate with you, provide support, and improve our services.",
      "We do not sell or rent your personal information to third parties."
    ],

    dataProtection: [
      "We implement security measures to protect your information from unauthorized access or disclosure.",
      "All data is stored securely, and access is limited to authorized personnel."
    ],

    userRights: [
      "You have the right to access, correct, or delete your personal information.",
      "You can opt out of receiving promotional communications at any time."
    ],

    conclusion: "By using our platform, you agree to comply with this Policy. We encourage you to review it regularly to stay informed about our practices."
  };

  return (
    <div className="bg-bg min-h-screen font-play  p-5">
      <h1 className="text-3xl sm:text-4xl font-play font-bold text-center text-black mb-6">Our Policy</h1>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Introduction */}
        <div className="bg-white font-play p-6 rounded-lg shadow-2xl shadow-slate-900">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="">{policy.introduction}</p>
        </div>

        {/* Data Collection */}
        <div className="bg-white p-6 rounded-lg shadow-2xl shadow-slate-900">
          <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
          <ul className="list-disc list-inside  space-y-2">
            {policy.dataCollection.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Data Usage */}
        <div className="bg-white p-6 rounded-lg shadow-2xl shadow-slate-900">
          <h2 className="text-2xl font-semibold mb-4">Data Usage</h2>
          <ul className="list-disc list-inside space-y-2">
            {policy.dataUsage.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Data Protection */}
        <div className="bg-white p-6 rounded-lg shadow-2xl shadow-slate-900">
          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
          <ul className="list-disc list-inside space-y-2">
            {policy.dataProtection.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* User Rights */}
        <div className="bg-white p-6 rounded-lg shadow-2xl shadow-slate-900">
          <h2 className="text-2xl font-semibold mb-4">User Rights</h2>
          <ul className="list-disc list-inside pace-y-2">
            {policy.userRights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-6 rounded-lg shadow-2xl shadow-slate-900">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="">{policy.conclusion}</p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
