import React from 'react'
import Die from '../app/components/Die.jsx'

export default function App() {
  const [dicez, setDicez] = React.useState(genDice())

  function genDice() {
    const nArr = []
    for (let i = 1; i <= 10; i++) {
      nArr.push({value: Math.floor(Math.random()*6+1), held: false, key: i});
    }
    return nArr
  }

  const dice = dicez.map(die => <Die value={die.value} held={die.held} key={die.key}/>)
  function diceRoll() {
    setDicez(genDice())
  }

    return (
      <section className='main-container'>
        <div className='dice-container'>
          {dice}
        </div>
        <button onClick={diceRoll} className='roll-btn'>ROOOOLL</button>
      </section>
    )
}
