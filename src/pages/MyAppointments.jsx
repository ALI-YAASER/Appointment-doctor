import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
    const { doctors } = useContext(AppContext)

    return (
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='pb-4 mt-32 font-bold text-3xl text-zinc-800 border-b border-gray-100'>
                My Appointments
            </h2>

            <div className="mt-8 flex flex-col gap-6">
                {doctors.slice(0, 3).map((item, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col md:flex-row gap-6 p-5 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-indigo-50 transition-all duration-500"
                    >
                        {/* 1. قسم الصورة - تحسين الحجم في الشاشات المتوسطة */}
                        <div className="w-full md:w-40 lg:w-48 h-48 md:h-auto overflow-hidden rounded-2xl bg-indigo-50 flex-shrink-0">
                            <img
                                className='w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700'
                                src={item.image}
                                alt={item.name}
                            />
                        </div>

                        {/* 2. قسم المعلومات - توزيع مرن (Flex-Grow) */}
                        <div className="flex-1 flex flex-col justify-between py-1">
                            <div>
                                <div className='flex justify-between items-start'>
                                    <h3 className='text-xl md:text-2xl text-zinc-800 font-bold tracking-tight'>{item.name}</h3>
                                    {/* شارة حالة الموعد تظهر بجمالية في الشاشة المتوسطة */}
                                    <span className='hidden md:block px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-100'>
                      Confirmed
                   </span>
                                </div>
                                <p className='text-primary font-semibold mt-1 text-md'>{item.speciality}</p>

                                <div className='mt-4 space-y-2'>
                                    <div className='flex items-start gap-2'>
                                        <span className='text-zinc-400 mt-1 text-xs font-bold uppercase'>Address</span>
                                        <div className='text-zinc-500 text-sm'>
                                            <p>{item.address.line1}</p>
                                            <p>{item.address.line2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* قسم التاريخ والوقت بتصميم كبسولة */}
                            <div className='mt-5 flex items-center gap-3 bg-zinc-50 self-start px-4 py-2 rounded-xl'>
                                <span className='text-zinc-800 font-bold text-sm'>Date & Time:</span>
                                <span className='text-zinc-500 text-sm'>25, July, 2024 | 8:30 PM</span>
                            </div>
                        </div>

                        {/* 3. قسم الأزرار - عمودي في الشاشات المتوسطة والكبيرة */}
                        <div className="flex flex-row md:flex-col gap-3 md:justify-end md:min-w-[180px] pt-4 md:pt-0 border-t md:border-t-0 border-gray-50">
                            <button className='flex-1 md:flex-none text-sm font-bold text-white bg-primary py-3.5 px-6 rounded-2xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300'>
                                Pay Online
                            </button>
                            <button className='flex-1 md:flex-none text-sm font-bold text-zinc-500 py-3.5 px-6 rounded-2xl border border-gray-200 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all duration-300'>
                                Cancel
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointments