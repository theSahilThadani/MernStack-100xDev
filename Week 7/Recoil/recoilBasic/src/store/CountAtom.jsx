import { atom, selector } from 'recoil'

export const CountState = atom({
    key: 'CountState',
    default: 0
})

export const CountEvenOdd = selector({
    key:'CountEvenOdd',
    get:({get}) => {
        const count = get(CountState)
        if(count%2==0) return 'it is even'
        else return 'it is odd'
    }
})

export const textState = atom({
    key: 'textState',
    default:''
})

export const charState  = selector({
    key:'charState',
    get:({get}) => {
        const text = get(textState);

        return text.length;
    }
})