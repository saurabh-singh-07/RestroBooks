import { ArrowUpRight, Bot, ChefHat, FileText, LayoutDashboard, Moon, Package, Receipt, Settings, Sun, TrendingUp, Users, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard",},
  { icon: Receipt, label: "Expenses", },
  { icon: FileText, label: "Invoices",},
  { icon: Package, label: "Inventory",  },
  { icon: Users, label: "Labor",  },
  { icon: TrendingUp, label: "Reports",},
  { icon: Bot, label: "AI Assistant",  },
];
function Sidebar({sideBarShow, setSideBarShow}) {
    const [darkmode, setDarkmode] = useState(localStorage.getItem('theme') === "light");
  useEffect(()=>{
    if(darkmode){
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme','dark');
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme','light')
    }
  },[darkmode]);
  return (
    <div className={`${!sideBarShow ? 'w-70' : 'w-0'} space-y-6 transition-all z-999 duration-300 min-h-screen absolute border-r border-gray-500 top-0 left-0 bg-[#23201b]`}>
        {!sideBarShow && (
            <div className='flex items-center justify-between border-b border-gray-500 px-4 py-2'>
                <div className=' flex items-center justify-center rounded  bg-amber-500 text-white w-8 h-8'><ChefHat /></div>
                <div className='px-5 '>
                    <h3 className='text-xl text-slate-200 '>TableBooks</h3>
                    <span className='text-gray-400 text-sm'>Restaurant Accounting</span>
                </div>
            
                <button onClick={()=>setSideBarShow(!sideBarShow)} className='w-8 h-8 flex justify-center items-center rounded border border-gray-400 text-slate-200'><X/></button>
        
            </div>
        )}
        {
          !sideBarShow &&  (  navItems.map((item, index)=>{
                return <div key={index} className='px-3 flex items-center mx-3 rounded-xl text-slate-300 transition-all duration-300 hover:bg-amber-300 space-x-2 text-xl font-semibold hover:text-slate-700 hover:shadow-xs hover:shadow-amber-400 '>
                            <div><item.icon/></div>
                            <span>{item.label}</span>
                        </div>
            }))
        }
        {
            !sideBarShow && (
                <div className='absolute bottom-0 border-t border-slate-600 w-70 '>
                    <div className='flex p-4 items-center text-slate-400 text-xl space-x-3 '>
                        <Settings className='w-8 h-8'/>
                        <span className='font-medium '>Setting</span>
                    </div>
                    <button onClick={()=> setDarkmode(!darkmode)} className='flex items-center w-full space-x-3 p-4 text-slate-300 text-lg border-t border-gray-600'>
                        {
                            darkmode ?(
                            <> 
                                <Sun className='w-5 h-5'/> 
                                <span>Light Mode</span>
                            </>):(
                            <>
                                <Moon className='w-5 h-5'/>
                                <span>Dark Mode</span>
                            </>
                                )
                        }
                    </button>
                    <div className='bg-[#2f2920] rounded-xl  m-1 mr-3 p-4 '>
                        <p className='text-gray-400'><span className='text-2xl'>$</span> Today's Revenue</p>
                        <span className='text-white text-2xl font-medium'>$4,285</span>
                        <p className='flex text-green-700 font-medium text-lg'><ArrowUpRight/>+12% vs yesterday</p>
                    </div>
                </div>
            )
        }
    </div>
   
  )
}

export default Sidebar
