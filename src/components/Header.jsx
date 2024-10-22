import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Spin as Hamburger } from 'hamburger-react'

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const Navigate = useNavigate()
  const [searchContent, setSearchContent] = useState('')
  const [isLoggedIn, setisLoggedIn] = useState(true)
  const [userdata, setUserdata] = useState()
  const handleSubmit= (e) =>{
        Navigate(`/books/${searchContent}`)
  }
  
const getInitials = (firstname, lastname) => {
  return `${firstname[0]}${lastname[0]}`;
};
  const getUserdetails = async () => {
    try {
      const response = await api.get("api/users/profile", {
        withCredentials:true,
      });
      setUserdata(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    } 
  };
  useEffect(() => {
    getUserdetails()

  },[])
  // const logout= async () =>{
  //   try {
  //     console.log("loging out");
  //     const response = await api.post('api/users/logout');
  //     console.log(response);
  //     Navigate('/login')
  //   } catch (error) {
  //     console.log(error);
  //   } 
  // }

  return (
    <div className='text-white sticky top-0 z-50  animate-bg-transition gap-5 flex w-full h-[13vh] bg- justify-between items-center' id='Navbar'>
    <div className='flex justify-around text-white text-center items-center gap-5 content-center h-full  w-[35%]'>
       <Link to={"/about"} className='flex hover:underline text-lg hover:text-xl w-20'>About</Link>
       <Link to={"/books"}  className='flex hover:underline text-lg hover:text-xl w-20'>Books</Link>
       <div className="group relative w-[10vw] flex justify-evenly pr-5 cursor-pointer">
 <Link to="/categories" className="flex items-center hover:underline text-lg hover:text-xl text-sec">Categories</Link>

</div>

    </div>
    <form onSubmit={handleSubmit}>
    <input type="text" autoComplete="off" name="text" value={searchContent} onChange={(e)=>setSearchContent(e.target.value)} className="border-none outline-none rounded-2xl p-4 bg-white transition duration-300 ease-in-out h-[8vh] shadow-[inset_2px_5px_10px_grey] focus:shadow-[inset_1px_1px_10px_grey] focus:scale-[1.05] text-black" placeholder="Search by Author, Title, Genre,..."/>
    </form>
    <div className='w-[35%] flex justify-end'>

     {  userdata? <div className='relative'>
       <Hamburger toggled={isOpen} toggle={setOpen}/>
       {

       isOpen &&
       <div className="absolute top-full right-0 flex flex-col w-[300%] rounded-3xl  bg-pry px-1 gap-4 pb-2 z-[99]">
         <div className='flex items-center pl-2 gap-2'>
         <span className=' bg-gray-300 rounded-full aspect-square w-[30%] flex items-center justify-center'>{userdata && getInitials(userdata.firstname, userdata.lastname)}</span>
         <span to={"/login"} className="button3 ">{userdata && userdata.firstname + " " + userdata.lastname}</span>
         
         </div>
         <Link to={'/userprofile'} onClick={()=>setOpen(false)} className="hover:bg-sec bg-opacity-0 cursor-pointer rounded p-1 text-center">Profile</Link>
         <Link to={'/textarea'} onClick={()=>setOpen(false)} className="hover:bg-sec bg-opacity-0 cursor-pointer rounded p-1 text-center">Add Book</Link>
         <p onClick={logout}  className="hover:bg-sec rounded p-1 cursor-pointer text-center">Logout</p>
       </div>
       }
       </div>:
    <div className=' flex text-whit]'>

       <Link to={"/login"}  className='flex hover:underline text-lg hover:text-xl w-20'>Login</Link>
     <div className="group  gap-5 relative w-[10vw] text-whit  flex justify-evenly pr-5 cursor-pointer">
     <Link  className='flex hover:underline text-lg hover:text-xl '>Publish</Link>
    </div>
</div>
}
</div>





 </div>
  )
}

export default Header