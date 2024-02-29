import React, { useEffect } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import axios from 'axios'
import { notificationAtom, notifications } from './store/atoms'
import { allNotifcations, sumSelector } from './store/selector'
const App = () => {
  return (
    <div>
      <RecoilRoot>
        <MainApp></MainApp>
      </RecoilRoot>
    </div>
  )
}


const MainApp=()=>{

  const [networkCount,setNetworkCount]=useRecoilState(notifications)
  const totalNotifications=useRecoilValue(allNotifcations)
  // useEffect(()=>{
  //   axios.get("https://sum-server.100xdevs.com/notifications").then((res)=>{
  //     setNetworkCount(res.data)
  //   })
  // },[])
  return <>
    <button>Home</button>
    <button>My Network ({networkCount.network>=100?"99+":networkCount.network})</button>
    <button>Jobs {networkCount.jobs}</button>
    <button>Messaging {networkCount.messaging}</button>
    <button>Notifcations {networkCount.notifications}</button>
    <button>Me ({totalNotifications})</button>
  </>
}
export default App





// import React from 'react'
// import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
// import { notificationAtom,messagingAtom ,jobsAtom,networkAtom} from './store/atoms'
// import { sumSelector } from './store/selector'

// const App = () => {
// return (<>
// <RecoilRoot>

//   <MainApp></MainApp>
// </RecoilRoot>
// </>)
// }
// const MainApp=()=>{
//   const notifications=useRecoilValue(notificationAtom)
//   const jobs=useRecoilValue(jobsAtom)
//   const network=useRecoilValue(networkAtom)
  
//   const [messaging,setMessageAtomCount]=useRecoilState(messagingAtom)
//   const sum=useRecoilValue(sumSelector)
//   let networkCount=(network)>100?'99+':network
//   return (
//     <div>

//       <button>Home</button>
//       <button>My Network {networkCount}</button>
//       <button>Jobs {jobs}</button>
//       <button>Messaging {messaging}</button>
//       <button>Notifications {notifications}</button>
//       <button>Me({sum})</button>
//       <button onClick={()=>{
//         setMessageAtomCount(count=>count+1)
//       }}>Get new Message </button>
//     </div>
//   )
// }

// export default App
