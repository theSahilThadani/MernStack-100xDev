interface User {
    Name:string,
    surname:string,
    age:number
}

const filteration = (users:User[]) => {
    users.map((user:User)=>{
        console.log(`Hey ${user.Name} how are you!`)
        if(user.age >= 18) console.log(`You can Book apponint ment for driving text Mr. ${user.Name}`)
        else console.log(`Sorry to inform you Mr. ${user.Name} you are not aligble candidate to give driving test`)
})
}