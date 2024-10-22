import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Test = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column: Links */}
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

        {/* Third Column: Social and Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect with Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-blue-400" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="text-xl hover:text-red-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-pink-500" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTiktok} className="text-xl hover:text-gray-300" />
            </a>
            <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl hover:text-green-500" />
            </a>
            <a href="mailto:email@example.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl hover:text-yellow-400" />
            </a>
          </div>

          <p className="text-sm text-gray-400">© 2024 Book App, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Test;
