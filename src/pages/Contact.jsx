import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
      <div className='px-4 md:px-10 lg:px-20 bg-white min-h-[70vh]'>

        {/* --- Main Title --- */}
        <div className="text-center text-3xl md:text-4xl pt-24 text-gray-400 font-light">
          <p>CONTACT <span className='text-zinc-800 font-bold tracking-tight'>US</span></p>
        </div>

        {/* --- Page Content --- */}
        <div className="flex flex-col md:flex-row gap-16 my-16 justify-center items-center">

          {/* Contact Image */}
          <div className='w-full md:max-w-[400px]'>
            <img
                className='w-full rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500'
                src={assets.contact_image}
                alt='Prescripto Office'
            />
          </div>

          {/* Contact Details (Left Aligned for English) */}
          <div className="flex flex-col justify-center gap-8 md:w-2/5 text-base text-gray-600 text-left">

            {/* Office Section */}
            <div className='space-y-3'>
              <b className='text-xl text-zinc-800 border-l-4 border-primary pl-4 uppercase tracking-wide block'>Our OFFICE</b>
              <div className='pl-5 leading-relaxed'>
                <p className='font-medium text-gray-800'>54709 Willms Station</p>
                <p>Suite 350, Washington, USA</p>
              </div>
              <div className='pl-5 mt-2'>
                <p><span className='font-semibold text-zinc-700'>Tel:</span> +1 (212) 434-1752</p>
                <p><span className='font-semibold text-zinc-700'>Email:</span> admin@prescripto.com</p>
              </div>
            </div>

            {/* Careers Section */}
            <div className='space-y-4 pt-4'>
              <b className='text-xl text-zinc-800 border-l-4 border-primary pl-4 uppercase tracking-wide block'>Careers at PRESCRIPTO</b>
              <p className='pl-5 text-gray-500'>Learn more about our teams and job openings.</p>

              <div className='pl-5'>
                <button className='group relative inline-flex items-center gap-2 border-2 border-zinc-800 px-10 py-4 text-sm font-bold uppercase transition-all duration-300 hover:bg-zinc-800 hover:text-white active:scale-95'>
                  Explore Jobs
                  <span className='transform group-hover:translate-x-1 transition-transform'>→</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Contact