import { atom, selector } from "recoil";

export const networkAtom = atom({
    key:"networkAtom",
    default: 104
})
export const jobsAtom = atom({
    key:"jobsAtom",
    default: 0
})
export const notficationAtom = atom({
    key:"notficationAtom",
    default: 12
})
export const messageAtom = atom({
    key:"messageAtom",
    default: 0
})



export const totalNotficationSelector = selector({
    key:"totalNotficationSelector",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom)
        const jobsAtomCount = get(jobsAtom)
        const notificationsAtomCount = get(notficationAtom)
        const messageAtomCount = get(messageAtom)
        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messageAtomCount
    }
})