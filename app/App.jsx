import React from 'react'
import Die from '../app/components/Die.jsx'

export default function App() {
  const nArr = []

  for (let i = 1; i <= 10; i++) {
    nArr.push(Math.floor(Math.random()*6+1));
  }
  const dice = nArr.map((die, i)=> <Die value={die} key={i}/>)

  const [dicez, setDicez] = React.useState(dice)

    return (
      <section className='main-container'>
        <div className='dice-container'>
          {dicez}
        </div>
      </section>
    )
}
