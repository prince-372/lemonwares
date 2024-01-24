import React, { useState } from 'react'
import main from '../assets/image/main-img.webp'

const Hero = () => {
  // tabs
  const [data, setdata] = useState("tab1")
  function tabs(tab) {
      setdata(tab);}  
  return (
    <div className=' max-w-[1200px] px-3 mx-auto pt-5 sm:pt-20'>
        <div className=' grid lg:grid-cols-2 gap-6 sm:gap-20 flex-col justify-center items-center'>
            <div className=' '>
              <div className='flex gap-4 relative'>
                <span className=' border-bottom-1'></span>
                <p onClick={() => tabs('tab1')} className={`${data === "tab1" && " !text-[#b00000] relative before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:bottom-[-10%] before:ease-linear before:w-[77%] before:left-[6px]"} text-[15px] font-semibold font-[Poppins] text-[#dbd9d9] tracking-normal cursor-pointer`}>Hosting</p>
                <p onClick={() => tabs('tab2')} className={`${data === "tab2" && " !text-[#b00000] relative before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:bottom-[-10%] before:ease-linear before:w-[77%] before:left-[6px]"} text-[15px] font-semibold font-[Poppins] text-[#dbd9d9] tracking-normal cursor-pointer`}>Domain</p>
                <p onClick={() => tabs('tab3')} className={`${data === "tab3" && " !text-[#b00000] relative before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:bottom-[-10%] before:ease-linear before:w-[77%] before:left-[6px]"} text-[15px] font-semibold font-[Poppins] text-[#dbd9d9] tracking-normal cursor-pointer`}>SEO </p>
                <p onClick={() => tabs('tab4')} className={`${data === "tab4" && " !text-[#b00000] relative before:h-[2px] before:rounded-[10px] before:bg-[#B00000] before:absolute before:bottom-[-10%] before:ease-linear before:w-[77%] before:left-[6px]"} text-[15px] font-semibold font-[Poppins] text-[#dbd9d9] tracking-normal cursor-pointer`}>Email</p>
              </div>
              {data === "tab1" &&<div className=' pt-2 sm:pt-7'>
                <h2 className='text-[29px] sm:text-[64px] font-bold font-[Poppins] leading-[35px] sm:leading-[77px] text-[#2E2E2E] max-w-[608px]'>Premium Web Hosting for Your Website</h2>
                <p className=' text-base font-normal leading-7 font-[Inter] text-[#808080] max-w-[448px] pt-4 sm:pt-8 tracking-[0.8px]'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                <div className=' pt-7 sm:pt-14 flex gap-6'>
                  <button className=' shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] font-normal sm:text-sm text-[12px]  leading-6 font-[Poppins] hover:text-black border hover:border-[#000] border-transparent hover:border  sm:p-3 p-2 rounded-lg relative hover:bg-white   after:-z-20 after:absolute after:h-1 after:w-1  bg-[#b00000] after:bg-[#fff] text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Create an Account</button>
                  <button className=' font-normal hover: sm:text-sm text-[12px]  leading-6 font-[Poppins] text-black border border-[#000] hover:border-transparent hover:border  sm:p-3 p-2 rounded-lg relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Choose your plan</button>
                </div>
                </div>}
              {data === "tab2" &&<div className=' pt-2 sm:pt-7'>
                <h2 className='text-[29px] sm:text-[64px] font-bold font-[Poppins] leading-[35px] sm:leading-[77px] text-[#2E2E2E] max-w-[608px]'>Premium Web Domain for Your Website</h2>
                <p className=' text-base font-normal leading-7 font-[Inter] text-[#808080] max-w-[448px] pt-4 sm:pt-8 tracking-[0.8px]'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                <div className=' pt-7 sm:pt-14 flex gap-6'>
                  <button className=' shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] font-normal sm:text-sm text-[12px]  leading-6 font-[Poppins] hover:text-black border hover:border-[#000] border-transparent hover:border  sm:p-3 p-2 rounded-lg relative hover:bg-white   after:-z-20 after:absolute after:h-1 after:w-1  bg-[#b00000] after:bg-[#fff] text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Create an Account</button>
                  <button className=' font-normal hover: sm:text-sm text-[12px]  leading-6 font-[Poppins] text-black border border-[#000] hover:border-transparent hover:border  sm:p-3 p-2 rounded-lg relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Choose your plan</button>
                </div>
                </div>}
              {data === "tab3" &&<div className=' pt-2 sm:pt-7'>
                <h2 className='text-[29px] sm:text-[64px] font-bold font-[Poppins] leading-[35px] sm:leading-[77px] text-[#2E2E2E] max-w-[608px]'>Premium Web SEO for Your Website</h2>
                <p className=' text-base font-normal leading-7 font-[Inter] text-[#808080] max-w-[448px] pt-4 sm:pt-8 tracking-[0.8px]'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                <div className=' pt-7 sm:pt-14 flex gap-6'>
                  <button className=' shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] font-normal sm:text-sm text-[12px]  leading-6 font-[Poppins] hover:text-black border hover:border-[#000] border-transparent hover:border  sm:p-3 p-2 rounded-lg relative hover:bg-white   after:-z-20 after:absolute after:h-1 after:w-1  bg-[#b00000] after:bg-[#fff] text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Create an Account</button>
                  <button className=' font-normal hover: sm:text-sm text-[12px]  leading-6 font-[Poppins] text-black border border-[#000] hover:border-transparent hover:border  sm:p-3 p-2 rounded-lg relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Choose your plan</button>
                </div>
                </div>}
              {data === "tab4" &&<div className=' pt-2 sm:pt-7'>
                <h2 className='text-[29px] sm:text-[64px] font-bold font-[Poppins] leading-[35px] sm:leading-[77px] text-[#2E2E2E] max-w-[608px]'>Premium Web Email for Your Website</h2>
                <p className=' text-base font-normal leading-7 font-[Inter] text-[#808080] max-w-[448px] pt-4 sm:pt-8 tracking-[0.8px]'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                <div className=' pt-7 sm:pt-14 flex gap-6'>
                  <button className=' shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] font-normal sm:text-sm text-[12px]  leading-6 font-[Poppins] hover:text-black border hover:border-[#000] border-transparent hover:border  sm:p-3 p-2 rounded-lg relative hover:bg-white   after:-z-20 after:absolute after:h-1 after:w-1  bg-[#b00000] after:bg-[#fff] text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Create an Account</button>
                  <button className=' font-normal hover: sm:text-sm text-[12px]  leading-6 font-[Poppins] text-black border border-[#000] hover:border-transparent hover:border  sm:p-3 p-2 rounded-lg relative  after:-z-20 after:absolute after:h-1 after:w-1  after:bg-[#b00000]  hover:text-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 '>Choose your plan</button>
                </div>
                </div>}
            </div>
            <div>
              <img src={main} alt="main" />
            </div>
        </div>

    </div>  
  )
}

export default Hero