import React from 'react'
import { useState } from 'react'

  const Login = ({handleLogin}) => {
  const Login = (handleLogin)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  } 
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-red-500 p-20 rounded-xl'>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required
            type="email"
            placeholder='Enter your email'
            className=' flex items-center text-white outline-none bg-transparent border-2 border-red-500 text-xl py-3 px-5 rounded-full'
          />
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required
            type="password"
            placeholder='Enter your password'
            className='mt-3 flex items-center text-white outline-none bg-transparent border-2 border-red-500 text-xl py-3 px-5 rounded-full'
          />
         <button className='mt-5 text-white bg-red-500 text-xl py-3 px-5 rounded-full'>login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
