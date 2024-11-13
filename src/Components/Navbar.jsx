import React, { useEffect, useState } from 'react'
import { assets } from "../assets/assets"

const Navbar = () => {
    const [showMobileMenu, setShowMObileMenu] = useState(false)

useEffect(()=>{
   if(showMobileMenu) {
    document.body.style.overflow="hidden"
   }else{
    document.body.style.overflow="auto"
   }
   return()=> {
    document.body.style.overflow="auto"
   }
},[showMobileMenu])

    return (
        <>
            <div className="w-full absolute top-0 left-0 md:py-5">
                <div className='container flex justify-between items-center py-4 mx-auto px-10 md:px-14 lg:px-32 bg-transparent'>
                    <img src={assets.logo} alt="logo" className='w-[100px]' />
                    <ul className='hidden md:flex gap-4 text-white'>
                        <a href='#Header' className='cursor-pointer hover:text-gray-400'>Home</a>
                        <a href='#About' className='cursor-pointer hover:text-gray-400'>About</a>
                        <a href='#Testimonial' className='cursor-pointer hover:text-gray-400'>Testimonial</a>
                        <a href='#Project' className='cursor-pointer hover:text-gray-400'>Project</a>

                    </ul>
                    <button className=' hidden md:block px-4 py-2 rounded-full bg-white shadow-xl'>singup</button>
                    <img onClick={()=>setShowMObileMenu(true)} src={assets.menu_icon} alt="" className='md:hidden
                    menu' />
                </div>
                {/* ......... mobile menu ........... */}
                <div className={`${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden  right-0 top-0 bottom-0 left-0 overflow-hidden bg-white transition-all `}>
                    <div className='flex justify-end p-10 cursor-pointer '>
                        <img onClick={()=>setShowMObileMenu(false)} src={assets.cross_icon} alt="" className='w-5' />
                    </div>
                    <ul className='flex justify-center items-center flex-col gap-2 mt font-medium'>


                        <a href="#Header" onClick={()=>setShowMObileMenu(false)} className='px-4 py-2 rounded-full inline-block'>Home</a>
                        <a href="#About" onClick={()=>setShowMObileMenu(false)} className='px-4 py-2 rounded-full inline-block'>About</a>
                        <a href="#Testimonial" onClick={()=>setShowMObileMenu(false)} className='px-4 py-2 rounded-full inline-block'>Testimonial</a>
                        <a href="#Project" onClick={()=>setShowMObileMenu(false)} className='px-4 py-2 rounded-full inline-block'>Project</a>


                    </ul>
                </div>


            </div>


        </>
    )
}

export default Navbar
