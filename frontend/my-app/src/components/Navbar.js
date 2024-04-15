import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { CgLoadbarSound } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";



const Navbar = () => {
  return (
    <div className='navbar flex w-screen h-[75px] justify-around items-center' >
      <div className='text-2xl font-bold  text-orange-600'>Campus Connect</div>

      <div className='flex gap-8 justify-center items-center' >
        <div className='flex justify-center items-center gap-1'><AiFillHome className='text-[24px]  text-orange-600' /><span>Home</span></div>
        <div className='flex justify-center items-center gap-1'><FaBook className='text-[24px]  text-orange-600'/><span>Resources</span></div>
        <div className='flex justify-center items-center gap-1'><MdOutlineReviews className='text-[24px]  text-orange-600'/><span>Review</span></div>
        <div className='flex justify-center items-center gap-1'><CgLoadbarSound className='text-[32px]  text-orange-600'/><span>Polls</span></div>
      </div>

      <div className='flex items-center gap-2  bg-zinc-100 w-[360px] h-[32px] rounded-full px-4 py-5'>
        <div className='ml-2 search_png'><IoIosSearch className='text-[18px]  text-orange-600'/></div>
        <input className=' bg-zinc-100 w-full h-full rounded-lg p-4 outline-none text-lg' type='text' placeholder='Search'></input>
      </div>
      
      <div className='flex items-center gap-6'>
      <BsBell className='text-[24px]  text-orange-600'/>
      <GoPerson className='text-[24px]  text-orange-600'/>
      <BsThreeDotsVertical className='text-[24px]  text-orange-600'/>
      </div >
      

    </div>
  )
}

export default Navbar
