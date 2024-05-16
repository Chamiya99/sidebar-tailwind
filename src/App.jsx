import './App.css'
import SideBarNew, { SidebarIems } from './Components/Sidebar/SideBarNew'
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
}  from  'lucide-react'



function App() {
  

  return (
    <>
    <main className='App'>
      <SideBarNew 
      logo='https://img.logoipsum.com/243.svg' 
      avatar='https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Chamika+Heshan'
      userName='Chamika Heshan'
      userEmail='chamikaheshan@gmail.com'
      >
        <SidebarIems icon={<LayoutDashboard size={20}/>} text='DashBoard' alert/>
        <SidebarIems icon={<BarChart3 size={20}/>} text='Users' active/>
        <SidebarIems icon={<UserCircle size={20}/>} text='Statistics' />
        <SidebarIems icon={<Boxes size={20}/>} text='Inventory' />
        <SidebarIems icon={<Package size={20}/>} text='Orders' alert/>
        <SidebarIems icon={<Receipt size={20}/>} text='Billing' />
        <hr className='my-3'/>
        <SidebarIems icon={<Settings size={20}/>} text='Settings' />
        <SidebarIems icon={<LifeBuoy size={20}/>} text='Help'/>
      </SideBarNew>

    </main>
    </>
  )
}

export default App
