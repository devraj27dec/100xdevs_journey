
import { RecoilRoot, useRecoilValue} from "recoil";
import { jobsAtom, messageAtom, networkAtom, notficationAtom, totalNotficationSelector } from "./store/atoms/socio";
// import { useMemo } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <h1>Welcome to React App</h1>
        <SocioNav/>
      </RecoilRoot>
      
    </>
  )
}

function SocioNav() {
  const networkNotifcationCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const notificationsCount = useRecoilValue(notficationAtom)
  const msgCount = useRecoilValue(messageAtom)
  
  // const totalNotficationCount = notificationsCount + jobsCount + msgCount + networkNotifcationCount


  // useMemo 
  // const totalNotficationCount = useMemo(() => {  
  //   return notificationsCount + jobsCount + msgCount + networkNotifcationCount
  // },[notificationsCount , jobsCount , msgCount , networkNotifcationCount])

  // selector 
  const totalNotficationCount = useRecoilValue(totalNotficationSelector)


  return (
    <div>
      <button>Home</button>
      <button >My Network {(networkNotifcationCount >= 100) ? "99+" : (networkNotifcationCount) }</button>
      <button>jobs {jobsCount > 0 ? jobsCount : ""}</button>
      <button >notifications {notificationsCount}</button>
      <button>msg {msgCount > 0 ? msgCount : ""}</button>
  
      <button>Me {totalNotficationCount}</button>
    
    </div>
  )
}

export default App

// Recoil learnings ->
// * Recoil Root
// * atom
// * useRecoilState
// * useRecoilValue
// * useSeetRecoilState
// * selector


