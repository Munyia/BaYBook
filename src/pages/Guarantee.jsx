import React from 'react';

const Guarantee = () => {
  const data = {
    title: "Our Guarantee",
    introduction: "At Baybook, we are committed to providing top-notch services with a focus on quality, reliability, and customer satisfaction. Below are our guarantees for each service we offer:",
    
    guarantees: [
      {
        title: "📚 Ghostwriting Guarantee",
        description: "We ensure complete confidentiality and originality in all ghostwriting projects. Your ideas are safe with us, and we guarantee that the work we provide is 100% unique, tailored to your vision, and delivered within agreed-upon deadlines."
      },
      {
        title: "✍️ Editing Guarantee",
        description: "Our editing services are designed to polish your work to perfection. We guarantee meticulous proofreading, grammatical corrections, and style improvements to elevate the quality of your manuscript, ensuring it's publication-ready."
      },
      {
        title: "🖨️ Publishing Guarantee",
        description: "Whether you're publishing a hard copy or a digital version, we guarantee professional formatting, flawless layout design, and seamless coordination with publishing platforms. Your book will be beautifully presented and ready for distribution."
      },
      {
        title: "📦 Hard Copy & Delivery Guarantee",
        description: "For hard copies, we guarantee high-quality printing and timely delivery. Your book will arrive in pristine condition, packaged securely and delivered to your preferred location with care."
      },
      {
        title: "💻 Soft Copy Guarantee",
        description: "For digital publications, we guarantee secure and accessible soft copies that are compatible with a variety of devices. Whether you need an eBook format or other digital versions, we ensure flawless formatting and easy distribution."
      }
    ],

    conclusion: "We stand behind the quality of our services, and your satisfaction is our priority. If you’re not completely satisfied with any part of our service, we’ll work with you until we get it right."
  };

  return (
    <div className="bg-bg font-play min-h-screen py-4 px-5">
      <div className="max-w-5xl mx-auto p-4 md:p-12 space-y-8">
        {/* Title */}
        <div className="bg-white rounded-lg shadow-2xl shadow-slate-900 p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
          <p className=" text-lg">{data.introduction}</p>
        </div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.guarantees.map((guarantee, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-2xl shadow-slate-900 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold">{guarantee.title}</h2>
              <p className="mt-2 ">{guarantee.description}</p>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="bg-white rounded-lg shadow-2xl shadow-slate-900 p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Your Satisfaction is Our Priority</h2>
          <p className="">{data.conclusion}</p>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
