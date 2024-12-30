import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Myprofile = () => {

  const [userData,setUserDate] = useState({
    name:"Edward Vincent",
    image:assets.profile_pic,
    email:"richardjameswap@gmail.com",
    phone:"+1  123 456 7890",
    address:{
      line1:"57th Cross, Richmond ",
      line2:'Circle, Church Road, London'
    },
    gernder:'Male',
    dob:'2000-01-20'
  })

  const[isEdit,setIsEdit] = useState(true)


  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt=''/>

      {
        isEdit ? <input className='bg-gray-50 border border-gray-200 text-3xl  font-medium max-w-60 mt-4' type='text' value={userData.name} onChange={e => setUserDate(prev => ({...prev,name:e.target.value}))} /> : 
        <p className='font-medium text-3xl text-neutral-800 mt-4' >{userData.name}</p>
      }
      <hr className='border-zinc-400 h-[1px] '/>
      <div className="">
        <p className='text-neutral-500 underline mt-3' >CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className='font-medium' >Email id: </p>
          <p className='text-blue-500' >{userData.email} </p>
          <p className='font-medium' >Phone:</p>
          {
        isEdit ? <input type='text'  className='bg-gray-50 border border-gray-200 text-sm  font-medium max-w-60 mt-3' value={userData.phone} onChange={e => setUserDate(prev => ({...prev,phone:e.target.value}))} /> : <p className='text-blue-500'>{userData.phone}</p>
      }
          <p className='font-medium'>Address:</p>
          {
            isEdit ? <p> <input  className='bg-gray-50 border border-gray-200 text-sm  font-medium max-w-60 mt-3' type='text' value={userData.address.line1} onChange={e => setUserDate(prev => ({...prev,address,line1:e.target.value}))}  />
            <br/>
            <input type='text'  className='bg-gray-50 border border-gray-200 text-sm  font-medium max-w-60 mt-3' value={userData.address.line2} onChange={e => setUserDate(prev => ({...prev,address,line2:e.target.value}))}  />
            </p>: <p className='text-gray-500'>{userData.address.line1}
            <br/>
              {userData.address.line2}</p>
          }
        </div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div  className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
      
        
          <p>Gender:</p>
          
      {
        isEdit ? <select className='max-w-20 bg-gray-100' onChange={e => setUserDate(prev => ({...prev,gernder:e.target.value}))} value={userData.gernder} >
          <option value='male'>
            Male
          </option>
          <option value='female'>
            Female
          </option>
        </select> : <p className='text-gray-400' >{userData.gernder}</p>
      }
          <p>Birthday:</p>
          {
            isEdit? <input type='date'  className='bg-gray-50 border border-gray-200 text-sm  font-medium max-w-60 mt-3' onChange={e => setUserDate(prev => ({...prev,dob:e.target.value}))} value={userData.dob} /> :
          <p className='text-gray-400' >{userData.dob}</p>
          }
        </div>
      </div>
      <div className="">
        {
          isEdit? <button className='bg-primary text-white px-8 py-2 rounded-full font-light hidden md:block' onClick={(()=> setIsEdit(false))}>Save information</button>  :
          <button className='bg-primary text-white px-8 py-2 rounded-full font-light hidden md:block' onClick={(()=> setIsEdit(true))}>Edit</button>
        }
      </div>
    </div>
  )
}

export default Myprofile