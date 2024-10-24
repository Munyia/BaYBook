import React from 'react';
import { Link } from 'react-router-dom';

const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-md shadow-lg w-11/12 max-w-sm md:max-w-md lg:max-w-sm text-center mx-auto">
        <h2 className="text-lg font-semibold mb-4 font-mont">You need to log in</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 font-play">
          {/* Cancel Button */}
          <button
            onClick={onClose}
            className="relative justify-center w-full sm:w-auto flex items-center px-6 py-2 overflow-hidden font-medium transition-all bg-red-500 rounded-md group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-dk-pry1 rounded-md group-hover:translate-x-0"></span>
            <span className="relative w-full text-xs text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Cancel
            </span>
          </button>

          {/* Log In Button */}
          <Link
            to={"/login"}
            className="relative justify-center w-full sm:w-auto flex items-center px-6 py-2 overflow-hidden font-medium transition-all bg-pry rounded-md group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-dk-pry1 rounded-md group-hover:translate-x-0"></span>
            <span className="relative w-full text-xs text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Log In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
