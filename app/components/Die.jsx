export default function Die(props) {
  const styles = {
    backgroundColor: props.held ? "#f33dc2" : "white"
}

return (
      <div onClick={props.holdDice} className="die" style={styles}>
        <h3 className="number">{props.value}</h3>
      </div>
  )
}
