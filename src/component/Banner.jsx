import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-wrap bg-primary rounded-lg px-6 md:px-14 lg:px-20">
            {/* left */}
            <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 font-semibold  text-white">
                <p className='text-3xl md:text-4xl  text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment </p>
                <p className='mt-5 text-3xl md:text-4xl font-semibold leading-tight md:leading-tight lg:leading-tight '>With 100+ Trusted Doctors</p>
                <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className=' mt-7 bg-white px-8 py-3 sm:text-base rounded-full text-gray-600 text-sm  hover:scale-105 transition-all duration-300'>Create account</button>

            </div>
            {/* right */}
            <div className=" hidden md:block lg:w-[370px] md:w-1/2 relative">
            <img className='w-full md:absolute bottom-0 right-0 max-w-md h-auto rounded-lg' src={assets.appointment_img} alt=''/>
            </div>
        </div>
    
    )
}
