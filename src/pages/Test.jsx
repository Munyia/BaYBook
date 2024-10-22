import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faInstagram, faFacebook, faTiktok, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Test = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  

  const openModal = () => {
    setModalOpen(true);
    const timeoutId = setTimeout(() => {
      setIsTransitioned(true);
    }, 50); // 500 milliseconds delay

    // Clear the timeout on component unmount to avoid memory leaks
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

    handleBodyOverflow(); // Set initial body overflow

    return () => {
      // Cleanup effect
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Books</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Second Column: Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Community Guidelines</a></li>
            <li><a href="#" className="hover:text-white">Code of Conduct</a></li>
            <li><a href="#" className="hover:text-white">How it works</a></li>
            <li><a href="#" className="hover:text-white">Guarantee Page</a></li>
          </ul>
        </div>

        {/* Third Column: Subscriber Section */}
        <div>
          {/* <h3 className="text-lg font-semibold text-white mb-4">Join Our Community</h3>
          <div className="flex text-xs md:text-sm gap-2 items-center pl-2">
            <div className="relative bg-slate-600 rounded-full w-6 h-6">
              <div className="absolute -left-1/2 bg-red-600 rounded-full w-6 h-6">
                <div className="absolute -left-1/2 bg-yellow-600 rounded-full w-6 h-6">
                  <div className="absolute -left-1/2 bg-green-600 rounded-full w-6 h-6"></div>
                </div>
              </div>
            </div>
            <span className="font-semibold -mr-[6px] text-gray-100">+2,030</span>
            <span className="text-gray-400">Subscribers</span>
          </div>
          <p className="text-sm text-gray-400 mt-4">Stay connected with us by joining our newsletter and following us on social media for the latest updates.</p>
        */}
      <div className=" bg-pry text-white  rounded-e-full  p-6 text-left hidden sm:block">
          <p className=" text-base text-[12px] font-semibold md:font-[700] md:text-[14px]">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>
          <p className=" text-base font-[400] md:text-[10px] w-4/5 md:w-3/4 my-4">
            GET UP-TO-DATE INFORMATION ABOUT <span className="text-black"> WORDSMITTERS</span> AND ITS SERVICES
          </p>
          <span
            onClick={openModal}
            className="p-1 md:p-2 text-base rounded-e-2xl rounded-b-2xl text-sec cursor-pointer bg-pry sm:text-[12px]"
          >
            Subscribe
          </span>
        </div>
        {isModalOpen && (
        <div
          className={`fixed  flex justify-center items-center left-0 z-50 bottom-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.1)]`}
        >
          <div
            className={`${
              isTransitioned ? "pt-0" : "pt-[100vh]"
            } transition-all ease-in-out duration-1000 `}
          >
            <div
              className={`bg-white   text-black inline-flex px-3 text-[10px] rounded-xl py-2 gap-3 flex-col`}
            >
              <p className=" font-semibold self-center text-[12px]">
                SUBSCRIBE TO OUR NEWSLETTER
              </p>
              <p>Please insert your Email address</p>
              <form action="" className="flex flex-col gap-3">
                <div className="w-full border-black border rounded-lg py-3 px-2">
                  <input
                    type="text"
                    placeholder="INPUT EMAIL"
                    className="outline-none text-[8px]"
                  />
                </div>
                <div className="flex text-[9px] gap-2 items-center pl-10">
                  <div className="relative bg-slate-600 rounded-full w-6 h-6">
                    <div className="absolute -left-1/2 bg-red-600 rounded-full w-6 h-6">
                      {" "}
                      <div className="absolute -left-1/2 bg-yellow-600 rounded-full w-6 h-6">
                        <div className="absolute -left-1/2 bg-green-600 rounded-full w-6 h-6">
                          {" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                  <span className=" font-semibold -mr-[6px]">+2,030</span>
                  <span>Subscribers</span>
                </div>
                <div className="flex text-[10px] gap-3 justify-between">
                  <button
                    type="submit"
                    className=" bg-black text-white rounded px-9 "
                  >
                    SUBSCRIBE
                  </button>
                  <button
                    onClick={closeModal}
                    className=" border rounded px-9 py-2 border-black"
                  >
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
              <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-blue-500 transition-all duration-200" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="text-xl hover:text-red-600 transition-all duration-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-pink-500 transition-all duration-200" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTiktok} className="text-xl hover:text-black transition-all duration-200" />
            </a>
            <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl hover:text-green-500 transition-all duration-200" />
            </a>
            <a href="mailto:email@example.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl hover:text-red-600 transition-all duration-200" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-blue-600 transition-all duration-200" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-blue-700 transition-all duration-200" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Test;
