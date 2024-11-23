/* eslint-disable react/prop-types */
import { useTodo } from "./Hooks/CustomHooks"

function App() {
  const {todos , loading}= useTodo(5)

  if(loading){
    return <div>
      Loading...
    </div>
  }
  
  return (
    <>
      {todos.map((todo) => <Track key={todo.id} todo={todo}/>)}
    </>
  )
}

function Track ({todo}) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}
export default App
