interface btn {
  classNames?: string,
  image?: string,
  text: string,
  transparent?: boolean,
  light?: boolean
}

function Button({ classNames='', image, text, transparent, light }: btn) {
  return (
    <button className={`flex items-center outline-none ${transparent ? 'bg-transparent border border-active' : light ? 'bg-active border-none' : 'bg-purple border-none'} rounded-2xl text-white gap-x-2 py-3 px-6 ${classNames}`}>
        { image && <img src={`/${image}.png`} />}
        <p className="text-base font-bold">{text}</p>
    </button>
  )
}

export default Button