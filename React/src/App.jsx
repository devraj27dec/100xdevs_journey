/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'

let counter = 0
function App() {

  const [todos , setTodos] = useState([
    { 
      id:1,
      title:"go to gym", 
      description:"go to gym 5 - 7"
    },
    {
      id:2,
      title:"go to college", 
      description:"go to gym 10 - 2"
    },
    {
      id:3,
      title:"go to sleep", 
      description:"go to gym sleep after dinner"
    }
  ])


  function addTodo() {
    // setTodos([...toods , {
    //   id:4,
    //   title:"go to dinner",
    //   description:"go to dinner before sleep"
    // }])


    const newTodos = []
    for (let i = 0; i < todos.length; i++) {
      newTodos.push(todos[i])
    }
    newTodos.push({
      id:counter++,
      title:"go to dinner",
      description:"go to dinner before sleep"
    })
    setTodos(newTodos)
  }


  return (
    <>
      <h1>Welcome to React App</h1>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} title={todo.title} description={todo.description}/>
        )
      })}
    </>
  )
}


function Todo({title , description}) {
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
}
export default App
