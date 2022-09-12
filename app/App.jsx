import React from 'react'
import Die from '../app/components/Die.jsx'
import Confetti from '../app/components/Confetti.jsx'

export default function App() {
  const [dicez, setDicez] = React.useState(genDice())
  const [tenzies, setTenzies] = React.useState(false)

  const text = tenzies ? "Start ovah" : "R'n'Roll"

  React.useEffect(() => {
    const dieValue = dicez[0].value
    dicez.every(die => die.held) &&
    dicez.every(die => die.value === dieValue) &&
    setTenzies(true)
  }, [dicez])

  function holdDice(id) {
    setDicez(prevDicez => prevDicez.map(die => {
      return (die.id === id) ? ({...die, held: !die.held}) : die
    }))
  }

  function genDie(i) {
    return {
      value: Math.floor(Math.random()*6+1),
      id: i,
      key: i,
      held: false
    }
  }

  function genDice() {
    const nArr = []
    for (let i = 0; i < 10; i++) {
      nArr.push(genDie(i));
    }
    return nArr
  }

  const dice = dicez.map(die =>
    (<Die
      hold={holdDice}
      value={die.value}
      held={die.held}
      holdDice={() => holdDice(die.id)}
      key={die.key}
    />)
  )

  function diceRoll() {
    !tenzies &&
    setDicez(prev => prev.map((die, i) => {
      return die.held ? die : genDie(i)
    })) ||
    tenzies &&
    setDicez(genDice());
    setTenzies(false)
  }

    return (
      <section className='main-container'>
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='dice-container'>
          {dice}
        </div>
        <button onClick={diceRoll} className='roll-btn'>{text}</button>
      </section>
    )
}
