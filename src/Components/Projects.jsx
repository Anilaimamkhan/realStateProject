import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { projectsData } from '../assets/assets'

const Projects = () => {
    // const [currentIndex, setcurrentIndex] = useState(0)
    // const [cardToShow, setCartToShow] = useState(1)

    // const nextProject = () => {
    //     setcurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    // }

    // const prevProject = () => {
    //     setcurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    // }

    // useEffect(() => {
    //     const UpdateCardToShow = () => {
    //         if (window.innerWidth >= 1024) {
    //             setCartToShow(projectsData.length)
    //         } else {
    //             setCartToShow(1)
    //         }
    //     }
    //         UpdateCardToShow()
    //         window.addEventListener("resize", UpdateCardToShow)
    //         return window.removeEventListener("resize", UpdateCardToShow)
      

    // })
    return (

        <>
            <div className="container mx-auto flex flex-col items-center justify-center px-5 md:px-10 w-full overflow-hidden py-12 space-y-4  " id="Project">
                <h1 className='text-2xl sm:text-4xl md:5xl font-semibold capitalize '> our <span className='underline underline-offset-4 decoration-1 under font-light'>Project </span></h1>
                <p className='text-gray-800 mb-1 text-center'>
                    passinate about propertise didicated bout vision
                </p>

                {/* ........slide button */}
                {/* <div>
                    <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='prevous project'>
                        <img src={assets.left_arrow} alt="previous " />
                    </button>
                    <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='prevous project'>
                        <img src={assets.right_arrow} alt="previous " />
                    </button>
                </div> */}

                {/* ...........Project */}
                <div className='overflow-hidden py-10'>
                {/* <div className=''> */}

                    {/* <div className='flex flex-wrap justify-center items-center ' > */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ' >

                        {
                            projectsData.map((items, index) => (
                                <div key={index} className='relative h-[350px] '>
                                    <img src={items.image} alt={items.title} className='w-full object-cover' />
                                    <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                        <div className='inline-block w-3/4 bg-white px-4 py-2 shadow-md hover:bg-gray-800 hover:text-white cursor-pointer'>
                                            <h2 className='text-xl'>{items.title}</h2>
                                            <p className='text-gray-500 font-semibold text-md hover:text-white'>{items.price} <span className='text-gray-400 '> {items.location}</span></p>
                                        </div>
                                    </div>
                                </div>
                            )
                            )

                        }
                    </div>
                    </div>

                </div>
            {/* </div> */}

        </>
    )
}

export default Projects
