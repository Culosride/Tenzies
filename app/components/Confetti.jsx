import React from 'react'
import Confetti from 'react-confetti'

export default () => {
  const [size, setSize] = React.useState([window.innerWidth, window.innerHeight])

  React.useEffect(() => {
    function resize() {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener("resize", resize)

    return function() {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <Confetti
      width={size[0]}
      height={size[1]}
    />
  )
}
