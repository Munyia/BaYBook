import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  

  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dob: '',
    country: '',
    state: '',
    phone: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prev => !prev); // Toggle visibility
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, firstName, lastName, email, password, confirmPassword, country, state, phone, dob, gender } = formData;

    // Check if all fields are filled
    if (!username || !firstName || !lastName || !email || !password || !confirmPassword || !country || !state || !phone || !dob || !gender) {
      setError('Please fill all fields.');
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Handle signup logic here (e.g., API call)
    console.log('Signing up with:', formData);
    // Reset error message on successful submission
    setError('');
  };

  return (
    <div className="pb-10 pt-5 px-10 flex gap-5 bg-bg border-y-4 border-pry border-double">
      <form
        className="flex flex-col gap-2 p-4 w-[40%] rounded-3xl font-sans transition duration-300 bg-gradient-to-br from-[#BC20FF] to-[#8318B4]"
        onSubmit={handleSubmit}
      >
        {error && <p className="text-red-500 text-xs">{error}</p>}

        {/* Name Inputs in Flex */}
        <div className="flex justify-between gap-2">
          {/* First Name */}
          <div className="flex flex-col w-[48%]">
            <label htmlFor="firstName" className="text-white text-xs font-semibold">First Name</label>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your First Name"
              className="h-12 p-2 border border-gray-300 rounded-full bg-white text-xs focus:outline-none focus:border-[#AE8DF8]"
              required
              aria-label="Firstname"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col w-[48%]">
            <label htmlFor="lastName" className="text-white text-xs font-semibold">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your Last Name"
              className="h-12 p-2 border border-gray-300 rounded-full bg-white text-xs focus:outline-none focus:border-[#AE8DF8]"
              required
               aria-label="Lastname"
            />
          </div>
        </div>

        {/* Username and Email Inputs */}
        <div className="flex justify-between gap-2">
          <div className="flex flex-col w-[48%]">
            <label htmlFor="username" className="text-white text-xs font-semibold">Username</label>
            <input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your Username"
              className="h-12 p-2 border border-gray-300 rounded-full bg-white text-xs focus:outline-none focus:border-[#AE8DF8]"
              required
               aria-label="Username"
            />
          </div>
         
          <div className="flex flex-col w-[48%] relative">
  <label htmlFor="email" className="text-white text-xs font-semibold">Email</label>
  <input
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Enter your Email"
    className="h-12 p-2 pl-10 border border-gray-300 rounded-full bg-white text-xs focus:outline-none focus:border-[#AE8DF8]"
    type="email"
    required
    aria-label="Email"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 32 32"
    className="absolute left-3 top-1/2 transform -translate-y-1/2"
  >
    <g data-name="Layer 3" id="Layer_3">
      <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
    </g>
  </svg>
</div>

        </div>

        {/* Password and Confirm Password Inputs */}
        <div className="flex justify-between gap-2">
        <div className="flex flex-col w-[48%] relative">
  <label htmlFor="password" className="text-white text-xs font-semibold">Email</label>
  <div className="relative">
    <input
      placeholder="Enter your Password"
      className="h-12 w-full p-2 pr-10 border border-gray-300 rounded-full bg-white text-xs focus:outline-none focus:border-[#AE8DF8]"
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      aria-label="Password"
      id="password"
    />
    <button
      type="button"
      onClick={togglePasswordVisibility}
      className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full p-2"
    >
      {showPassword ? (
        // Eye icon (show password)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 4.5C6.75 4.5 2.25 9 2.25 12s4.5 7.5 9.75 7.5c4.5 0 8.25-3.75 8.25-7.5s-3.75-7.5-8.25-7.5zm0 13.5c-3 0-5.25-2.25-5.25-5.25S9 7.5 12 7.5s5.25 2.25 5.25 5.25S15 18 12 18zm0-8.25c-1.5 0-2.75 1.25-2.75 2.75S10.5 15 12 15s2.75-1.25 2.75-2.75S13.5 9.75 12 9.75z" />
        </svg>
      ) : (
        // Padlock icon (hide password)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          viewBox="-64 0 512 512"
          height="15"
        >
          <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
          <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
        </svg>
      )}
    </button>
  </div>
</div>


<div className="flex flex-col w-[48%] relative">
  <label htmlFor="confirmpassword" className="text-white text-xs font-semibold">Email</label>
  <div className="relative">
  <input
            id="confirmpassword"
            placeholder="Confirm your Password"
            className="h-12 w-full p-2 pr-10 border border-gray-300 rounded-full bg-white text-xs focus:outline-none focus:border-[#AE8DF8]"
            type={showConfirmPassword ? 'text' : 'password'} // Use the state variable for visibility
            value={confirmPassword} // This should be a separate state variable
            onChange={(e) => setConfirmPassword(e.target.value)} // Set the confirm password state
            required
            aria-label="Confirm Password"
          />

<button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
            aria-label="Toggle confirm password visibility"
          >
            {showConfirmPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
          <path d="M12 4.5C6.75 4.5 2.25 9 2.25 12s4.5 7.5 9.75 7.5c4.5 0 8.25-3.75 8.25-7.5s-3.75-7.5-8.25-7.5zm0 13.5c-3 0-5.25-2.25-5.25-5.25S9 7.5 12 7.5s5.25 2.25 5.25 5.25S15 18 12 18zm0-8.25c-1.5 0-2.75 1.25-2.75 2.75S10.5 15 12 15s2.75-1.25 2.75-2.75S13.5 9.75 12 9.75z" />
        </svg>
      ) : (
        // Padlock icon (hide password)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          viewBox="-64 0 512 512"
          height="15"
        >
          <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
          <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
        </svg>
      )}
    </button>
  </div>
