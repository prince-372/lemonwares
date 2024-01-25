import React from 'react'
import footerlogo from '../assets/image/footer-img.webp'
import { Love } from './Icons'
const Footer = () => {
    return (
        <div className='bg-[#B00000]'>
            <div className=' max-w-[1240px] mx-auto px-3 py-6 sm:py-[64px]'>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-5'>
                    <div className='col-span-2 md:col-span-4 flex flex-col'>
                        <div><img className='' src={footerlogo} alt="logo" /></div>
                        <p className='text-[#E6E6E6] font-[Inter] font-normal text-base leading-8 mt-4 max-w-[296px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                    </div>
                    <div className='col-span-1 lg:col-span-2 mt-4'>
                        <ul className='flex flex-col gap-6'>
                            <li className='text-white font-[Inter] font-bold text-base'>Service</li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 font-[Inter] font-normal text-base relative after:absolute  after:bg-[#E6E6E6] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0'>Domain</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 font-[Inter] font-normal text-base relative after:absolute  after:bg-[#E6E6E6] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0'>Shared Hosting</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 font-[Inter] font-normal text-base relative after:absolute  after:bg-[#E6E6E6] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0'>Cloud Hosting</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 font-[Inter] font-normal text-base relative after:absolute  after:bg-[#E6E6E6] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0'>Private Hosting</a></li>
                        </ul>
                    </div>
                    <div className='col-span-1 lg:col-span-2 mt-4'>
                        <ul className='flex flex-col gap-6'>
                            <li className='text-white font-[Inter] font-bold text-base'>Hosting</li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 font-[Inter] font-normal text-base relative after:absolute  after:bg-[#E6E6E6] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0'>Cheap Hosting</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 font-[Inter] font-normal text-base relative after:absolute  after:bg-[#E6E6E6] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0'>Hosting Wordpress</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 font-[Inter] font-normal text-base relative after:absolute  after:bg-[#E6E6E6] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0'>Email Hosting</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 font-[Inter] font-normal text-base relative after:absolute  after:bg-[#E6E6E6] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0'>Hosting Unlimited</a></li>
                        </ul>
                    </div>
                    <div className='col-span-1 lg:col-span-2 mt-4'>
                        <ul className='flex flex-col gap-6'>
                            <li className='text-white font-[Inter] font-bold text-base'>Company</li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 font-[Inter] font-normal text-base relative after:absolute  after:bg-[#E6E6E6] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0'>About</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 font-[Inter] font-normal text-base relative after:absolute  after:bg-[#E6E6E6] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0'>Career</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 font-[Inter] font-normal text-base relative after:absolute  after:bg-[#E6E6E6] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='col-span-1 lg:col-span-2 mt-4'>
                        <ul className='flex flex-col gap-6'>
                            <li className='text-white font-[Inter] font-bold text-base'>Help</li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 font-[Inter] font-normal text-base relative after:absolute  after:bg-[#E6E6E6] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0'>FAQ</a></li>
                            <li><a href="#" className='text-[#E6E6E6] leading-8 font-[Inter] font-normal text-base relative after:absolute  after:bg-[#E6E6E6] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0'>Help support</a></li>
                        </ul>
                    </div>
                </div>
                <p className=' flex items-center text-white font-[Inter] text-[12px] sm:text-base font-normal leading-8 mt-4 sm:mt-[96px] mb-1 sm:mb-4'>Built by Jeremiah with <span className=' sm:mx-1'><Love/></span> in Lagos. Copyright {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer