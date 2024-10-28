import React from 'react';

const Code = () => {
  const code = {
    purpose: "The purpose of this Code of Conduct is to provide a safe and inclusive environment for all members of our community. We strive to foster a respectful and welcoming atmosphere where everyone can engage without fear of discrimination or harassment.",
    
    expectedBehavior: [
      "Be respectful of others and their viewpoints.",
      "Use inclusive language and actions.",
      "Report any violations of this Code of Conduct promptly.",
      "Encourage diversity and inclusion in all activities."
    ],
  
    unacceptableBehavior: [
      "Harassment, intimidation, or discrimination of any kind.",
      "Use of offensive language or imagery.",
      "Disruption of discussions or activities.",
      "Threatening or aggressive behavior."
    ],
  
    reportingViolations: "If you witness or experience any violations of this Code of Conduct, please report them to a member of the community management team or through our reporting form. All reports will be handled confidentially and investigated promptly.",
    
    conclusion: "We are committed to providing a safe and welcoming environment for all community members. By adhering to this Code of Conduct, we can ensure that everyone feels valued and respected."
  };

  return (
    <div className="bg-bg min-h-screen font-play p-5">
      <h1 className="text-3xl sm:text-4xl font-play font-bold text-center text-black mb-6">Code of Conduct</h1>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Purpose */}
        <div className="bg-white p-6 rounded-lg shadow-2xl shadow-slate-900">
          <h2 className="text-2xl font-semibold mb-4">Purpose</h2>
          <p className="">{code.purpose}</p>
        </div>

        {/* Expected Behavior */}
        <div className="bg-white p-6 rounded-lg shadow-2xl shadow-slate-900">
          <h2 className="text-2xl font-semibold mb-4">Expected Behavior</h2>
          <ul className="list-disc list-inside  space-y-2">
            {code.expectedBehavior.map((behavior, index) => (
              <li key={index}>{behavior}</li>
            ))}
          </ul>
        </div>

        {/* Unacceptable Behavior */}
        <div className="bg-white p-6 rounded-lg shadow-2xl shadow-slate-900">
          <h2 className="text-2xl font-semibold mb-4">Unacceptable Behavior</h2>
          <ul className="list-disc list-inside space-y-2">
            {code.unacceptableBehavior.map((behavior, index) => (
              <li key={index}>{behavior}</li>
            ))}
          </ul>
        </div>

        {/* Reporting Violations */}
        <div className="bg-white p-6 rounded-lg shadow-2xl shadow-slate-900">
          <h2 className="text-2xl font-semibold mb-4">Reporting Violations</h2>
          <p className="">{code.reportingViolations}</p>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-6 rounded-lg shadow-2xl shadow-slate-900">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="">{code.conclusion}</p>
        </div>
      </div>
    </div>
  );
};

export default Code;
