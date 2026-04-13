import React from 'react'
import { assets } from '../assets/assets'

function About() {
    return (
        <div className="px-4 md:px-10 lg:px-20 bg-white">
            {/* --- Title Section --- */}
            <div className="text-center text-3xl md:text-4xl pt-24 text-gray-400 font-light">
                <p>ABOUT <span className='text-zinc-800 font-bold tracking-tight'>US</span></p>
            </div>

            {/* --- Content Section --- */}
            <div className="flex flex-col lg:flex-row items-center gap-16 my-16">

                {/* Left: Image with Decorative Frame */}
                <div className='relative w-full lg:max-w-[450px]'>
                    <div className='absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10'></div>
                    <img className='w-full rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500' src={assets.about_image} alt='Medical center'/>
                </div>

                {/* Right: Narrative Content */}
                <div className="flex flex-col justify-center gap-8 lg:w-3/5 text-base text-gray-600 leading-relaxed">
                    <p>
                        Welcome to <span className='text-primary font-semibold'>Prescripto</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
                    </p>
                    <p>
                        Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
                    </p>

                    <div className='space-y-3'>
                        <b className='text-zinc-800 text-lg border-l-4 border-primary pl-4'>Our Vision</b>
                        <p className='pl-5 italic'>
                            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- Why Choose Us Title --- */}
            <div className="text-zinc-800 my-10 text-2xl font-semibold">
                <p>Why <span className='text-primary'>Choose Us</span></p>
            </div>

            {/* --- Features Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 mb-24 border-t border-l border-gray-100">

                {/* Feature 1 */}
                <div className="border-r border-b px-10 py-16 flex flex-col gap-5 text-sm hover:bg-primary group transition-all duration-500 cursor-default">
                    <b className='text-zinc-800 group-hover:text-white text-base transition-colors duration-300'>Efficiency:</b>
                    <p className='text-gray-500 group-hover:text-white/90 leading-relaxed transition-colors duration-300'>
                        Streamlined appointment scheduling that fits into your busy lifestyle, ensuring you never miss a check-up.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="border-r border-b px-10 py-16 flex flex-col gap-5 text-sm hover:bg-primary group transition-all duration-500 cursor-default">
                    <b className='text-zinc-800 group-hover:text-white text-base transition-colors duration-300'>Convenience:</b>
                    <p className='text-gray-500 group-hover:text-white/90 leading-relaxed transition-colors duration-300'>
                        Access to a network of trusted healthcare professionals in your area, right at your fingertips.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="border-r border-b px-10 py-16 flex flex-col gap-5 text-sm hover:bg-primary group transition-all duration-500 cursor-default">
                    <b className='text-zinc-800 group-hover:text-white text-base transition-colors duration-300'>Personalization:</b>
                    <p className='text-gray-500 group-hover:text-white/90 leading-relaxed transition-colors duration-300'>
                        Tailored recommendations and reminders to help you stay on top of your health goals and history.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About