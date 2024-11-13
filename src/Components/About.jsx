import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <>
     <div className=" mx-auto flex flex-col items-center justify-center p-10 md:px-10 lg:px-20 w-full overflow-hidden py-10  md:py-20 space-y-2 bg-[#fbfbfc]" id="About">
<h1 className='text-2xl sm:text-4xl md:5xl font-semibold capitalize'> About <span className='underline underline-offset-4 decoration-1 under font-light'>our brand</span></h1>
<p className='text-gray-800 text-center'>
    passinate about propertise didicated bout vision
</p>
<div className="flex flex-col md:flex-row items-start md:items-center md:gap-20 py-16">
<img src={assets.brand_img} alt="" className='w-full md:w-1/2'/>
<div className="flex flex-col items-center justify-center md:items-start mt-10 text-gray-600 ">
<div className="grid grid-cols-2 gap-6 w-full  ">
<div className='text-3xl font-medium text-gray-800'>
    <p>+10</p>
    <p className='text-sm'>year of experiance</p>
</div>
<div className='text-3xl font-medium text-gray-800'>
    <p>+10</p>
    <p className='text-sm'>project completed</p>
</div>
<div className='text-3xl font-medium text-gray-800'>
    <p>+10</p>
    <p  className="text-sm">mn.fq.sm Develivery</p>
</div>
<div className='text-3xl font-medium text-gray-800'>
    <p>+10</p>
    <p className='text-sm'>ongoing project</p>
</div>
</div>
<div>
<p className='py-5 text-gray-800 capitalize text-sm leading-6 tracking-wide font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, voluptatibus? Sequi, dicta quod. Earum rem assumenda quas aspernatur, repellendus modi!</p>
<a href='#Contact' className='bg-gray-700 text-white py-2 px-7 capitalize rounded-sm'>Contact us</a>

</div>
</div>
</div>
     </div> 
    </>
  )
}

export default About
