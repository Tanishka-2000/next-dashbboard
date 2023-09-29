

function Members({ value, lastValue }: { value: number, lastValue?: string}) {
  return (
    <div className="flex items-center">
    { Array.from({ length: value}).map((item, i) => 
    <span key={i} className={`block w-10 h-10 -ml-2 rounded-full bg-grey border-2 border-black ${lastValue === '' ? '' : 'last:bg-pink'} text-white grid place-content-center`}>{(i+1 )=== value ? lastValue : ''}</span>
    )}
</div>
  )
}

export default Members