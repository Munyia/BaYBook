import React, { useState, useEffect } from 'react';
import { FaBook, FaPen, FaTruck } from 'react-icons/fa';

const data = {
  username: 'munyia', // Added username property
  profilePicture: 'https://www.w3schools.com/w3images/avatar2.png',
  purchasedBooks: {
    total: 10,
    ebooks: 5,
    hardcovers: 3,
    paperbacks: 2,
  },
  publishedBooks: 15,
  ongoingPurchases: [
    { title: 'React Programming', trackingNumber: '123456' },
    { title: 'Advanced CSS', trackingNumber: '789012' },
  ],
};

const UserProfile = () => {
  const [userData, setUserData] = useState({
    username: '', // Update state to include username
    profilePicture: '',
    purchasedBooks: { total: 0, ebooks: 0, hardcovers: 0, paperbacks: 0 },
    publishedBooks: 0,
    ongoingPurchases: [],
  });

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setUserData(data);
    }, 1000);
  }, []);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevData) => ({
          ...prevData,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-body bg-bg min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl flex gap-10  mx-auto rounded-lg">
        
        {/* Profile Header */}
        <div className="flex flex-col text-center items-center border border-gray-500 p-6 rounded-2xl space-x-4 ">
          <div className="relative w-24 h-24 bg-body rounded-full flex-shrink-0">
            <img 
              src={userData.profilePicture} 
              alt="User Avatar" 
              className="w-full h-full object-cover rounded-full" 
            />
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleProfilePicChange} 
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" 
            />
          </div>
          <h1 className="text-base font-bold "> {userData.username}</h1> {/* Updated to use username */}
          <p className="text-black ">Your account summary and details</p>
        </div>
        
        {/* Dashboard Sections */}
        <div className="grid border border-gray-500  p-5 rounded-3xl grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Purchased Books */}
          <div className="bg-transparent shadow-2xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaBook className="text-but mr-2" />
              Purchased Books
            </h2>
            <div>
              <p>Total: {userData.purchasedBooks.total}</p>
              <details>
                <summary className="cursor-pointer">View Details</summary>
                <ul>
                  <li>Ebooks: {userData.purchasedBooks.ebooks}</li>
                  <li>Hardcovers: {userData.purchasedBooks.hardcovers}</li>
                  <li>Paperbacks: {userData.purchasedBooks.paperbacks}</li>
                </ul>
              </details>
            </div>
          </div>

          {/* Published Books */}
          <div className=" bg-transparent shadow-2xl  p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaPen className="text-but mr-2" />
              Published Books
            </h2>
            <p>Total Published: {userData.publishedBooks}</p>
          </div>

          {/* Ongoing Purchases */}
          <div className=" bg-transparent shadow-2xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaTruck className="text-but mr-2" />
              Ongoing Purchases
            </h2>
            <ul>
              {userData.ongoingPurchases.map((purchase, index) => (
                <li key={index} className="flex justify-between border-b border-gray-500 pb-2">
                  <span>{purchase.title}</span>
                  <span>Tracking: {purchase.trackingNumber}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default UserProfile;
