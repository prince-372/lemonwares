import React from 'react'
import { Element, Smallelement, Verysmallelement, Whatsapp } from './Icons'

const Websites = () => {
  return (
    <div id='contact'  className='max-w-[1220px] mx-auto px-3 bg-[#F7FAFE] rounded-2xl mb-10 sm:mb-[110px] relative overflow-x-clip'>
      <div data-aos="flip-left" className='   px-5 sm:px-12 lg:pl-[118px] lg:pr-[90px]'>
        <h2 className=' text-2xl sm:text-3xl md:text-5xl lg:text-[64px] leading-6 md:leading-[44px] lg:leading-[88px] font-[Poppins] pt-5 sm:pt-10 md:pt-14 lg:pt-20 font-semibold text-center mx-auto max-w-[1024px]'>We're here to make your website awesome.</h2>
        <div className="flex justify-center pt-10 pb-5 md:pb-10 lg:pb-[88px] font-[Poppins] leading-6 text-sm font-normal">
          <a href='whatsapp://send?phone=+9193473848' className='py-3 px-4 text-white bg-[#B00000] flex rounded-lg relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 hover:bg-transparent hover:text-black border group border-transparent hover:border-black after:bg-transparent after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700'><span className=' mr-2'><Whatsapp/></span> Get  in touch with us</a></div>
      </div>
      <div className=' absolute bottom-[4%] right-0 sm:right-[-1%]'><Element/></div>
      <div className=' absolute bottom-[15%] left-[-1.5%]'><Smallelement/></div>
      <div className=' absolute top-[1%] left-[27%] hidden sm:block'><Verysmallelement/></div>
    </div>
  )
}

export default Websites
