/* eslint-disable react/prop-types */
import { RecoilRoot, useRecoilState} from "recoil"; 
import { TodoAtomFamily } from "./store/atoms/todo";


function App() {
  return (
    <>
      <RecoilRoot>
        <h1>Welcome to React App</h1>
        <Todo id={1}/>
        <Todo id={2}/>
        <Todo id={3}/>
        <Todo id={4}/>
      </RecoilRoot>
      
    </>
  )
}

function Todo ({id}){
  // eslint-disable-next-line no-unused-vars
  const [todo , setTodo] = useRecoilState(TodoAtomFamily(id))
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
    </div>
  )
}

export default App

// Recoil learnings ->
// * Recoil Root
// * atom
// * useRecoilState
// * useRecoilValue
// * useSeetRecoilState
// * selector


