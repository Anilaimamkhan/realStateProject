import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='text-center p-6 py-20  lg:px-[80px] w-full overflow-hidden' id="Contact">
                <h1 className='text-2xl sm:text-3xl md:4xl font-semibold capitalize text-left md:text-center'> Contact <span className='underline underline-offset-4 decoration-1 under font-light '> with us</span></h1>
                <p className='text-gray-800 mb-8 mt-3 text-left md:text-center'>
                    passinate about propertise didicated bout vision
                </p>
                <form className=''>
                    <div className='flex justify-between items-center flex-wrap'>
                        <div className='w-full md:w-[47%] text-left'
                        >your name
                            <input type="text" name="name" id="" placeholder='Your Name' className='w-full border border-gray-300 rounded py-3 px-4 mt-2' autoComplete='off' />
                        </div>

                        <div className='w-full md:w-[47%] text-left'
                        >your Email
                            <input type="text" name="email" id="" placeholder='Your Name' className='w-full border border-gray-300 rounded py-3 px-4 mt-2' autoComplete='off' />
                        </div>

                    </div>
                    <div className='text-left'>
                        message
                        <textarea name="message" id="" className='w-full border border-gray-300 rounded py-3 px-4 mt-2 mb-5' placeholder='message'></textarea>
                        <a href='#Header' className='bg-gray-700 text-white py-3 px-7 capitalize rounded-sm '>Sent Message</a>
                        </div>
                </form>
            </div>
        </>
    )
}

export default Contact
