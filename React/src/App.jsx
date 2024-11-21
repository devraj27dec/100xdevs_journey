/* eslint-disable react/prop-types */
import { RecoilRoot, useRecoilStateLoadable} from "recoil"; 
import { TodoAtomFamily } from "./store/atoms/todo";
import { Suspense } from "react";


function App() {
  return (
    <>
      <RecoilRoot>
        <Suspense fallback={"loading..."}>
        <h1>Welcome to React App</h1>
        <Todo id={1}/>
        <Todo id={2}/>
        <Todo id={3}/>
        <Todo id={3}/>
        <Todo id={4}/>
        </Suspense>
      </RecoilRoot>
      
    </>
  )
}

function Todo ({id}){
  // eslint-disable-next-line no-unused-vars
  const [todo , setTodo] = useRecoilStateLoadable(TodoAtomFamily(id))

  // {
  // contents
  // state
  // }

  if(todo.state === 'loading'){
    return <div>loading...</div>
  }else if(todo.state === "hasValue"){
    return (
      <div>
        <h2>{todo.contents.title}</h2>
        <p>{todo.contents.description}</p>
      </div>
    )
  }else if(todo.state === 'hasError'){
    return (
      <div>
        Error while fetchig data from Backend
      </div>
    )
  }
  
}

export default App

// Recoil learnings ->
// * Recoil Root
// * atom
// * useRecoilState
// * useRecoilValue
// * useSeetRecoilState
// * selector


