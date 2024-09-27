import React from 'react'
import { useSelector } from 'react-redux'

export default function Header() {
    const lang = useSelector((state) => state.language);
  return (
    <div className="flex w-full bg-blue p-3 shadow-md ">
        <h1 className='text-white text-2xl'>Header</h1>
        <div className='flex '>
            <button className='bg-white text-red outline-none border-none p-2 m-2'>Home</button>
            <button className='bg-white text-red outline-none border-none p-2 m-2'>About</button>
            <button className='bg-white text-red outline-none border-none p-2 m-2'>Contact</button>
        </div>
        <div className='flex ml-auto'>
            <button className='bg-white text-red outline-none border-none p-2 m-2'>Login</button>
            <button className='bg-white text-red outline-none border-none p-2 m-2'>Register</button>
        </div>
        <div className='flex ml-2'>
            <button className='bg-white text-red outline-none border-none p-2 m-2'>{lang=='en'?'Ar':'ENG'}</button>

        </div>
    </div>
  )
}
