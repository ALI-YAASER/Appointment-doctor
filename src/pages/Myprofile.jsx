import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Myprofile = () => {

  const [userData, setUserData] = useState({
    name: "أحمد محمود كمال",
    image: assets.profile_pic,
    email: "ahmed.kamal.eg@gmail.com",
    phone: "+20 100 456 7890", // كود مصر +20
    address: {
      line1: "حي المعادي، شارع 9",
      line2: 'القاهرة، جمهورية مصر العربية'
    },
    gender: 'ذكر',
    dob: '1995-05-15'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
      <div className='max-w-2xl mx-auto flex flex-col mt-32 gap-6 text-sm bg-white p-8 rounded-3xl shadow-sm border border-gray-100'>

        {/* Profile Image & Name Section */}
        <div className='flex flex-col items-center sm:items-start gap-4'>
          <div className='relative group'>
            <img className='w-36 h-36 rounded-2xl object-cover shadow-md' src={userData.image} alt='Profile' />
            {isEdit && <div className='absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 cursor-pointer transition-all'>Change Photo</div>}
          </div>

          {isEdit ? (
              <input
                  className='bg-gray-50 border border-indigo-100 text-3xl font-bold p-2 rounded-xl w-full max-w-lg mt-2 outline-none focus:ring-2 ring-primary/20'
                  type='text'
                  value={userData.name}
                  onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
              />
          ) : (
              <p className='font-bold text-4xl text-neutral-800 mt-2'>{userData.name}</p>
          )}
        </div>

        <hr className='border-gray-100 h-[1px]' />

        {/* Contact Info Section */}
        <div className='space-y-4'>
          <p className='text-primary font-bold tracking-widest text-xs uppercase'>Contact Information</p>

          <div className="grid grid-cols-[1fr_3fr] gap-y-4 text-neutral-700">
            <p className='font-semibold text-gray-400'>Email id:</p>
            <p className='text-primary font-medium'>{userData.email}</p>

            <p className='font-semibold text-gray-400'>Phone:</p>
            {isEdit ? (
                <input
                    type='text'
                    className='bg-gray-50 border border-indigo-50 p-2 rounded-lg max-w-xs outline-none focus:bg-white focus:border-primary transition-all'
                    value={userData.phone}
                    onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                />
            ) : (
                <p className='font-medium'>{userData.phone}</p>
            )}

            <p className='font-semibold text-gray-400'>Address:</p>
            {isEdit ? (
                <div className='flex flex-col gap-2'>
                  <input
                      className='bg-gray-50 border border-indigo-50 p-2 rounded-lg max-w-xs outline-none'
                      type='text'
                      value={userData.address.line1}
                      onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                  />
                  <input
                      className='bg-gray-50 border border-indigo-50 p-2 rounded-lg max-w-xs outline-none'
                      type='text'
                      value={userData.address.line2}
                      onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                  />
                </div>
            ) : (
                <p className='text-gray-500 leading-relaxed'>
                  {userData.address.line1}<br />{userData.address.line2}
                </p>
            )}
          </div>
        </div>

        {/* Basic Info Section */}
        <div className='space-y-4'>
          <p className='text-primary font-bold tracking-widest text-xs uppercase'>Basic Information</p>

          <div className="grid grid-cols-[1fr_3fr] gap-y-4 text-neutral-700">
            <p className='font-semibold text-gray-400'>Gender:</p>
            {isEdit ? (
                <select
                    className='max-w-[120px] bg-gray-50 border border-indigo-50 p-2 rounded-lg outline-none'
                    onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                    value={userData.gender}
                >
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
            ) : (
                <p className='font-medium'>{userData.gender}</p>
            )}

            <p className='font-semibold text-gray-400'>Birthday:</p>
            {isEdit ? (
                <input
                    type='date'
                    className='bg-gray-50 border border-indigo-50 p-2 rounded-lg max-w-[150px] outline-none'
                    onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                    value={userData.dob}
                />
            ) : (
                <p className='font-medium'>{userData.dob}</p>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className='mt-6'>
          <button
              className='bg-primary text-white px-10 py-3 rounded-full font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all duration-300 active:scale-95'
              onClick={() => setIsEdit(!isEdit)}
          >
            {isEdit ? "Save Information" : "Edit Profile"}
          </button>
        </div>
      </div>
  )
}

export default Myprofile