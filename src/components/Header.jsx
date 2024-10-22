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

  // Close search input and dropdown when clicking outside
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
    <div className='text-white sticky top-0 z-50  animate-bg-transition gap-5 flex w-full h-[13vh] bg- justify-between items-center' id='Navbar'>
    <div className='flex justify-between items-center w-full max-w-screen-xl mx-auto px-10'>
      <div className='w-[30%] flex justify-between'>
        <Link to={"/"} className='flex items-center hover:text-xl'>
          <FontAwesomeIcon icon={faHome} className='text-lg' />
        </Link>
        <Link to={"/books"} className='flex items-center hover:text-xl'>
          <FontAwesomeIcon icon={faBook} className='text-lg' />
        </Link>
        <Link to={"/community"} className='flex items-center hover:text-xl'>
          <FontAwesomeIcon icon={faUsers} className='text-lg' />
        </Link>
      
        <Link to={"/publish"} className='flex items-center hover:text-xl'>
          <FontAwesomeIcon icon={faPen} className='text-lg' />
        </Link>
        <Link to={"/wittypage"} className='flex items-center hover:text-xl'>
          <FontAwesomeIcon icon={faPaintBrush} className='text-lg' />
        </Link>
  
        </div>
        <div className='w-[20%] flex justify-between'>    
        <div className="relative" ref={searchRef}>
    <button onClick={() => setShowSearch(!showSearch)} className="flex items-center">
      <FontAwesomeIcon icon={faSearch} className='text-lg' />
    </button>
    {showSearch && (
      <form onSubmit={handleSubmit} className="absolute left-0 mt-2">
        <input
          type="text"
          autoComplete="off"
          value={searchContent}
          onChange={(e) => setSearchContent(e.target.value)}
          className="border-none outline-none rounded-2xl p-4 bg-white text-black"
          placeholder="Search by author, title, year..."
        />
      </form>
    )}
  </div>
        <Link to={"/login"} className='flex items-center hover:text-xl'>
          <FontAwesomeIcon icon={faUser} className='text-lg' />
        </Link>
        <Link to={"/cart"} className='flex items-center hover:text-xl'>
          <FontAwesomeIcon icon={faShoppingCart} className='text-lg' />
        </Link>
        </div>
      </div>
 </div>
  )
}

export default Header