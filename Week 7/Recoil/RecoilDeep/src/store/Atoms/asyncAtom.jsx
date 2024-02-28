import { selector, atom } from 'recoil'
import axios from 'axios'
export const NotificationsAtom = atom({
    key:"NotificationsAtom",
    default:selector({
        key:"serverfetch",
        get:async () =>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})