import React from 'react'
import Badge from './Badge'

function Navbar({ open, setOpen} : { open: boolean, setOpen: (n:boolean) => void}) {
    function openSidebar() {
        setOpen(true)
    }
  return (
    <div className='bg-layer p-2 lg:px-8 lg:py-5 flex justify-between gap-x-8 items-center flex-wrap gap-y-2'>
        <button className='bg-transparent border-none outline-none' onClick={openSidebar}>
            <img className={`${open ? 'hidden' : ''}`} src='menu.png' />
        </button>

        <div className='flex max-w-md grow bg-card py-3 px-4 gap-x-4 lg:w-1/3 rounded-full'>
            <img src='/search.png' />
            <input className='bg-transparent outline-none border-none' type='text' placeholder='Search here'/>
        </div>
        <div>
            <a className='uppercase underline text-purple' href="#">other menus</a>
        </div>
        <div className='flex gap-x-8'>
            <Badge icon='bell' value={12} />
            <Badge icon='courses' value={5} />
            <Badge icon='checkbox' value={2} />
            <Badge icon='office' value={0} />
        </div>
        <div className='flex gap-x-6 bg-card rounded-full items-center p-5'>
            <img src='/united-states.png' />
            <p className='uppercase'>english</p>
            <img src='/arrow-down.png' />
        </div>
        <div className='flex items-center gap-x-6'>
            <div className='w-14 h-14 rounded-lg bg-grey'></div>
            <div>
                <p className='text-base font-bold'>Instructor Day</p>
                <p className='text-sm text-active'>Super Admin</p>
            </div>
            <img src='/arrow-down.png' />
        </div>
    </div>
  )
}

export default Navbar