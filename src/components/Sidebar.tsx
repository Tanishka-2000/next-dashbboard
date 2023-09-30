import MenuItem from "./MenuItem"


function Sidebar({ open, setOpen} : {open:boolean, setOpen: (n:boolean) => void}) {

  function closeSidebar() {
    setOpen(false)
  }

  return (
    <div className={`basis-72 shrink-0 min-h-screen bg-layer drop-shadow-lg transition-all ease-in-out duration-200 fixed z-10 lg:static ${open ? '' : ' -left-72 lg:-ml-72'}`}>
        <div className="flex items-center gap-x-6 p-8">
            <p className="grow text-center text-2xl text-white">weframetech</p>
            <button className="bg-transparent outline-none border-none"
             onClick={closeSidebar}>
                <img src='/menu.png' />
            </button>
        </div>
        <div className="pt-2 pl-6 ">
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