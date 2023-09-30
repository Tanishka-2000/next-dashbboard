import Button from "./Button"
import Members from "./Members"

function Hero() {
  return (
    <div className="bg-layer p-4 lg:px-10 lg:py-8 my-6 mx-2 rounded-lg">
        <div className="flex items-start gap-x-2 md:gap-x-6">
            <img src='/back-btn.png' />
            <div>
                <p className="text-2xl font-bold mb-2">School November Tasks</p>
                <p className="text-sm text-grey">Created by instructor Day on November 31, 2022</p>
            </div>
            <div className="ml-auto flex md:gap-x-4 text-xs md:text-sm items-center">
                <div>
                    <p>Centered Martial Arts</p>
                    <p>Sunnyvale, Ca</p>
                </div>
                <img className="w-14" src='companyLogo.png' />
                <img src='/dots.png' />
            </div>
        </div>
        <div className="flex pl-14 justify-between items-center flex-wrap mt-6 gap-y-8">
            <div className="flex gap-x-2 md:gap-x-6 flex-wrap gap-y-2">
                <Members value={5} lastValue="5+"/>
                
                <Button text='Invite People' image='add-friend' />
                <Button text='Private' transparent={true}/>
                <Button text='Edit' light={true}/>
                <Button text='45 comments' image='comments' transparent={true} />
            </div>
            <div className="flex gap-x-2 md:gap-x-10">
                <p className="text-base font-semibold">Total Progress 60%</p>
                <div className="w-64 h-4 bg-dark-grey rounded-full">
                    <div className="w-28 bg-purple rounded-full h-4"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero