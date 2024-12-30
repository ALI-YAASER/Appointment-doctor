import React, { useState } from 'react'

const Login = () => {
  const [state,setState] = useState('Sign up')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')


  const onSubmitHandler = async (event)=>{
    event.preventDefault()
  } 

  return (
    <form className=' min-h-[80vh] flex items-center '> 
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm bg-gray-50 shadow-lg">
        <p className='text-2xl font-semibold'>{state === 'Sign up' ? 'Create Account': 'Login'}</p>
        <p>Please {state === 'Sign up' ? 'Sign Up': 'log in'} to book appointment</p>
        <div className="w-full pt-4">
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text'onChange={(e)=>setName(e.target.name)} value={name}/>
          </div>
          <div className="w-full">
          <p>Email</p>
          <input  className='border border-zinc-300 rounded w-full p-2 mt-1' type='email' onChange={(e)=>setEmail(e.target.email)} value={email}/>
          </div>
          <div className="w-full">
          <p>Password</p>
          <input  className='border border-zinc-300 rounded w-full p-2 mt-1' type='Password' onChange={(e)=>setPassword(e.target.password)} value={password}/>
        </div>
        <button className='bg-primary text-white w-full h-9 rounded-md text-base py-2 shadow-md'>{state === 'Sign up' ? 'Create Account': 'Login'}</button>
        <p>{state === "Sign up" ? 'Already have an account? Login here': 'Create an new account? click here'}</p>
      </div>
    </form>
  )
}

export default Login