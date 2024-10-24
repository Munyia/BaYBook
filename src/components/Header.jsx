import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUser, faBell, faUsers, faPen, faShoppingCart, faSearch, faCaretDown, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const [searchContent, setSearchContent] = useState('');
  const [userdata, setUserdata] = useState();
  const [showSearch, setShowSearch] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const searchRef = useRef(null);
  const categoriesRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/books/${searchContent}`);
  };

  const getInitials = (firstname, lastname) => {
    return `${firstname[0]}${lastname[0]}`;
  };

  const getUserdetails = async () => {
    try {
      const response = await api.get("api/users/profile", { withCredentials: true });
      setUserdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserdetails();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
      if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
        setShowCategories(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='animate-bg-transition text-white sticky top-0 z-50 gap-5 flex w-full h-[13vh] justify-between items-center px-5 sm:px-10' id='Navbar'>
      <div className='w-full flex justify-between items-center max-w-screen-xl mx-auto'>
        {/* Left side links */}
        <div className='w-[40%] sm:w-[30%] flex justify-between'>
          <Link to={"/"} className='flex items-center hover:text-xl'>
            <FontAwesomeIcon icon={faHome} className='text-lg' />
          </Link>
          <Link to={"/books"} className='flex items-center hover:text-xl'>
            <FontAwesomeIcon icon={faBook} className='text-lg' />
          </Link>
          {/* Other links are hidden on mobile */}
          {!isOpen && (
            <>
              <Link to={"/publish"} className='flex items-center hover:text-xl'>
                <FontAwesomeIcon icon={faPen} className='text-lg' />
              </Link>
              <Link to={"/wittypage"} className='flex items-center hover:text-xl'>
                <FontAwesomeIcon icon={faPaintBrush} className='text-lg' />
              </Link>
            </>
          )}
        </div>

        {/* Search and right side icons */}
        <div className='flex w-[50%] sm:w-[20%] justify-between items-center'>
          {/* Search functionality */}
          <div className="relative" ref={searchRef}>
            <button onClick={() => setShowSearch(!showSearch)} className="flex items-center">
              <FontAwesomeIcon icon={faSearch} className='text-lg' />
            </button>
            {showSearch && (
              <form onSubmit={handleSubmit} className="absolute left-0 mt-2 w-[200px] sm:w-[250px]">
                <input
                  type="text"
                  autoComplete="off"
                  value={searchContent}
                  onChange={(e) => setSearchContent(e.target.value)}
                  className="border-none outline-none rounded-lg p-2 bg-white text-black w-full"
                  placeholder="Search by author, title..."
                />
              </form>
            )}
          </div>

          {/* Right side icons */}
          {!isOpen && (
            <>
              <Link to={"/user"} className='flex items-center hover:text-xl'>
                <FontAwesomeIcon icon={faUser} className='text-lg' />
              </Link>
              <Link to={"/community"} className='flex items-center hover:text-xl'>
                <FontAwesomeIcon icon={faUsers} className='text-lg' />
              </Link>
              <Link to={"/cart"} className='flex items-center hover:text-xl'>
                <FontAwesomeIcon icon={faShoppingCart} className='text-lg' />
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Hamburger menu for smaller screens */}
      <div className='sm:hidden flex items-center'>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='absolute top-[13vh] left-0 w-full animate-bg-transition flex flex-col items-center py-4 space-y-2 sm:hidden'>
          <Link to={"/"} className='hover:text-xl'>
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link to={"/books"} className='hover:text-xl'>
            <FontAwesomeIcon icon={faBook} /> Books
          </Link>
          <Link to={"/user"} className='hover:text-xl'>
            <FontAwesomeIcon icon={faUser} /> Profile
          </Link>
          {/* Remove other links from mobile menu */}
        </div>
      )}
    </div>
  );
};

export default Header;
