import React from 'react'
import img1 from '../assets/image/cpenel.webp'
import img2 from '../assets/image/imunify.webp'
import img3 from '../assets/image/lite.webp'
import img4 from '../assets/image/softaculous.webp'
import img5 from '../assets/image/worldprass.webp'
import img6 from '../assets/image/cloud.webp'
import { Battery, Satting, Support, Watch } from './Icons'

const True = () => {
    const Items = [
        {
            Img: (<Watch/>),
            title: "99.9% Uptime",
            Description: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
        },
        {
            Img: (<Satting/>),
            title: "Blazing Fast Web Hosting",
            Description: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
        },
        {
            Img: (<Battery/>),
            title: "Free SSL Certificates",
            Description: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
        },
        {
            Img: (<Support/>),
            title: "24x7 Friendly Support",
            Description: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
        },
    ]

    return (
        <div className=' overflow-x-clip'>
            <div className='max-w-[1300px] px-3 mx-auto pb-8 sm:pb-[133px] pt-6 sm:pt-[79px]'>
                <div className=' grid md:grid-cols-2 -mx-3 flex-wrap'>
                    <div data-aos="fade-right" className=' px-3 mx-auto lg:mx-0'>
                        <h2 className="max-w-[594px] text-zinc-900 text-[26px] sm:text-[48px] font-extrabold font-[Inter] leading-[34px] sm:leading-[64px] text-center md:text-start">True Cloud Web  Hosting</h2>
                        <p className="max-w-[573px] text-zinc-900 text-[18px] font-normal font-[Inter] leading-[32px] text-center md:text-start"><br />True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.<br /><br /></p>
                    </div>
                    <div data-aos="fade-left" className=' px-3 pt-[25px]'>
                        <div className='grid grid-cols-2 xl:grid-cols-3 items-center justify-center gap-11'>
                            <div className='flex justify-center lg:justify-end hover:scale-[1.1] duration-300'><img src={img1} alt="img" /></div>
                            <div className='flex justify-center lg:justify-end hover:scale-[1.1] duration-300'><img src={img2} alt="img" /></div>
                            <div className='flex justify-center lg:justify-end hover:scale-[1.1] duration-300'><img src={img3} alt="img" /></div>
                            <div className='flex justify-center lg:justify-end hover:scale-[1.1] duration-300'><img src={img4} alt="img"/></div>
                            <div className='flex justify-center lg:justify-end hover:scale-[1.1] duration-300'><img src={img5} alt="img" /></div>
                            <div className='flex justify-center lg:justify-end hover:scale-[1.1] duration-300'><img src={img6} alt="img" /></div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" className="grid sm:grid-cols-2 xl:grid-cols-4 mt-8 sm:mt-10 md:mt-20 lg:mt-[100px] xl:mt-[126px] sm:ml-11 sm:mr-12 gap-8 sm:gap-10 xl:gap-5">
                    {
                        Items.map((items, index) => (
                            <div key={index} className='flex w-full justify-center'>
                                <div className='flex flex-col justify-center items-center'>
                                    {items.Img}
                                    <h2 className='text-black font-bold text-base sm:text-xl mt-3 font-[Poppins]'>{items.title}</h2>
                                    <p className='text-black text-xs font-[Poppins] text-center font-light mt-1'>{items.Description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default True
