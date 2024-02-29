import axios from "axios";
import { atom, selector } from "recoil";

export const networkAtom=atom({
    key:"network",
    default:102
})
export const jobsAtom=atom({
    key:"job",
    default:0
})
export const notificationAtom=atom({
    key:"notification", 
    default:12
})
export const messagingAtom=atom({
    key:"messaging",
    default:12
})


export const notifications=atom({
    key:"TotalNotifications",
    default:selector({
        key:"networkAtomSelector",
        get:async({get})=>{
            const res=await axios.get("https://sum-server.100xdevs.com/notifications")
            console.log(res.data)
            return res.data
        }
    })
})