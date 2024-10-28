import React, { useState, useEffect } from 'react';
import { FaBook, FaPen, FaTruck, FaDollarSign } from 'react-icons/fa';

const data = {
  username: 'munyia',
  profilePicture: 'https://www.w3schools.com/w3images/avatar2.png',
  purchasedBooks: {
    total: 10,
    ebooks: 5,
    hardcovers: 3,
    paperbacks: 2,
  },
  publishedBooks: {
    total: 15,
    books: ['Book One', 'Book Two', 'Book Three'],
    revenue: 300, // Example revenue in USD
  },
  ongoingPurchases: [
    { title: 'React Programming', trackingNumber: '123456' },
    { title: 'Advanced CSS', trackingNumber: '789012' },
  ],
  vouchers: 50, // Added total voucher amount
  currency: 'USD', // User's currency
  conversionRate: 0.85, // Example conversion rate to user’s currency
};

const UserProfile = () => {
  const [userData, setUserData] = useState({
    username: '',
    profilePicture: '',
    purchasedBooks: { total: 0, ebooks: 0, hardcovers: 0, paperbacks: 0 },
    publishedBooks: { total: 0, books: [], revenue: 0 },
    ongoingPurchases: [],
    currency: '',
    conversionRate: 1,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setUserData(data);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup timeout on unmount
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

  const convertRevenue = (amount, rate) => {
    return (amount * rate).toFixed(2);
  };

  return (
    <div className="bg-body bg-bg min-h-screen px-4 sm:px-6 lg:px-8">
      <p className='font-bold text-2xl mx-auto py-5 justify-center text-center font-play'>Profile</p>
      <div className="max-w-5xl flex flex-col md:flex-row gap-10 mx-auto rounded-lg">
        
        {/* Profile Header */}
        <div className="flex flex-col text-center items-center shadow-2xl shadow-slate-900 p-6 rounded-2xl space-x-4 w-full md:w-1/3">
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
          <h1 className="text-base font-bold font-mont">{userData.username}</h1>
          <p className="text-black">Your account summary and details</p>
        </div>
        
        {/* Dashboard Sections */}
        <div className="grid shadow-2xl shadow-slate-900 p-5 rounded-3xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          
          {/* Purchased Books */}
          <div className="bg-transparent shadow-2xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center font-mont">
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
          <div className="bg-transparent shadow-2xl shadow-slate-900  p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center font-mont">
              <FaPen className="text-but mr-2" />
              Published Books
            </h2>
            <p>Total Published: {userData.publishedBooks.total}</p>
            <details>
              <summary className="cursor-pointer">View Book Names</summary>
              <ul>
                {userData.publishedBooks.books.map((book, index) => (
                  <li key={index}>{book}</li>
                ))}
              </ul>
            </details>
          </div>

          {/* Ongoing Purchases */}
          <div className="bg-transparent shadow-2xl shadow-slate-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center font-mont">
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

      <div className='flex items-center pb-10 gap-5 mx-auto w-[80%]'>
        {/* Revenue Section */}
        <div className="grid shadow-2xl shadow-slate-900 p-5 rounded-3xl grid-cols-1 md:grid-cols-1 gap-6 mt-6 w-full">
          <div className="bg-transparent shadow-2xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center font-mont">
              <FaDollarSign className="text-but mr-2" />
              Revenue
            </h2>
            <p>
              Revenue: {convertRevenue(userData.publishedBooks.revenue, userData.conversionRate)} {userData.currency}
            </p>
          </div>
        </div>

        {/* Vouchers Section */}
        <div className="grid   shadow-2xl shadow-slate-900 p-5 rounded-3xl grid-cols-1 md:grid-cols-1 gap-6 mt-6 w-full">
          <div className="bg-transparent shadow-2xl p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center font-mont">
              <FaDollarSign className="text-but mr-2" />
              Vouchers
            </h2>
            <p>Total Vouchers: {userData.vouchers} {userData.currency}</p> {/* Display total vouchers */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
