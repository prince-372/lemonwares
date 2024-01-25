import Image1 from '../assets/image/Jerry-Piping-img.webp';
import Image2 from '../assets/image/Korane-img.webp'
import Image3 from '../assets/image/Nadine-img.webp'
import Image4 from '../assets/image/LeeveOn-Branding-img.webp'
import Image5 from '../assets/image/Jrango-Glasses-img.webp'
import Image6 from '../assets/image/Crypto-Learn-img.webp'
import iconimg from '../assets/image/Jerry-img.webp'
import iconimg2 from '../assets/image/Crypto-img.webp'
import iconimg3 from '../assets/image/LeeveOn-img.webp' ;
import { Quetemark, Smallquetemark } from './Icons';
const Story = () => {
    return (
        <div id='blog&News' className='mx-auto px-3 max-w-[1220px] py-[50px] sm:py-[106px] overflow-hidden'>
            <div data-aos="flip-left" className='grid lg:grid-cols-2 grid-cols-1 my-20 gap-[30px]'>
                <div className='flex flex-col lg:items-end items-center'>
                    <div className='relative flex flex-col justify-center items-center'>
                        <h2 className='text-[#18191F] text-[30px] sm:text-5xl font-extrabold leading-[35px] sm:leading-[64px] font-[Inter] max-w-[445px]'>Real Stories from Real Customers</h2>
                        <p className='text-[#18191F] text-lg font-[Inter] font-normal leading-[32px] max-w-[573px] mt-3'>Get inspired by these stories.</p>
                        <span className=' absolute top-0 left-0 -translate-x-[67%] -translate-y-[46%]'><Quetemark/></span>
                    </div>
                    <div className='bg-white shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] rounded-lg sm:max-w-[350px] w-full mt-6'>
                        <div className='py-2 px-8 flex gap-4'>
                            <span className='mt-20'><Smallquetemark/></span>
                            <div className='flex flex-col'>
                                <div><img src={iconimg} alt='Icon' /></div>
                                <p className=' font-[Inter] font-normal text-black text-base leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                                <p className=' font-[Inter] font-bold text-[#18191F] text-lg leading-7 mt-6'>Floyd Miles</p>
                                <p className=' font-[Inter] font-medium text-[#969BAB] text-sm leading-6 mb-20'>Vice President, CLI</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-8 items-center'>
                    <div className='bg-white shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] rounded-lg max-w-[445px] w-full mt-6'>
                        <div className='pt-10 px-8 flex gap-4'>
                            <span className='mt-20'><Smallquetemark/></span>
                            <div className='flex flex-col'>
                                <div><img src={iconimg2} alt='Icon' /></div>
                                <p className=' font-[Inter] font-normal text-black text-base leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                                <p className=' font-[Inter] font-bold text-[#18191F] text-lg leading-7 mt-6'>Jane Cooper</p>
                                <p className=' font-[Inter] font-medium text-[#969BAB] text-sm leading-6 mb-2'>CEO, JPNL</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] rounded-lg max-w-[350px] w-full mt-6'>
                        <div className='pt-10 px-8 flex gap-4 items-center'>
                            <span className='mt-20'><Smallquetemark/></span>
                            <div className='flex flex-col'>
                                <div><img src={iconimg3} alt='Icon' /></div>
                                <p className=' font-[Inter] font-normal text-black text-base leading-[32px]'>LemonWares saved our time in Hosting my company page.</p>
                                <p className=' font-[Inter] font-bold text-[#18191F] text-lg leading-7 mt-6'>Kristin Watson</p>
                                <p className=' font-[Inter] font-medium text-[#969BAB] text-sm leading-6 mb-8'>Co-Founder, LeeveOn Branding</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div data-aos="fade-right" className='flex flex-col items-center lg:items-start'>
                    <h2 className='text-[#18191F] text-[35px] sm:text-5xl text-center lg:text-start font-extrabold leading-[38px] sm:leading-[64px] font-[Inter]'>We serve over 100
                        Nigerian Websites</h2>
                    <p className='text-[#18191F] text-lg font-[Inter] font-normal text-center lg:text-start leading-[32px] max-w-[573px] mt-3'>Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
                </div>
                <div data-aos="fade-left" className='grid grid-cols-2 xl:grid-cols-3 items-center justify-center'>
                    <div className='flex justify-center lg:justify-end hover:scale-[1.1] duration-300'>
                        <img src={Image1} alt='Images ' />
                    </div>
                    <div className='flex justify-center lg:justify-end hover:scale-[1.1] duration-300'>
                        <img src={Image2} alt='Images ' />
                    </div>
                    <div className='flex justify-center lg:justify-end hover:scale-[1.1] duration-300'>
                        <img src={Image3} alt='Images ' />
                    </div>
                    <div className='flex justify-center lg:justify-end hover:scale-[1.1] duration-300'>
                        <img src={Image4} alt='Images ' />
                    </div>
                    <div className='flex justify-center lg:justify-end hover:scale-[1.1] duration-300'>
                        <img src={Image5} alt='Images ' />
                    </div>
                    <div className='flex justify-center lg:justify-end hover:scale-[1.1] duration-300'>
                        <img src={Image6} alt='Images ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story
