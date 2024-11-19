import { useState } from "react"




const Reconcillation = () => {
  const [count , setCount]= useState(0)

  return (
    <div>
        <button onClick={() => setCount(count => count + 1
        )}>Count {count}</button>
    </div>
  )
}

export default Reconcillation