/* eslint-disable react/prop-types */
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import { useContext } from "react"
import { createContext, useState } from "react"

const SidebarContext = createContext()
export default function SideBarNew({children , logo ,avatar ,userName , userEmail}) {
    const [expaned, setexpaned] = useState(true)
  return (
    <aside className="h-screen">
        <nav className="flex flex-col pl-1 bg-white border shadow-sm rounded-2xl h-fit w-fit">
            <div className="flex items-center justify-between p-4 pb-2">
                <img src={logo} 
                className={`overflow-hidden transition-all ${expaned ? "w-32":"w-0" }`} 
                alt="" />
                <button onClick={() => setexpaned(curr => !curr) } className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                   {expaned?<ChevronFirst/>:<ChevronLast/> }
                </button>
            </div>
            <SidebarContext.Provider value={{expaned}}>
                <ul className="flex-1 px-3">{children}</ul>
            </SidebarContext.Provider>

            <div className="flex p-3 border-t">
                <img src={avatar}
                className="w-10 h-10 rounded-md"
                alt="" />
                <div className={`
                    flex items-center justify-between 
                    overflow-hidden transition-all ${expaned ? "w-52 ml-3":"w-0" }
                `}>
                    <div className="leading-4">
                        <h4 className="font-semibold ">{userName}</h4>
                        <span className="text-xs text-gray-600 ">{userEmail}</span>
                    </div>
                    <MoreVertical size={20}/>
                </div>
            </div>
        </nav>
    </aside>
  )
}

export function SidebarIems({icon , text , active , alert}) {

    const{expaned} = useContext(SidebarContext)

    return(
        <li className={`ralative flex items-center  py-2 px-3 my-1 
            font-medium rounded-md cursor-pointer 
            transition-colors group
            ${
                active
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-400 text-indigo-800 "
                : "hover:bg-indigo-50 text-gray-600 "
            } 
         `}   
         >

           {icon} 
           <span className={`overflow-hidden transition-all ${expaned ? "w-52 ml-3":"w-0"}`}>{text}</span>
           {alert &&  (
                <div className={` relative right-2  w-2 h-2 rounded bg-indigo-400 ${ expaned ? "":"-top-2 left-0.5"}`}/>
            )}

            {!expaned && ( <div  className={`
              absolute left rounded-md px-2 py-1 ml-16
              bg-indigo-100 text-indigo-800 text-sm 
               invisible opacity-20 -translate-x-3 transition-all
               group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}>{text}</div>)}
        </li>
    )
}