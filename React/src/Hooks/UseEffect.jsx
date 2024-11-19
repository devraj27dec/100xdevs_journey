/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import axios from 'axios'


function UseEffecthook() {
    const [todos , setTodos] = useState([])

    // why use fetch in useffect -> because it avoids rendering when fetching api it only runs or get data ones while in normal function it rerenering again and again.

    // or 

    //  helps avoid unnecessary re-renders when fetching data from an API. It ensures that the data is fetched only once, while in a normal function, the component might re-render repeatedly.

    useEffect(() => {
        axios.get('http://localhost:3000/todos')
        .then(function(res) {
            setTodos(res.data.todos)
        }).catch((err) =>{
            console.log(err)
        })
    },[])

  return (
    <>
        {todos.map((todo) => {
            return (
                <div key={todo.id}>
                    <Todo title={todo.title} description={todo.description}/>
                </div>
            )
        })}
    </>
  )
}

function Todo ({title , description}) {
    return(
        <>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </>
    )
}

export default UseEffecthook