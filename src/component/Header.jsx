import React from 'react'
import { assets } from '../assets/assets'

export const Header = () => {
    return (
        <div className='relative overflow-hidden  bg-gradient-to-r from-primary to-[#5f6FFF] rounded-3xl px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center min-h-[500px] shadow-2xl mx-4 md:mx-0 mt-24'>

            {/* --- Left Side: Content --- */}
            <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 md:py-24 z-10">

                {/* Title with better leading and size */}
                <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.15] tracking-tight'>
                    Book Appointment <br className='hidden lg:block'/>
                    <span className='text-blue-200'>With Trusted Doctors</span>
                </h1>

                {/* Profiles & Description Section */}
                <div className="flex flex-col sm:flex-row items-center gap-4 text-white/90">
                    <div className='flex -space-x-3'>
                        {/* إذا كان لديك صورة لجروب بروفايلات، هذا التنسيق يجعلها تبدو مودرن */}
                        <img className='w-24 md:w-28 border-2 border-primary rounded-full' src={assets.group_profiles} alt='Doctors'/>
                    </div>
                    <p className='text-sm md:text-base font-light leading-relaxed max-w-md text-center sm:text-left'>
                        Simply browse through our extensive list of trusted doctors,
                        <br className='hidden sm:block'/> and schedule your appointment hassle-free.
                    </p>
                </div>

                {/* Modern CTA Button */}
                <a href='#speciality' className='group flex items-center gap-3 bg-white px-10 py-4 rounded-full text-primary font-semibold text-sm shadow-lg hover:bg-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95 m-auto md:m-0'>
                    Book appointment
                    <img className='w-3 transition-transform group-hover:translate-x-1' src={assets.arrow_icon} alt=''/>
                </a>
            </div>

            {/* --- Right Side: Image with floating effect --- */}
            <div className="md:w-1/2 relative h-full flex items-end">
                <img
                    className='w-full h-auto object-contain  bottom-0 right-0 max-h-[105%] drop-shadow-[-20px_10px_30px_rgba(0,0,0,0.2)]'
                    src={assets.header_img}
                    alt='Header'
                />
            </div>

            {/* Background Decorative Circles (Optional for Modern Look) */}
            <div className='absolute top-[-50px] left-[-50px] w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>
            <div className='absolute bottom-[-50px] right-[20%] w-64 h-64 bg-blue-400/20 rounded-full blur-3xl'></div>
        </div>
    )
}