</div>
        </div>

        {/* Phone Number and Date of Birth Inputs */}
        <div className="flex justify-between gap-2">
          <div className="flex flex-col w-[48%]">
            <label htmlFor="phone" className="text-white text-xs font-semibold">Phone Number</label>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
              className="h-12 p-2 border border-gray-300 rounded-full bg-white text-xs focus:outline-none focus:border-[#AE8DF8]"
              type="tel"
              required
                aria-label="Phone Number"
            />
          </div>

          <div className="flex flex-col w-[48%]">
            <label htmlFor="dob" className="text-white text-xs font-semibold">Date of Birth</label>
            <input
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="h-12 p-2 border border-gray-300 rounded-full bg-white text-xs focus:outline-none focus:border-[#AE8DF8]"
              type="date"
              required
                aria-label="Date of Birth"
            />
          </div>
        </div>

        {/* Country and State Inputs */}
        <div className="flex justify-between gap-2">
          <div className="flex flex-col w-[48%]">
            <label htmlFor="country" className="text-white text-xs font-semibold">Country</label>
            <input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter your Country"
              className="h-12 p-2 border border-gray-300 rounded-full bg-white text-xs focus:outline-none focus:border-[#AE8DF8]"
              required
                aria-label="Country"
            />
          </div>

          <div className="flex flex-col w-[48%]">
            <label htmlFor="state" className="text-white text-xs font-semibold">State</label>
            <input
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter your State"
              className="h-12 p-2 border border-gray-300 rounded-full bg-white text-xs focus:outline-none focus:border-[#AE8DF8]"
              required
               aria-label="State of Resident"
            />
          </div>
        </div>


        {/* Gender Selection */}
        <label className="text-white justify-center text-center text-xs font-semibold">Gender</label>
        <div className="flex justify-center gap-4 mt-1">
          <div>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={handleChange}
              className="cursor-pointer"
            />
            <label htmlFor="male" className="ml-1 text-white">Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={handleChange}
              className="cursor-pointer"
            />
            <label htmlFor="female" className="ml-1 text-white">Female</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
              onChange={handleChange}
              className="cursor-pointer"
            />
            <label htmlFor="other" className="ml-1 text-white">Other</label>
          </div>
        </div>

         {/* Submit Button */}
        <button 
      className="relative justify-center mx-auto w-fit flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-pry rounded-md group"
    >
      <span
        className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4"
      >
        <span
          className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"
        ></span>
      </span>
      <span
        className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-ml-4 group-hover:-mb-4"
      >
        <span
          className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"
        ></span>
      </span>
      <span
        className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-dk-pry1 rounded-md group-hover:translate-x-0"
      ></span>
      <span
        className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
      >  Sign Up </span>
    </button>
        <Link to={"/login"} className="text-center text-white text-sm my-1">
        Already have an account? <span className="text-white font-medium cursor-pointer">Login</span>
        </Link>
        <p className="text-center text-white text-sm my-1">Or With</p>

        <div className="flex flex-row gap-2">
          <button
      className="relative justify-center mx-auto w-fit flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-pry rounded-md group"
    >
      <span
        className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4"
      >
        <span
          className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"
        ></span>
      </span>
    
      <span
        className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-dk-pry1 rounded-md group-hover:translate-x-0"
      ></span>
         <svg xmlns="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 512 512">
              <path d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456C103.821,274.792,107.225,292.797,113.47,309.408z" style={{ fill: '#FBBB00' }}></path>
              <path d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" style={{ fill: '#518EF8' }}></path>
              <path d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" style={{ fill: '#28B446' }}></path>
              <path d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0C318.115,0,375.068,22.126,419.404,58.936z" style={{ fill: '#F14336' }}></path>
            </svg>
    </button>
          <button
      className="relative justify-center mx-auto w-fit flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-pry rounded-md group"
    >
      <span
        className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4"
      >
        <span
          className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dk-pry1"
        ></span>
      </span>
     
      <span
        className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-dk-pry1 rounded-md group-hover:translate-x-0"
      ></span>
         <svg xmlns="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 22.773 22.773">
              <g>
                <g>
                  <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path>
                  <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path>
                </g>
              </g>
            </svg>
    </button>
    </div>

           </form>
