import React from 'react'
import Navbar from '../Components/Navbar'
import side1 from '../assets/leftSidebar/first/side1.svg'
import side2 from '../assets/leftSidebar/first/side2.svg'
import side3 from '../assets/leftSidebar/first/side3.svg'
import side4 from '../assets/leftSidebar/first/side4.svg'
import side5 from '../assets/leftSidebar/first/side5.svg'
import side6 from '../assets/leftSidebar/first/side6.svg'
import side7 from '../assets/leftSidebar/first/side7.svg'
import sideE1 from '../assets/leftSidebar/second/side1.svg'
import { CiSearch } from "react-icons/ci";
import sideE2 from '../assets/leftSidebar/second/side2.svg'
import { GoKebabHorizontal } from "react-icons/go";
import reel2 from '../assets/middle/reel/reel2.svg'
import reel3 from '../assets/middle/reel/reel3.svg'
import star from '../assets/middle/reel/star.svg'
import right4 from '../assets/Navbar/right/right4.svg'
import i1 from '../assets/middle/post/i1.svg'
import i2 from '../assets/middle/post/i2.svg'
import i3 from '../assets/middle/post/i3.svg'
import p1 from '../assets/middle/post2/p1.svg'
import p2 from '../assets/middle/post2/p2.svg'
import image from '../assets/middle/post2/image.svg'
import icc from '../assets/rightbar/icc.svg'
import speaker from '../assets/rightbar/speaker.svg'
import cake from '../assets/rightbar/cake.svg'
import chat1 from '../assets/rightbar/chat1.svg'
import chat2 from '../assets/rightbar/chat2.svg'
import chat3 from '../assets/rightbar/chat3.svg'
import chat5 from '../assets/rightbar/chat5.svg'
import chat6 from '../assets/rightbar/chat6.svg'



