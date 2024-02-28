import {TodoData} from "./TodoData";
import {atomFamily} from 'recoil'
export const AtomFamily = atomFamily({
    key:'AtomFamily',
    default: id => {
        return TodoData.find((e)=>(e.id===id))
    }
})