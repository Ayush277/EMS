import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl'> Hello <br /> <span className='text-3xl font-semibold'>Ayush</span></h1>
      <button className='bg-red-500 text-lg font-medium text-white rounded px-3 py-2'>Log Out</button>
    </div>
  )
}

export default Header
