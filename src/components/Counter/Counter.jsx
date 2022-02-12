import { useState } from "react"

export default function Counter(){
    const [counter, setCounter] = useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}