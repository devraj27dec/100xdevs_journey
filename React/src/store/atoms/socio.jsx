import axios from "axios";
import { atom, selector } from "recoil";

// export const networkAtom = atom({
//     key:"networkAtom",
//     default: 104
// })
// export const jobsAtom = atom({
//     key:"jobsAtom",
//     default: 0
// })
// export const notficationAtom = atom({
//     key:"notficationAtom",
//     default: 12
// })
// export const messageAtom = atom({
//     key:"messageAtom",
//     default: 0
// })


export const notifications = atom({
    key:"networkAtom",
    default: selector({
        key:"networkAtomSelector",
        get: async() => {
            const res = await axios.get("http://localhost:3000/notifications")
            return res.data
        }
    })  
})


export const totalNotficationSelector = selector({
    key:"totalNotficationSelector",
    get: ({get}) => {
        // const networkAtomCount = get(networkAtom)
        // const jobsAtomCount = get(jobsAtom)
        // const notificationsAtomCount = get(notficationAtom)
        // const messageAtomCount = get(messageAtom)
        // return networkAtomCount + jobsAtomCount + notificationsAtomCount + messageAtomCount
        
        
        const allnotifications = get(notifications)

        return allnotifications.jobs + allnotifications.messages + allnotifications.network + allnotifications.notifications
    }
})