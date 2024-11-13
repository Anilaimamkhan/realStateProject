import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <>
            <div className='px-5 md:px-30 lg:px-36 py-12 bg-gray-900 w-full overflow-hidden text-white ' id="Footer">
                <div className='container mx-auto flex flex-col md:flex-row justify-between md:items-center sm:items-start space-y-5'>
                    <div className='w-full md:w-1/2'>
                        <img src={assets.logo_dark} alt="" />
                        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit odio accusamus corporis?</p>
                    </div>
                    <div className='md:w-1/5 md:mb-0 flex justify-center items-start flex-col '>
                        <h3 className='text-white sm:text-xl  md:text-2xl font-semibold capitalize'>company</h3>
                        <ul className='flex flex-col gap-2 text-gray-400 '>
                            <a href="#Header hover:text-white ">Header</a>
                            <a href="#About hover:text-white">About</a>
                            <a href="#Testimonial hover:text-white">Testimonial</a>
                            <a href="#Project hover:text-white">Project</a>

                        </ul>
                    </div>
                    <div className='w-full md:w-1/4 flex flex-col'>
                        <h3 className='text-white sm:text-xl font-semibold md:text-2xl capitalize'>our newsletter</h3>
                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, et.</p>
                        <div className='flex gap-2 mt-5'>
                            <input type="text" name="" id="" placeholder='enter your email' className='px-3 py-2  rounded bg-gray-800 border border-gray-700 ' />
                            <button className='py-2 rounded bg-gray-800 border border-gray-700 px-3 '> click</button>
                        </div>
                    </div>
                </div>
                <div className='py-4 mt-10 border-t text-center border-gray-800 capitalize text-md text-gray-400'>
                    copy right 2024 @ all right reserved
                </div>
            </div>
        </>
    )
}

export default Footer
