import React from 'react'
import { GoPlusCircle } from "react-icons/go";
import { IoSend } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";




const Feed = () => {
    return (



        <div className='w-[40%] flex flex-col items-center gap-4 my-4'>

            <div className='w-[95%] h-[120px] bg-white flex justify-between items-center px-5 rounded-lg'>
                <div className='flex justify-center items-center gap-3'>
                    <GoPlusCircle className='text-[32px] text-orange-600' />
                    <span className='text-xl text-gray-400'> Write Something.....</span></div>
                <IoSend className='text-[32px] text-orange-600' />
            </div>

            {/*Post*/}
            <div className='w-[95%] h-[175px] bg-white text-start rounded-lg p-4 flex flex-col gap-4'>

                <div className='flex ml-4 items-center gap-4 '>
                    <h1 className='text-[14px]'>qYhW67@</h1>
                    <div className='flex justify-center items-center'>
                        <GoDotFill className='text-orange-600' />
                        <p className='text-[12px] text-gray-400'> one hour ago</p>
                    </div>
                </div>

                <div className='ml-4'>
                    <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit massa quis orci laoreet aliquam. Donec dictum tempus pharetra. Vestibulum interdum dolor sapien, eget porttitor augue vehicula eu.</p>
                </div>
                <div className=' w-1/2 flex justify-between items-center px-5'>
                    <FaRegHeart className='text-orange-600' />
                    <FaRegComment className='text-orange-600' />
                    <GoShareAndroid className='text-orange-600' />
                </div>
            </div>
            {/*Post*/}
            <div className='w-[95%] h-[175px] bg-white text-start rounded-lg p-4 flex flex-col gap-4'>

                <div className='flex ml-4 items-center gap-4 '>
                    <h1 className='text-[14px]'>qYhW67@</h1>
                    <div className='flex justify-center items-center'>
                        <GoDotFill className='text-orange-600' />
                        <p className='text-[12px] text-gray-400'> one hour ago</p>
                    </div>
                </div>

                <div className='ml-4'>
                    <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit massa quis orci laoreet aliquam. Donec dictum tempus pharetra. Vestibulum interdum dolor sapien, eget porttitor augue vehicula eu.</p>
                </div>
                <div className=' w-1/2 flex justify-between items-center px-5'>
                    <FaRegHeart className='text-orange-600' />
                    <FaRegComment className='text-orange-600' />
                    <GoShareAndroid className='text-orange-600' />
                </div>
            </div>
            {/*Post*/}
            <div className='w-[95%] h-[175px] bg-white text-start rounded-lg p-4 flex flex-col gap-4'>

                <div className='flex ml-4 items-center gap-4 '>
                    <h1 className='text-[14px]'>qYhW67@</h1>
                    <div className='flex justify-center items-center'>
                        <GoDotFill className='text-orange-600' />
                        <p className='text-[12px] text-gray-400'> one hour ago</p>
                    </div>
                </div>

                <div className='ml-4'>
                    <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit massa quis orci laoreet aliquam. Donec dictum tempus pharetra. Vestibulum interdum dolor sapien, eget porttitor augue vehicula eu.</p>
                </div>
                <div className=' w-1/2 flex justify-between items-center px-5'>
                    <FaRegHeart className='text-orange-600' />
                    <FaRegComment className='text-orange-600' />
                    <GoShareAndroid className='text-orange-600' />
                </div>
            </div>

            {/*Post*/}
            <div className='w-[95%] h-[175px] bg-white text-start rounded-lg p-4 flex flex-col gap-4'>

                <div className='flex ml-4 items-center gap-4 '>
                    <h1 className='text-[14px]'>qYhW67@</h1>
                    <div className='flex justify-center items-center'>
                        <GoDotFill className='text-orange-600' />
                        <p className='text-[12px] text-gray-400'> one hour ago</p>
                    </div>
                </div>

                <div className='ml-4'>
                    <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit massa quis orci laoreet aliquam. Donec dictum tempus pharetra. Vestibulum interdum dolor sapien, eget porttitor augue vehicula eu.</p>
                </div>
                <div className=' w-1/2 flex justify-between items-center px-5'>
                    <FaRegHeart className='text-orange-600' />
                    <FaRegComment className='text-orange-600' />
                    <GoShareAndroid className='text-orange-600' />
                </div>
            </div>


        </div>
    )
}

export default Feed
