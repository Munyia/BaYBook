import React from 'react';

const CommunityGuildlines = () => {
  const data = {
    title: "🌟 Community Guidelines 🌟",
    introduction: "Welcome to our vibrant community! To maintain a safe and supportive environment, please adhere to the following guidelines.",
    guidelines: [
      {
        title: "🤝 Be Respectful",
        description: "Treat all members with kindness and respect. We’re here to support one another.",
      },
      {
        title: "🚫 No Hate Speech",
        description: "Hate speech, harassment, or discrimination of any kind will not be tolerated.",
      },
      {
        title: "📌 Stay On Topic",
        description: "Keep discussions relevant to the community. Off-topic conversations should be taken elsewhere.",
      },
      {
        title: "✋ No Spam",
        description: "Avoid posting spam or self-promotion without prior permission from moderators.",
      },
      {
        title: "📣 Report Issues",
        description: "If you notice any inappropriate behavior, please report it to the moderators immediately.",
      },
    ],
    consequences: "Violating these guidelines may result in warnings or removal from the community, depending on the severity of the offense.",
    message: "We appreciate your cooperation in making this community a welcoming place for everyone!",
  };

  return (
    <div className="bg-bg  font-play min-h-screen py-4 px-5">
      <div className="max-w-5xl mx-auto p-4 md:p-12 space-y-8">
        {/* Title */}
        <div className=" p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
          <p className=" text-lg">{data.introduction}</p>
        </div>

        {/* Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.guidelines.map((guideline, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-2xl shadow-slate-900 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold">{guideline.title}</h2>
              <p className="mt-2 ">{guideline.description}</p>
            </div>
          ))}
        </div>

        {/* Consequences */}
        <div className="bg-white shadow-2xl shadow-slate-900 rounded-lg  p-6">
          <h2 className="text-2xl font-bold mb-4">⚠️ Consequences</h2>
          <p className="">{data.consequences}</p>
        </div>

        {/* Message */}
        <div className=" p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">🎉 Thank You!</h2>
          <p className="">{data.message}</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityGuildlines;
