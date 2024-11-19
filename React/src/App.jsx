// import Todos from "./assigments/Todos"

import {lazy , Suspense } from "react"
import { BrowserRouter as Router , Routes , Route, useNavigate } from "react-router-dom"


const Dashboard = lazy(() => import("./components/Dashboard")) 
const Hero = lazy(() => import("./components/Hero")) 

// import Reconcillation from "./Hooks/Reconcillation"
// import UseCallback from "./Hooks/UseCallback"
// import UseRefHook from "./Hooks/useRef"
// import UseEffecthook from "./Hooks/UseEffect"
// import UseStateHook from "./Hooks/useStata"

function App() {
  return (
    <>
      <h1>Welcome to React App</h1>
      
      {/* Routing  */}

      <Router>
        <AppBar/>
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
          <Route path="/" element={<Suspense fallback={'loading...'}><Hero/></Suspense>}/>
        </Routes>
      </Router>









      {/* <CardWrapper>
        <TextComponent title="hi from text component 1"/>
      </CardWrapper >
      <CardWrapper>
        <TextComponent title="hi from text component 2"/>
      </CardWrapper> */}

      {/* <Todos/> */}


      {/* Hooks */}
      {/* <UseStateHook/> */}
      {/* <UseEffecthook/> */}
      {/* <Reconcillation/> */}
      {/* <UseRefHook/> */}

      {/* <UseCallback/> */}
    </>
  )
}

// function TextComponent({title}) {
//   return <div>
//     {title}
//   </div>
// }

// function CardWrapper ({children}) {
//   return <div style={{ border: "2px solid black" , padding: 30}}>
//     {children}
//   </div>
// }


function AppBar() {

  const navigate = useNavigate()
  
  return (
    <div>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
      <button onClick={() => navigate('/')}>Hero</button>
  </div>
  )
}


export default App
