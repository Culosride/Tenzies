import React from 'react'
import Die from '../app/components/Die.jsx'

export default function App() {
  const [dicez, setDicez] = React.useState(genDice())

  function holdDice(id) {
    setDicez(prevDicez => prevDicez.map(die => {
      return (die.id === id) ? ({...die, held: !die.held}) : die
    }))
  }

  function genDice() {
    const nArr = []
    for (let i = 1; i <= 10; i++) {
      nArr.push({value: Math.floor(Math.random()*6+1), id: i, held: false, key: i});
    }
    return nArr
  }

  const dice = dicez.map(die => <Die hold={holdDice} value={die.value} held={die.held} holdDice={() => holdDice(die.id)} key={die.key}/>)

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
