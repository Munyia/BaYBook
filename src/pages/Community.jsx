import React from 'react';

const Community = () => {
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
        <div className="bg-bg font-play min-h-screen py-10 px-5">
            <div className="max-w-5xl mx-auto bg-glass rounded-3xl shadow-2xl p-8 md:p-12">
                <h1 className="text-2xl font-bold text-center text-pry mb-6">{data.title}</h1>
                
                <p className="text-gray-700 text-lg mb-6 text-center">
                    {data.introduction}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.guidelines.map((guideline, index) => (
                        <div key={index} className="animate-bg-transition rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-xl font-semibold text-white">{guideline.title}</h2>
                            <p className="text-white mt-2">{guideline.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold ">⚠️ Consequences</h2>
                    <p className="text-gray-700 mt-2">{data.consequences}</p>
                </div>

                <div className="mt-8 text-center">
                    <h2 className="text-2xl font-bold ">🎉 Thank You!</h2>
                    <p className="text-gray-700 mt-2">{data.message}</p>
                </div>
            </div>
        </div>
    );
};

export default Community;
