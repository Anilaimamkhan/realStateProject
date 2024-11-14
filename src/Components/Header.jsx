import React from 'react'
import Navbar from './Navbar'
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { delay, motion } from "framer-motion"


const fadeInUpAnimation = {
    hidden: {
        opacity: 0,
        y: 100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
        }
    }
}
const Header = () => {

    return (
        <>

            <div className='images' id="Header">
                <Navbar />
                <div className='mx-auto text-center flex justify-center items-center flex-col py-4 px-6 md:px-50 space-y-3'>
                    <motion.h2
                        initial="hidden"
                        animate="show"
                        variants={fadeInUpAnimation}
                        className='text-4xl md:text-4xl lg:text-5xl text-white uppercase font-semibold max-w-3xl pb-5'>EXPLore home that fit you dreams</motion.h2>
                    <div className='gap-4 flex justify-center items-center capitalize '>
                        <motion.a 
                           initial="hidden"
                        animate="show"
                        variants={fadeInUpAnimation}
                        href="https://anilaimamkhan.github.io/Anila_Portfolio/" className='px-5 py-2 rounded-full bg-black text-white border' >My project </motion.a>
                        <motion.a 
                          initial="hidden"
                        animate="show"
                        variants={fadeInUpAnimation}
                        transition={{
                            delay:1
                        }
                        }
                        href="#Contact" className='px-5 py-2 bg-transparent border border-white rounded-full text-white'>contact</motion.a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
