import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div className='flex flex-col items-center gap-6 mt-10 py-10 text-gray-800 bg-white' id='speciality'>

            {/* العناوين مع تحسين الخطوط */}
            <h1 className='text-3xl md:text-4xl font-bold tracking-tight'>Find by Speciality</h1>
            <p className='px-6 sm:w-1/2 md:w-2/3 text-center text-sm md:text-base text-gray-500 leading-relaxed'>
                Simply browse through our extensive list of trusted doctors, <br className='hidden md:block'/>
                and schedule your appointment hassle-free.
            </p>

            {/* الحاوية الخاصة بالأيقونات */}
            <div className="flex sm:justify-center gap-6 pt-3 w-full overflow-x-auto no-scrollbar px-6">
                {specialityData.map((item, index) => (
                    <Link
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className='group flex flex-col items-center text-center cursor-pointer flex-shrink-0 transition-all duration-500'
                        key={index}
                        to={`/doctors/${item.speciality}`}
                    >
                        {/* خلفية دائرية للأيقونة تظهر عند الهوفر */}
                        <div className='w-20 h-20 sm:w-28 sm:h-28  rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/10 group-hover:shadow-lg group-hover:-translate-y-3 transition-all duration-500'>
                            <img
                                className='w-12 sm:w-16 object-contain transform group-hover:scale-110 transition-transform duration-500'
                                src={item.image}
                                alt={item.speciality}
                            />
                        </div>

                        {/* اسم التخصص */}
                        <p className='text-sm md:text-base font-medium text-gray-700 group-hover:text-primary transition-colors'>
                            {item.speciality}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu