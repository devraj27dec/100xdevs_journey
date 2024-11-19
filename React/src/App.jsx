
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import { useMemo } from "react";


function App() {
  return (
    <>
      <RecoilRoot>
        <h1>Welcome to React App</h1>
        <Count/>
      </RecoilRoot>
    </>
  )
}


function Count() {
  console.log("count rerender")
  return <>
    <CountRender/>
    <Buttons/>
  </>
}

function CountRender() {
  let count = useRecoilValue(countAtom);
  return <>
    <b style={{ fontSize:"30px", display:"flex", padding:"10px"}}>{count} :  <CountStateRender/>
    </b>
  </>
}


function CountStateRender() {
  let count = useRecoilValue(countAtom)
  
  // if(count % 2 === 0){
  //   return <div>Even</div>
  // }else {
  //   return <div>Odd</div>
  // }

  // optimise approach

  const isEven = useMemo(() => {
    if (count < 0) return 'NAN';  // when count changes then only this line run
    return count % 2 === 0;  // when count changes then only this line run
  }, [count]);

  return (
    <div>
      {isEven === 'NAN' ? 'NAN' : isEven ? 'Even' : 'Odd'}
    </div>
  );
}

function Buttons() {
  console.log("buttons rerender")

  // const [count , setCount] = useRecoilState(countAtom)
  // it gave rerender so we fix and optimse by useSetRecoilState 


  const setCount = useSetRecoilState(countAtom)

  return <div>
    <button onClick={() => setCount(count => (count + 1))}>Increase</button>
    <button onClick={() => setCount(count => (count - 1))}>decrease</button>
  </div>
}

export default App


// Recoil learnings ->
// * Recoil Root
// * atom
// * useRecoilState
// * useRecoilValue
// * useSeetRecoilState
// * selector