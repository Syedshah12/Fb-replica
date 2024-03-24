import React from 'react'
import fbLogo from '../assets/Navbar/middle/FbLogo.svg'
import Home from '../assets/Navbar/middle/Home.svg'
import middle2 from '../assets/Navbar/middle/middle2.svg'
import middle3 from '../assets/Navbar/middle/middle3.svg'
import middle4 from '../assets/Navbar/middle/middle4.svg'
import { MdOutlineAccountBalance } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import right1 from '../assets/Navbar/right/right1.svg'
import right2 from '../assets/Navbar/right/right2.svg'
import right3 from '../assets/Navbar/right/right3.svg'
import right4 from '../assets/Navbar/right/right4.svg'

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 bg-white'>
            <div className='flex justify-between p-2 px-3 shadow-sm relative shadow-gray-300'>


                {/* serach and logo */}
                <div className='flex gap-x-2 '>
                    <div className="logo ">
                        <img className='' src={fbLogo} alt="" />
                    </div>
                    <div className="search flex-1 space-x-1">
                        <div className=' w-full p-1 bg-[#F0F2F5] h-full rounded-full flex justify-center items-center'>
                            <CiSearch size={20} />
                            <input className='focus:outline-none py-1 rounded-full bg-[#F0F2F5] px-1 ' placeholder='Search Facebook' type="text" />
                        </div>
                    </div>
                </div>

                {/* middle icons part */}
                <div className='hidden  lg:flex items-center gap-x-20'>
                    <div className='cursor-pointer relative'>
                        <img src={Home} alt="" />
                        <div className='absolute -bottom-4 w-24 -left-8 border-[1.5px] border-blue-800'></div>
                    </div>
                    <div className='cursor-pointer'>
                        <img src={middle2} alt="" srcset="" />
                    </div>
                    <div className='cursor-pointer'>
                        <img src={middle3} alt="" srcset="" />
                    </div>

                    <div className='cursor-pointer'>
                        <img src={middle4} alt="" srcset="" />
                    </div>
                    <div className='cursor-pointer'>
                        <MdOutlineAccountBalance size={30} />
                    </div>



                </div>



                {/* right side */}
                <div className='flex gap-x-4'>
                    <div className='cursor-pointer flex  lg:bg-gray-300 hover:bg-gray-400  rounded-full'>
                        <img className='w-full h-full object-cover' src={right1} alt="" />
                    </div>
                    <div className='cursor-pointer lg:bg-gray-300 hover:bg-gray-400 rounded-full'>
                        <img className='w-full h-full object-cover' src={right2} alt="" />
                    </div>
                    <div className='cursor-pointer lg:bg-gray-300 hover:bg-gray-400  rounded-full'>
                        <img className='w-full h-full object-cover' src={right3} alt="" />
                    </div>
                    <div className='cursor-pointer lg:bg-gray-300 hover:bg-gray-400 rounded-full'>
                        <img className='w-full h-full object-contain' src={right4} alt="" />
                    </div>


                </div>


            </div>



        </div>
    )
}

export default Navbar