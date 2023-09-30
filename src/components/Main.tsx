import Column from './Column'
import Hero from './Hero'
import Navbar from '@/components/Navbar'

import { card } from './Card'


function Main({ open, setOpen} : { open: boolean, setOpen: (n:boolean) => void}) {
  return (
    <div className={`${ open ? 'blur-sm lg:filter-none' : ''}`}>
      <Navbar open={open} setOpen={setOpen}/>
      <Hero />
      <div  className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mx-4'>
        <Column label='To-Do List' value={24} cards={todos}/>
        <Column label='In Progress' value={2} cards={inProgress}/>
        <Column label='Done' value={3} cards={done}/>
        <Column label='Revised' value={0} cards={revised}/>
      </div>
    </div>
  )
}

export default Main

const todos: card[] = [
  {
    title: 'Important',
    descp: 'Create sign up sheet for holiday student/parent conferences',
    members: 4,
    dueDays: 4,
    progress: 25,
    color: 'yellow'
  },
  {
    title: 'Instructor Meeting',
    descp: 'Plan holiday demonstration program. Create online.',
    members: 3,
    dueDays: 4,
    progress: 35,
    color: 'pink'
  },
  {
    title: 'Database',
    descp: 'Determine how many boards need to be ordered for testing and demo.',
    members: 2,
    dueDays: 4,
    progress: 15,
    color: 'green'
  },
];
const inProgress: card[] = [
  {
    title: 'Vedio',
    descp: 'Create sparing tutorial vedio for the weekly class',
    members: 3,
    dueDays: 4,
    progress: 80,
    color: 'cyan'
  },
  {
    title: 'BUG FIXING',
    descp: 'Payment gateway needs reauthorization.',
    members: 4,
    dueDays: 4,
    progress: 95,
    color: 'orange'
  }
];
const done: card[] = [
  {
    title: 'BUG FIXING',
    descp: 'Action button needed for Google Maps visits',
    members: 4,
    dueDays: 4,
    progress: 100,
    color: 'orange'
  },
  {
    title: 'Database',
    descp: 'Update new instructor photos.',
    members: 4,
    dueDays: 4,
    progress: 100,
    color: 'green'
  },
  {
    title: 'Instructor Meeting',
    descp: 'Review/correct yellow belt techniques.',
    members: 4,
    dueDays: 4,
    progress: 100,
    color: 'pink'
  },
];
const revised: card[] = [];