const Home = () => {
    return (
        <>
            <div className='flex flex-col'>

                <Navbar />


                <div className='flex w-full '>


                    {/* left side-bar */}
                    <div className='hidden scrollbar-hide cursor-pointer hover:scrollbar lg:block left-sidebar fixed top-[64px] left-0 overflow-y-auto h-screen bg-gray-100 drop-shadow-md w-[25%] 2xl:w-[20%] '>

                        <div className="flex flex-col p-2 2xl:p-6 ">


                            {/* col-item */}
                            <div className='flex items-center h-16 p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={side1} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Virat Kohli</h1>
                                </div>
                            </div>

                            {/* col-item */}
                            <div className='flex items-center h-12  p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={side2} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Friends</h1>
                                </div>
                            </div>




                            {/* col-item */}
                            <div className='flex items-center h-12  p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={side3} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Marketplace</h1>
                                </div>
                            </div>






                            {/* col-item */}
                            <div className='flex items-center h-12  p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={side2} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Friends</h1>
                                </div>
                            </div>




                            {/* col-item */}
                            <div className='flex items-center h-12  p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={side3} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Marketplace</h1>
                                </div>
                            </div>




                            {/* col-item */}
                            <div className='flex items-center h-12  p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={side4} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Most Recent</h1>
                                </div>
                            </div>



                            {/* col-item */}
                            <div className='flex items-center h-12  p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={side5} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Groups</h1>
                                </div>
                            </div>



                            {/* col-item */}
                            <div className='flex items-center h-12  p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={side6} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Watch</h1>
                                </div>
                            </div>



                            {/* col-item */}
                            <div className='flex items-center h-12  p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={side7} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>See More</h1>
                                </div>
                            </div>


                            {/* col-item */}
                            <div className='flex items-center h-12  p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={side3} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Marketplace</h1>
                                </div>
                            </div>




                            {/* col-item */}
                            <div className='flex items-center h-12  p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={side4} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Most Recent</h1>
                                </div>
                            </div>



                            {/* col-item */}
                            <div className='flex items-center h-12  p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={side5} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Groups</h1>
                                </div>
                            </div>



                            {/* col-item */}
                            <div className='flex items-center h-12  p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={side6} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Watch</h1>
                                </div>
                            </div>



                            {/* col-item */}
                            <div className='flex items-center h-12  p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={side7} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>See More</h1>
                                </div>
                            </div>









                        </div>

                        <div className='flex flex-col p-2 2xl:p-6'>


                            {/* col-item */}
                            <div className='flex items-center h-16 p-1 gap-x-3' >
                                <h1 className='text-black/60 text-2xl font-semibold ml-2'>Your Shortcuts</h1>
                            </div>



                            {/* col-item */}
                            <div className='flex items-center h-16 p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={sideE1} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Virat Kohli</h1>
                                </div>
                            </div>




                            {/* col-item */}
                            <div className='flex items-center h-16 p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={sideE2} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Virat Kohli</h1>
                                </div>
                            </div>

                            {/* col-item */}
                            <div className='flex items-center h-16 p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={sideE1} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Virat Kohli</h1>
                                </div>
                            </div>




                            {/* col-item */}
                            <div className='flex items-center h-16 p-1 gap-x-3' >
                                {/* logo */}
                                <div className="logo">
                                    <img src={sideE2} alt="" />
                                </div>
                                {/* text */}
                                <div>
                                    <h1 className='text-xl 2xl:text-2xl font-semibold leading-tight'>Virat Kohli</h1>
                                </div>
                            </div>





                        </div>


                    </div>


                    {/* midlle section */}
                    <div className=' middle-section 2xl:ml-[20%] lg:ml-[25%] w-full mx-auto lg:mx-0 lg:w-[50%] 2xl:w-[60%] h-screen bg-white '>
                        <div className="flex flex-col  ">


                            {/* //reels container */}
                            <div className="reels grid grid-cols-3 gap-x-2 p-4">

                                <div className="card relative p-1 rounded-lg drop-shadow-md cursor-pointer">
                                    <div>
                                        <img className='w-full h-full object-cover' src={reel2} alt="" />
                                    </div>

                                    <div className='absolute bottom-0 w-full right-0 flex flex-col p-1 rounded-b-lg '>
                                        <img className='w-16 h-full relative left-[68px] object-cover' src={star} alt="" />
                                        <div className=' bg-white rounded-b-lg backdrop-blur-sm h-12 w-full'>
                                            <div className='w-full h-full flex justify-center items-center font-semibold text-sm'><h1 className='text-center'>Create Story</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="card relative p-1 drop-shadow-md cursor-pointer">
                                    <div>
                                        <img className='w-full h-full object-cover' src={reel2} alt="" />
                                    </div>
                                </div>


                                <div className="card relative p-1 drop-shadow-md cursor-pointer">
                                    <div>
                                        <img className='w-full h-full object-cover' src={reel3} alt="" />
                                    </div>
                                </div>



                            </div>



                            {/* post */}
                            <div className='flex w-full flex-col p-2 border-[1px] border-black/20 drop-shadow-md
 mt-2'>

                                <div className='flex w-full justify-center px-6 gap-x-8 p-4'>
                                    {/* logo */}
                                    <div className="logo">
                                        <img src={right4} alt="" />
                                    </div>

                                    {/* search */}
                                    <div className='bg-gray-300  rounded-full flex-1 px-4 flex items-center'>
                                        <input className='focus:outline-none px-4 py-0.5 bg-gray-300 w-full' placeholder='Whats on your mind,Kohli?' type="text" />
                                    </div>

                                </div>
                                <div className='flex justify-evenly p-2'>

                                    <div className='flex items-center gap-x-2'>
                                        <div><img src={i2} alt="" /></div>
                                        <div className='text-sm text-black'>Live video</div>
                                    </div>



                                    <div className='flex items-center gap-x-2'>
                                        <div><img src={i3} alt="" /></div>
                                        <div className='text-sm text-black'>Feeling/activity</div>
                                    </div>



                                    <div className='flex items-center gap-x-2'>
                                        <div><img src={i1} alt="" /></div>
                                        <div className='text-sm text-black'>Photo/Video</div>
                                    </div>


                                </div>


                            </div>



                            {/* post 2 */}
                            <div className=' border-[1px] mt-4 border-black/20 drop-shadow-md' >


                                <div className='p-4'>
                                    <div className='flex gap-x-2'>
                                        <div><img className='w-full h-full object-contain' src={p1} alt="" /></div>
                                        <div className='flex flex-col'>
                                            <h1 className='font-semibold'>Indian Cricket Team</h1>
                                            <div className='flex'><p className='text-sm font-semibold'>5h</p><img className='' src={p2} alt="" /></div>
                                        </div>
                                    </div>

                                    <div className='mt-2'><p className='text-sm leading-tight text-black/70'>India has been touring Australia since 1947, but all that changed after winning the first and third Tests in Adelaide and Melbourne, respectively.</p></div>
                                </div>

                                <div className=''>
                                    <img className='w-full h-full object-cover' src={image} alt="" />
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* left side-bar */}
                    <div className='hidden scrollbar-hide cursor-pointer hover:scrollbar 2xl:w-[20%]  lg:block right-sidebar fixed top-[64px] right-0 overflow-y-auto h-screen bg-gray-100 drop-shadow-md w-[25%] '>

                        <div className="flex flex-col p-2 ">


                            <div className='flex flex-col p-4 gap-y-2 drop-shadow-md border-[0.5px] border-black/10' >
                                <div><h1 className='ml-2'>Your Pages And Profiles</h1></div>
                                <div className='flex justify-between '>
                                    <div className='flex gap-x-2'>
                                        <div><img src={icc} alt="" /></div>
                                        <div className="flex flex-col">
                                            <h1 className='text-xl font-semibold'>ICC Officials</h1>
                                            <p className='text-xs leading-tight'>@icc official</p>
                                        </div>
                                    </div>
                                    <div><img src={speaker} alt="" /></div>
                                </div>
                            </div>




                            <div className='flex flex-col mt-4 p-4 gap-y-2 drop-shadow-lg border-[0.5px] border-black/10' >
                                <div><h1 className='ml-2'>Birthdays</h1></div>
                                <div className='flex justify-between '>
                                    <div className='flex gap-x-2 items-center'>
                                        <div><img src={cake} alt="" /></div>
                                        <p className='text-sm leading-tight w-[60%]'>Anushka and 2 others have birthdays today.</p>
                                    </div>

                                </div>
                            </div>



                            <div className='flex flex-col drop-shadow-lg border-[0.5px] border-black/10 p-2'>
                                {/* contact head */}
                                <div className='flex items-center justify-between'>
                                    <div><h1 className='text-xl font-semibold'>Contacts</h1></div>
                                    <div className='flex justify-center items-center'>
                                        <div><CiSearch size={25} /></div>
                                        <div><GoKebabHorizontal size={25} /></div>
                                    </div>

                                </div>


                                <div className='flex flex-col p-3 gap-y-4 '>


                                    <div className='flex items-center gap-x-2 drop-shadow-md'>
                                        <div><img src={chat2} alt="" /></div>
                                        <div className='text-lg font-semibold'>Anushka Sharma</div>
                                    </div>


                                    <div className='flex  items-center gap-x-2 drop-shadow-md'>
                                        <div><img src={chat3} alt="" /></div>
                                        <div className='text-lg font-semibold'>KL Rahul</div>
                                    </div>


                                    <div className='flex items-center gap-x-2 drop-shadow-md'>
                                        <div><img src={chat5} alt="" /></div>
                                        <div className='text-lg font-semibold'>Shubman Gill</div>
                                    </div>



                                    <div className='flex items-center gap-x-2 drop-shadow-md'>
                                        <div><img src={chat6} alt="" /></div>
                                        <div className='text-lg font-semibold'>MS Dhoni</div>
                                    </div>

                                    <div className='flex items-center gap-x-2 drop-shadow-md'>
                                        <div><img src={chat1} alt="" /></div>
                                        <div className='text-lg font-semibold'>ICC officials</div>
                                    </div>


                                    <div className='flex items-center gap-x-2 drop-shadow-md'>
                                        <div><img src={chat2} alt="" /></div>
                                        <div className='text-lg font-semibold'>Anushka Sharma</div>
                                    </div>


                                    <div className='flex  items-center gap-x-2 drop-shadow-md'>
                                        <div><img src={chat3} alt="" /></div>
                                        <div className='text-lg font-semibold'>KL Rahul</div>
                                    </div>


                                    <div className='flex items-center gap-x-2 drop-shadow-md'>
                                        <div><img src={chat5} alt="" /></div>
                                        <div className='text-lg font-semibold'>Shubman Gill</div>
                                    </div>



                                    <div className='flex items-center gap-x-2 drop-shadow-md'>
                                        <div><img src={chat6} alt="" /></div>
                                        <div className='text-lg font-semibold'>MS Dhoni</div>
                                    </div>

                                    <div className='flex items-center gap-x-2 drop-shadow-md'>
                                        <div><img src={chat1} alt="" /></div>
                                        <div className='text-lg font-semibold'>ICC officials</div>
                                    </div>





                                </div>

                            </div>












                        </div>

                        <div className='flex flex-col p-2'>








                        </div>


                    </div>






                </div>



            </div>

        </>
    )
}

export default Home