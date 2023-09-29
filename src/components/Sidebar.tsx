import { FiMenu } from "react-icons/fi"
import MenuItem from "./MenuItem"


function Sidebar() {
  return (
    <div className="basis-80 min-h-screen bg-layer drop-shadow-lg">
        <div className="flex items-center  p-8">
            <p className="grow text-center text-2xl text-white">weframetech</p>
            <p className="text-xl text-active"><FiMenu /></p>
        </div>
        <div className="pt-2 pl-6">
            <p className="uppercase text-base font-bold text-grey py-4">main menu</p>
            {
                menuItems.map(item => 
                <MenuItem
                 key={item.name}
                 name={item.name}
                 disabled={item.disabled}
                 badge={item.badge}
                 list={item.list}
                 isPurple={item.isPurple}
                 />)
            }
        </div>
    </div>
  )
}

export default Sidebar

const menuItems = [
    { name: 'Dashboard', disabled: true },
    { name: 'Email', disabled: true, badge:17, list:true },
    { name: 'Chat' },
    { name: 'Kanban', list: true, isPurple: true },
    { name: 'Contact', badge: 'NEW' },
    { name: 'Calender' },
    { name: 'Courses', list: true },
    { name: 'Shop' },
    { name: 'Invoices', list: true },
    { name: 'Settings' }
];