import React from 'react'
import { assets } from '../assets/assets'
import { testimonialsData } from '../assets/assets'

const Testimonial = () => {
    return (
        <>
            <div className='flex justify-center items-center flex-col bg-[#fbfbfc] py-12 px-5' id="Testimonial">
                <h1 className='text-2xl sm:text-4xl md:5xl font-semibold capitalize'> Our <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonial</span></h1>
                <p className='text-gray-800 mb-1 py-4 sm:pb-18 text-center '>
                    passinate about propertise didicated bout vision
                </p>

                <div className='flex flex-wrap justify-center gap-4'>
                    {
                        testimonialsData.map((items, index) => (
                            <div key={index} className='max-w-[340px] border shadow-lg px-8 py-6 text-center sm:my-7 hover:shadow-xl hover:translate-y-4 duration-500 hover:border hover:border-gray-200'>
                                <img src={items.image} alt={items.alt} srcset="" className='w-20 h-20 rounded-full mx-auto ' />
                                <h2 className='text-gray-900 font-medium'>{items.name}</h2>
                                <p className='text-gray-600 mb-3'>{items.title}</p>
                                <div className='flex justify-center gap-1 text-red-500 mb-4'>
                                    {Array.from({length:items.rating}, (item,index)=>(
                                        <img key={index} src={assets.star_icon} alt="" srcset="" />
                                    ))}
                                </div>
                                <p className='text-gray-600'>{items.text}</p>

                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Testimonial
