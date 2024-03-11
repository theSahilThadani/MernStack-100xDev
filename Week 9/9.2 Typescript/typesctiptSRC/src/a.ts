function HOF (fn:()=>void) {
    return fn()
}
const number = HOF(()=>{return 787})
console.log(number)