import Card, {card} from "./Card"

function Column({ label, value, cards}: { label: string, value: number, cards?: card[]}) {
  return (
    <div>
        <div className="flex justify-between p-6 items-center">
            <p className="text-xl text-white font-bold">{ label } ({value})</p>
            <img src='/btnAdd.png' />
        </div>
        { cards?.map(card => 
            <Card
             key={card.title}
             title={card.title}
             descp={card.descp}
             progress={card.progress}
             members={card.members}
             dueDays={card.dueDays}
             color={card.color}
            />)
        }
        {
            cards?.length === 0 &&
            <div className="bg-card p-8 rounded-2xl my-6">
                <div className="border-dashed border-4 border-active p-4 bg-body rounded-2xl">
                    <p className="text-center text-lg text-purple">Move card here</p>
                </div>
            </div>
        }
    </div>
  )
}

export default Column