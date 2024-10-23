import React from 'react';
import { Link } from 'react-router-dom';

const LoginModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4">You need to log in</h2>
            <div className="flex justify-between">
              <div className="space-x-4 gap-5 flex font-[verdana]">
                <button
                  onClick={onClose}
                  className="relative justify-center mx-auto w-fit flex items-center px-6 py-2 overflow-hidden font-medium transition-all bg-red-500 rounded-md group"
                >
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-dk-pry1 rounded-md group-hover:translate-x-0"></span>
                  <span className="relative w-full text-xs text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    Cancel
                  </span>
                </button>
                
                <Link to={"/login"}
                  className="relative justify-center mx-auto w-fit flex items-center px-6 py-2 overflow-hidden font-medium transition-all bg-pry rounded-md group"
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
        </div>
      );
    };
export default LoginModal;
