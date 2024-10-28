import React, { useEffect, useState } from 'react'
import dropdown from '../assets/res/dropdown.gif'
// import api from '../utils/api'
import { Link, useParams } from 'react-router-dom'

const BookPage = () => {
    document.title= "Reading"
    const { id } = useParams(); // Move this inside the functional component
    const [bookDetails, setBookDetails]= useState({})
    const [notLoggedIn, setNotLoggedIn]= useState(false)
    const [currentChapter, setCurrentChapter]= useState(1)
    const getBookdetails = async (id) => {
        try {
          const response = await api.get(`api/books/${id}`, {
          });
          setBookDetails(response.data)
          console.log(response);
        } catch (error) {
          console.log(error);
          if (error.response.status === 401) {
            setNotLoggedIn(true)
          }
        } 
      };
      useEffect(() => {
        getBookdetails(id)
    
      },[id])

      const nextChapter = () => {
        setCurrentChapter(currentChapter+1)
      }
      const prevChapter = () => {
        setCurrentChapter(currentChapter-1)
      }

      if(notLoggedIn){
          return (

              <div className='w-full h-screen bg-white top-0 z-50 flex items-baseline overflow-hidden absolute'>
                <p className='text-[red] text-3xl font-bold text-center'>You need to be logged in to view this page</p>
                <Link to={'/login'} className=' cursor-pointer'>Login</Link>
            </div>
        )
            }
  return (
    <div className='flex h-[87vh] gap-5'>
        <div className='flex border flex-col gap-4  items-center text-lg text-sec w-[20%]' >
            
        <div class="group  gap-5 relative text-[rgb(10,32,8)] w-full flex flex-col pr-5 ">
        <img className='w-4 self-end' src={dropdown} alt="" />
  <div className="hidden text-black absolute top-[100%] bg-[#CD9564] rounded  group-hover:flex w-full flex-col gap-2 p-2 text-center">
            {
                bookDetails.chapters && bookDetails.chapters.map((chapter, index)=>(
                    <p onClick={()=>setCurrentChapter(index+1)} key={index} className=' cursor-pointer hover:bg-sec rounded hover:text-white py-2'>Chapter {index+1}</p>
                ))
            }
        </div>
       </div>
            <p className='text-2xl'>{bookDetails && bookDetails.title}</p>

       <div className='flex gap-4 flex-col w-full items-center' >
            <div className='w-[60%] text-pry text-[3rem] flex justify-center items-center aspect-square bg-sec rounded-full overflow-hidden'>
                <img className='w-full rounded-full hover:scale-110'
                  src={bookDetails.coverImage && bookDetails.coverImage} alt="Profile"
                  />
            </div>
            <p className='text-xl'>{bookDetails && bookDetails.authorName}</p> 
            </div>
        </div>
        <div className=' px-10 w-[90%]'>
            <div className='flex flex-col w-[65] gap-5 text-lg my-6 pb-5 h-[80%] no-scrollbar overflow-y-scroll'>
            <p className='text-5xl text-sec font-serif font-bold text-center '>Chapter {currentChapter}</p>
            {bookDetails.chapters && <p>{bookDetails.chapters[currentChapter-1]}</p>}
            </div>
        <div className='flex justify-between text-center mt-8 '>
            <div className='w-[15%]'>{
                currentChapter!==1 && <p onClick={prevChapter} className='border  bg-pry text-sec py-1 rounded-full text-sm justify-center align-middle text-center'>Previous Chapter</p>
            }
            </div>
            {
                bookDetails.chapters && currentChapter!==bookDetails.chapters.length && <p onClick={nextChapter} className='border w-[15%] bg-pry text-sec py-1 rounded-full text-sm justify-center align-middle text-center'>Next Chapter</p>
            }
        </div>
        </div>
    </div>
  )
}

export default BookPage