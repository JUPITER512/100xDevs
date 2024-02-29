import { selector } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, notifications } from "./atoms";

export const sumSelector=selector({
    key:"sumselector",
    get:({get})=>{
        const network=get(networkAtom)
        const notification=get(notificationAtom)
        const messaging=get(messagingAtom)
        const jobs=get(jobsAtom)

        return network + notification+jobs+messaging

    }
})

export const allNotifcations=selector({
    key:"allnotifications",
    get:({get})=>{
        const allnotificationsvar=get(notifications)
        return allnotificationsvar.jobs+allnotificationsvar.messaging,allnotificationsvar.network+allnotificationsvar.notifications
    }
})