<div className="relative h-[70vh]  rounded-3xl w-[55%] overflow-hidden">
  <div className="absolute inset-0 bg-pry shadow-2xl shadow-pry1">
    <div className="flex animate-continuous-carousel h-full shadow-2xl shadow-pry1 bg-pry p-5 gap-5">
      {/* Original set of images */}
      {[
        'https://img.freepik.com/premium-photo/african-couple-traditional-attire-illustration-generative-ai_899948-6322.jpg',
        'https://img.freepik.com/premium-photo/african-people-celebrating-traditional-event_899948-6321.jpg',
        'https://img.freepik.com/premium-photo/african-woman-wearing-colorful-clothes_899948-6323.jpg',
        'https://img.freepik.com/premium-photo/african-people-traditional-dance-celebration_899948-6324.jpg',
        'https://img.freepik.com/premium-photo/african-people-family-reunion-illustration-generative-ai_899948-6325.jpg',
        'https://img.freepik.com/premium-photo/african-woman-reading-book-afternoon_899948-6326.jpg',
        // Add more images as needed
      ].map((image, index) => (
        <div key={index} className="flex-shrink-0 w-[200px] h-[60vh]">
          <img
            src={image}
            className="w-full h-full rounded-3xl shadow-2xl shadow-gray-900 object-cover"
            alt={`carousel-${index}`}
          />
        </div>
      ))}

      {/* Duplicate set of images for seamless looping */}
      {[
        'https://img.freepik.com/premium-photo/african-couple-traditional-attire-illustration-generative-ai_899948-6322.jpg',
        'https://img.freepik.com/premium-photo/african-people-celebrating-traditional-event_899948-6321.jpg',
        'https://img.freepik.com/premium-photo/african-woman-wearing-colorful-clothes_899948-6323.jpg',
        'https://img.freepik.com/premium-photo/african-people-traditional-dance-celebration_899948-6324.jpg',
        'https://img.freepik.com/premium-photo/african-people-family-reunion-illustration-generative-ai_899948-6325.jpg',
        'https://img.freepik.com/premium-photo/african-woman-reading-book-afternoon_899948-6326.jpg',
        // Add more duplicate images to ensure continuous scrolling
      ].map((image, index) => (
        <div key={`duplicate-${index}`} className="flex-shrink-0 w-[200px] h-[60vh]">
          <img
            src={image}
            className="w-full h-full rounded-3xl shadow-2xl shadow-gray-900 object-cover"
            alt={`carousel-duplicate-${index}`}
          />
        </div>
      ))}
    </div>
  
  </div>

</div>


    </div>
  );
};

export default Signup;
