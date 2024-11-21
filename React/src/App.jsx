import { RecoilRoot , useRecoilState} from "recoil"; 
// import { jobsAtom, messageAtom, networkAtom, notficationAtom, totalNotficationSelector } from "./store/atoms/socio";
import {notifications} from './store/atoms/socio'
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
  // const networkNotifcationCount = useRecoilValue(networkAtom)
  // const jobsCount = useRecoilValue(jobsAtom)
  // const notificationsCount = useRecoilValue(notficationAtom)
  // const msgCount = useRecoilValue(messageAtom)
  
  // const totalNotficationCount = notificationsCount + jobsCount + msgCount + networkNotifcationCount


  // useMemo 
  // const totalNotficationCount = useMemo(() => {  
  //   return notificationsCount + jobsCount + msgCount + networkNotifcationCount
  // },[notificationsCount , jobsCount , msgCount , networkNotifcationCount])

  // selector 
  // const totalNotficationCount = useRecoilValue(totalNotficationSelector)


  // async queries 

  // eslint-disable-next-line no-unused-vars
  const [networkCount  ,setNetworkCount] = useRecoilState(notifications)


  return (
    <div>
      <button>Home</button>
      <button >My Network {networkCount.network}</button>
      <button>jobs {networkCount.jobs}</button>
      <button >notifications {networkCount.notifications}</button>
      <button>msg {networkCount.messages}</button>
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


