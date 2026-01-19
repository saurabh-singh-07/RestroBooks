import { Bell, Menu, Plus, User } from 'lucide-react'
import React from 'react'

function Header({sideBarShow, setSideBarShow}) {
  return (
    <header className='flex h-fit items-center justify-between border-b border-amber-600 bg-linear-to-r from-amber-500 to-yellow-400'>
        <div className=' flex space-x-4'>
            <button onClick={()=>setSideBarShow(!sideBarShow)}><Menu className='w-8 h-8'/></button>
            <div>
                <h1 className='text-gray-700 font-bold text-2xl'>Dashboard</h1>
            <span className='text-xs md:text-sm font-medium leading-1 text-gray-700'>Welcome back! Here's your restaurant overview</span>
            </div>
        </div>
        <ul className='flex px-2 space-x-3'>
            <li className='h-6 w-6 bg-orange-400 rounded flex justify-center items-center'><Plus className='w-5 h-5'/></li>
            <li><Bell/></li>
            <li><User/></li>
        </ul>
    </header>
  )
}

export default Header
