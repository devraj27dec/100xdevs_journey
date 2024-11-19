/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import { CountContext } from "./context/CountContext"

// Context Api -: teleport props from one componet to another without passing it down the chain



// steps to such follow context api
// define the context
// provide the context in parent component 
// & use the context in child component where u want

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
  console.log("rendred count")
  // let count = useContext(CountContext)
  return (
    <>  
    <div style={{fontSize:"30px"}}>
      <CounterRender/>
    </div>
      <Buttons setCount={setCount}/>
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


// why do you use the context api
// To make rerendering more preformant ans -> no -> for solving this problem introduce about state management libraries like redux , recoil

// To make syntax cleaner get rid of prop drilling -> yes



// short coming or cons fo context api
// it doesn't fix the re-rendering of child components as we seen in counter app even components that don’t use the context still re-render whenever the context value changes. This can lead to performance issues, especially in large apps.




// Ques => Is Rect context use props drilling 
// No, the React Context API does not use prop drilling under the hood. Prop drilling is the process of passing data through multiple layers of nested components. It over come the props drilling concept because props drilling good to send the data through props those are near components which we see in tree structure but if you want to send the data or get then context is defined how it is see. The React Context API is a built-in API that lets you pass data from a parent component to its descendants without prop drilling. Instead, it allows a React app to produce global variables that can be passed around. The Context API is more advantageous when dealing with deeply nested components because it provides a direct way for child components to access the context without passing props through intermediate components.

