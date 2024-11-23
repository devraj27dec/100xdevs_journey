import { useEffect, useState } from "react"


export const UseOnline = () => {

  const [isonline , setIsOnline] = useState(window.navigator.onLine)
  
  useEffect(() => {
    window.addEventListener("online" , () => {
        setIsOnline(true)
    })
    window.addEventListener("offline" , () => {
        setIsOnline(false)
    })
  })
  
  return isonline
}

export default UseOnline