import React from 'react';
import { Link } from 'react-router-dom';

const aboutData = {
    title: "Welcome to Baybook",
    description: "Baybook is your go-to platform for everything books. Whether you're here to read, publish, or discuss the latest literary trends, we’ve got you covered.",
    services: [
      {
        title: "Read Your Heart Out",
        description: "Immerse yourself in a world of endless stories. Baybook offers an extensive library where you can discover and enjoy books across all genres."
      },
      {
        title: "Publish with Ease",
        description: "Got a story to share? With our easy-to-use publishing tools, you can turn your manuscript into a published book and share it with the world."
      },
      {
        title: "Ghostwriting Services",
        description: "If you need help telling your story, our professional ghostwriting team is here to help bring your ideas to life and create a compelling narrative."
      }
    ],
    community: {
      title: "Join Our Community",
      description: "Connect with fellow book lovers, share your thoughts, and dive deep into discussions about your favorite books. Baybook is where readers and authors unite to form a vibrant community."
    },
    footer: {
      text: "Baybook is the home of stories. We help you read, write, and publish with ease.",
      contactLink: "Contact Us"
    }
  };

const About = () => {
  const { title, description, services, community, footer } = aboutData;

  return (
    <div className="bg-bg min-h-screen py-4">
      
      {/* Hero Section */}
      <div className="text-center py-3">
        <h1 className="text-4xl font-play font-bold mb-4">{title}</h1>
        <p className="text-lg max-w-2xl mx-auto">{description}</p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-2xl shadow-slate-900 p-6  transition-all">
            <h2 className="text-2xl font-mont font-semibold mb-4">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Community Section */}
      <div className="py-10 animate-bg-transition mx-5 rounded-lg shadow-2xl shadow-slate-900 p-8 text-center">
        <h2 className="text-3xl font-play mb-6">{community.title}</h2>
        <p className="text-lg pb-5 max-w-xl mx-auto">{community.description}</p>
        <Link to={'/books'}
          className="relative shadow-2xl shadow-slate-900 justify-center mx-auto w-fit flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-pry rounded-md group"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"></span>
          </span>
          <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-ml-4 group-hover:-mb-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-dk-pry1 rounded-md group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Start Reading</span>
        </Link>
      </div>

      {/* Footer Section */}
      <div className="text-center py-10">
        <p>{footer.text}</p>
        <Link to={"/"} className="font-bold hover:underline">{footer.contactLink}</Link>
      </div>
    </div>
  );
};

export default About;
