import { useState } from "react"

function UseStateHook() {
  const [count ,setCount] = useState(0)
  return (
    <div>
        <button onClick={() => setCount((count) => count + 1)}>count {count}</button>
    </div>
  )
}

export default UseStateHook