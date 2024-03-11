import { atom } from "recoil";

export const TodoAtom = atom({
    key:'TodoAtom',
    default:[{
        id:1,
        title:"Todo1",
        des:"Hello there"
    },{
        id:2,
        title:"Todo 2",
        des:"Hello there"
    },{
        id:3,
        title:"Todo 3",
        des:"Hello there"
    }]
})
