import { useState } from 'react'

import './App.css'
import Header from './components/layout/Header'
import Sidebar  from './components/layout/Sidebar'
import { Dashboard } from './components/pages/Dashboard'
import { AIChatWidget } from './components/pages/AiChatWidget'

function App() {
  const [sideBarShow, setSideBarShow] = useState(true)

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500'>
      <div className='flex overflow-hidden'>
        <Sidebar 
          sideBarShow={sideBarShow}
          setSideBarShow={setSideBarShow}/>
        <div className='flex-1 flex flex-col '>
          <Header
          sideBarShow = {sideBarShow}
          setSideBarShow = {setSideBarShow}/>
          <main className='bg-transparent flex justify-center  space-y-10'>
            <Dashboard/>
         
          </main>
        </div>
          <AIChatWidget/>
      </div>
    </div>
  )
}

export default App
