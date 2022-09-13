export default function Die(props) {
  const styles = {
    backgroundColor: props.held ? "#f33dc2" : "white",
    backgroundPositionX: props.value === 6 && "50px" ||
    props.value === 5 && "102px" ||
    props.value === 4 && "153.5px" ||
    props.value === 3 && "205px" ||
    props.value === 2 && "-51.7px" ||
    props.value === 1 && "308.5px"
}

return (
      <div onClick={props.holdDice} className="die" style={styles}>
        <h3 className="number"></h3>
      </div>
  )
}
