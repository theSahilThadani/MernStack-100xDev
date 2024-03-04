import { atomFamily, selectorFamily } from 'recoil';
import axios from 'axios';
export const todoAtomFamily = atomFamily({
    key: 'todoAtomFamily',
    default: selectorFamily({
        key: 'todoSelectorFamilt', 
        get: (id)=> async ({get}) => {
            const response = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            return response.data.todo
        }
    })    
})