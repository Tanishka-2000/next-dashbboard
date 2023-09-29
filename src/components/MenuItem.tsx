interface menuItem { 
    name: string,
    disabled?: boolean,
    list?: boolean,
    isPurple?: boolean,
    badge?: any,
}

export default function MenuItem({ name, disabled, list, isPurple, badge }: menuItem) {

  return (
    <div className={`flex py-4 pr-8 gap-x-6 items-center ${ isPurple ? 'border-r-8 border-purple': '' }`}>
        <img className="text-xl" src={`/${name.toLowerCase()}.png`} />
        <p className={`text-lg grow ${disabled ? 'text-disabled' : (isPurple ? 'text-purple font-bold' : 'text-active')}`}>{name}</p>
        { badge && <span className={`rounded-full py-1 px-2 text-sm font-bold ${isNaN(badge) ? 'bg-pink' : 'bg-cyan'}`}>{badge}</span>}
        { list && <img className="" src={`/arrow-right.png`} /> }
    </div>
  )
}
