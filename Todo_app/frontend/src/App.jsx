
import { useEffect, useState } from 'react'
import CreateTodo from './components/createTodo'
import Todos from './components/Todos'
import { Loader2 } from 'lucide-react'

function App() {
  const [todos , setTodos] = useState([])
  const [isLoading , setIsLoading] = useState(false)

  async function fetchTodos() {
    setIsLoading(true)
    await fetch("http://localhost:5000/todos")
    .then(async(res) => {
      const json = await res.json();
      setTodos(json.todos)
    }).catch((error) => {
      console.log(error)
    }).finally(setIsLoading(false))
  }
  useEffect(() => {
    fetchTodos()
  },[])

  return (
    <>
      {isLoading ? (
        <div className='loader-container'>
          <Loader2 className='spin_animation'/>
        </div>
      ) : (
        <>
          <CreateTodo/>
          <Todos todos={todos} />
        </>
      )}
    </>
  )
}

export default App
