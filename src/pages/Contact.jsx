import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
        </div>  

        <div className="flex my-10 flex-col md:flex-row gap-12  justify-center">
          <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt=''/>
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-500 items-start">
            <b className='font-semibold text-lg text-gray-700' >Our OFFICE</b>
            <p>54709 Willms Station <br/>Suite 350, Washington, USA</p>
            <p>Tel: +201123434175 <br/> Email: yly741689@gmail.com</p>
            <b className='font-semibold text-lg text-gray-700'>Careers at PRESCRIPTO</b>
            <p>Learn more about our teams and job openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
          </div>
        </div>
    </div>
  )
}

export default Contact