import Members from "./Members"

export interface card {
    title: string,
    descp: string,
    progress: number,
    members: number,
    dueDays: number,
    color: string,
}

function getBgColor(color: string){
    switch(color){
        case 'yellow': return 'bg-yellow';
        case 'pink': return 'bg-pink ';
        case 'green': return 'bg-green';
        case 'cyan': return 'bg-cyan ';
        case 'orange': return 'bg-orange ';
    }
}
function getTxtColor(color: string){
    switch(color){
        case 'yellow': return 'text-yellow';
        case 'pink': return 'text-pink';
        case 'green': return ' text-green';
        case 'cyan': return 'text-cyan';
        case 'orange': return 'text-orange';
    }
}

function Card({ title, descp, progress, members, dueDays, color}: card) {
  return (
    <div className="bg-card p-8 rounded-2xl my-6">
        <p className="flex gap-x-4 items-center">
            <span className={`block w-3 h-3 rounded-full ${getBgColor(color)}`}></span>
            <span className={`text-base ${getTxtColor(color)} font-semibold`}>{ title }</span>
            <img className="ml-auto" src='/dots-horz.png'/>
        </p>

        <p className="w-80 text-lg text-white my-4 font-sembold white-space-wrap">{descp}</p>

        <div className="w-full h-2 bg-dark-grey rounded-lg">
            <div className={`h-2 ${getBgColor(color)} rounded-lg`} style={{width: progress + '%'}}></div>
        </div>

        <div className="mt-6 flex justify-between items-center">
            <Members value={members} lastValue="" />
            <p className="flex items-center gap-x-2 text-grey"><img src="/clock.png" /> Due in {dueDays} days</p>
        </div>
    </div>
  )
}

export default Card