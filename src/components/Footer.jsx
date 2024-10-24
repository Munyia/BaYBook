import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faInstagram, faFacebook, faTiktok, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isTransitioned, setIsTransitioned] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    const timeoutId = setTimeout(() => {
      setIsTransitioned(true);
    }, 50);

    return () => clearTimeout(timeoutId);
  };

  const closeModal = () => {
    setIsTransitioned(false);
    setModalOpen(false);
  };

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <footer className="bg-bg z-50 animate-bg-transition py-10 px-4 md:px-10 lg:px-20 font-play">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold font-mont text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link className="hover:text-white" to={'/about'}>About</Link></li>
            <li><Link className="hover:text-white" to={'/blog'}>Blog</Link></li>
            <li><Link className="hover:text-white" to={'/contact'}>Contact Us</Link></li>
            <li><Link className="hover:text-white" to={'/faq'}>FAQ</Link></li>
          </ul>
        </div>

        {/* Second Column: Resources */}
        <div>
          <h3 className="text-lg font-semibold font-mont text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link className="hover:text-white" to={'/community-guidelines'}>Community Guidelines</Link></li>
            <li><Link className="hover:text-white" to={'/code-of-conduct'}>Code of Conduct</Link></li>
            <li><Link className="hover:text-white" to={'/policy'}>Policy</Link></li>
            <li><Link className="hover:text-white" to={'/guarantee'}>Guarantee Page</Link></li>
          </ul>
        </div>

        {/* Third Column: Subscriber Section */}
        <div>
          <div className="bg-bg w-[60%] rounded-e-full p-6 text-left hidden sm:block">
            <p className="text-xs pb-5 font-normal md:font-[700] md:text-[14px]">
              SUBSCRIBE <br /> TO OUR <br /> NEWSLETTER
            </p>
            <span
              onClick={openModal}
              className="p-1 md:p-2 text-base rounded-e-2xl rounded-b-2xl text-sec cursor-pointer bg-pry sm:text-[12px]"
            >
              Subscribe
            </span>
          </div>

          {isModalOpen && (
            <div className="fixed flex justify-center items-center left-0 z-50 bottom-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.1)]">
              <div className={`${isTransitioned ? "pt-0" : "pt-[100vh]"} transition-all ease-in-out duration-1000`}>
                <div className="bg-white text-black inline-flex px-3 text-[10px] rounded-xl py-2 gap-3 flex-col">
                  <p className="font-semibold self-center text-lg font-mont">
                    SUBSCRIBE TO OUR NEWSLETTER
                  </p>
                  <p>Please insert your Email address</p>
                  <form action="" className="flex flex-col gap-3">
                    <div className="w-full border-black border rounded-lg py-3 px-2">
                      <input
                        type="text"
                        placeholder="INPUT EMAIL"
                        className="outline-none text-[8px] font-play"
                      />
                    </div>
                    <div className="flex text-[9px] gap-2 items-center pl-10">
                      <div className="relative bg-slate-600 rounded-full w-6 h-6"></div>
                      <span className="font-semibold -mr-[6px]">+2,030</span>
                      <span>Subscribers</span>
                    </div>
                    <div className="flex text-[10px] gap-3 justify-between">
                      <button type="submit" className="bg-black text-white rounded px-9">
                        SUBSCRIBE
                      </button>
                      <button onClick={closeModal} className="border rounded px-9 py-2 border-black">
                        CANCEL
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Social Media and Copyright Section */}
      <div className="mt-10 border-t border-gray-700 pt-6">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© 2024 Book App, All Rights Reserved.</p>
          </div>
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
    </footer>
  );
};

export default Footer;
