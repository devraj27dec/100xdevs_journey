/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import { CountContext } from "./context/CountContext"

// Context Api -: teleport props from one componet to another without passing it down the chain
function App() {
  const [count , setCount] = useState(0)

  // wrap anyone that wants the teleport value inside a provider
  return (
    <>
      <h1>Welcome to React App</h1>
      <div>
        <CountContext.Provider value={count}>
          <Count setCount={setCount}/>
        </CountContext.Provider>
      </div>
    </>
  )
}

function CounterRender(){
  let count = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Count({setCount}) {
  let count = useContext(CountContext)
  return (
    <>  
    <div style={{fontSize:"30px"}}>
      <CounterRender count={count}/>
    </div>
      <Buttons count={count} setCount={setCount}/>
    </>
    
  )
}

function Buttons({setCount}) {
  let count = useContext(CountContext)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  )
}

export default App
