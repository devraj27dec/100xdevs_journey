import { useEffect, useState } from "react"

const Todos = () => {

  const [todos , setTodos] = useState([])


  useEffect(() => {

    fetch('https://sum-server.100xdevs.com/todos')
    .then(async (res) => {
        const json = res.json();
        setTodos(json.todos)
    }).catch((err) => {
        console.log(err)
    })
  },[])

  return (
    <div>
        {todos.map((todo) => (
            <Todo key={todo.id} title={todo.title} description={todo.description}/>
        ))}
    </div>
  )
}

function Todo({title , description}) {
    <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>
}

export default Todos