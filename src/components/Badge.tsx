import React from 'react'

function BadgeIcon({ icon, value}: {icon: string, value: number}) {
  return (
    <div className='relative'>
        <img src={`/${icon}.png`} />
        <div className={`rounded-full w-7 h-7 grid place-content-center absolute -top-4 -right-4 text-black ${value > 0 ? 'bg-cyan' : 'bg-pink'}`}>{ value > 0 ? value : '!' }</div>
    </div>
  )
}

export default BadgeIcon