/* eslint-disable react/prop-types */
import { useState } from "react"

// Prop drilling 
function App() {

  const [count , setCount] = useState(0)

  return (
    <>
      <h1>Welcome to React App</h1>
      <div>
        <Count count={count}/>
        <Buttons count={count} setCount={setCount}/>
      </div>
    </>
  )
}


function Count({count}) {
  return (
    <div style={{fontSize:"30px"}}>
      {count}
    </div>
  )

}

function Buttons({count , setCount}) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  )
}

export default App
