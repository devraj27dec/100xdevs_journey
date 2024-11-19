import {  useEffect, useRef} from 'react'

// useRef => It give reference to DOM elements

function UseRefHook() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(divRef.current)
      divRef.current.innerHTML = "10"
    }, 5000);
  }, [])

  const incomeTax = 20000;

  return (
    <div>
        hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default UseRefHook