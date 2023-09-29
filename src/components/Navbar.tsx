import React from 'react'
import Badge from './Badge'

function Navbar() {
  return (
    <div className='bg-layer py-5 px-16 flex justify-between items-center'>
        <div className='flex bg-card py-4 px-8 gap-x-4 w-1/3 rounded-full'>
            <img src='/search.png' />
            <input className='bg-transparent' type='text' placeholder='Search here'/>
        </div>
        <div>
            <a className='uppercase underline text-purple' href="#">other menus</a>
        </div>
        <div className='flex gap-x-8'>.
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