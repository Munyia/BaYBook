import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faInstagram, faFacebook, faTiktok, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Simulate form submission (replace with actual submission logic)
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Reset form
      setErrors({}); // Clear any errors
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-bg min-h-screen font-mont flex flex-col items-center">
      <h3 className="text-3xl sm:text-4xl pt-5 font-play font-bold text-black text-center">
        Contact Us
      </h3>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        {/* Contact Information */}
        <div className="lg:w-1/2 lg:mr-6">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h4 className="text-2xl font-play font-bold mb-4">Get in Touch</h4>
            <p className="text-gray-700 mb-4">
              Have questions or need assistance? We're here to help! Reach out to us through the contact form or use the information below.
            </p>
            <h5 className="font-bold">Email:</h5>
            <p className="text-gray-700 mb-2">support@baybook.com</p>
            <h5 className="font-bold">Phone:</h5>
            <p className="text-gray-700">+1 (234) 567-890</p>
            <h5 className="font-bold mb-2 mt-4">Follow Us:</h5>
            <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-3xl text-blue-500 transition-all duration-200" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="text-xl hover:text-3xl text-red-600 transition-all duration-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-3xl text-pink-700 transition-all duration-200" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTiktok} className="text-xl hover:text-3xl text-black transition-all duration-200" />
            </a>
            <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl hover:text-3xl text-green-700 transition-all duration-200" />
            </a>
            <a href="mailto:email@example.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl hover:text-3xl text-red-600 transition-all duration-200" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-3xl text-blue-600 transition-all duration-200" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-3xl text-blue-700 transition-all duration-200" />
            </a>
          </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2">
          <form className="bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={handleSubmit}>
            <h4 className="text-2xl font-play font-bold mb-4">Contact Form</h4>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`border rounded w-full py-2 px-3 ${errors.name ? 'border-red-500' : ''}`}
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`border rounded w-full py-2 px-3 ${errors.email ? 'border-red-500' : ''}`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`border rounded w-full py-2 px-3 ${errors.message ? 'border-red-500' : ''}`}
                required
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button type="submit" 
            className="relative justify-center mx-auto w-fit flex items-center px-6 py-4 overflow-hidden font-medium transition-all bg-pry rounded-md group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"></span>
            </span>
            <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-ml-4 group-hover:-mb-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-dk-pry1 rounded-md group-hover:translate-x-0"></span>
            <span className="relative w-full text-xs text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Send Message
            </span>
          </button>
            
          </form>
          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
              <strong className="font-bold">Thank you!</strong>
              <span className="block sm:inline"> Your message has been sent successfully.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
