interface User  {
    name: string,
    surname: string,
    age:number,
    email?:string //when we use '?' means the field is optional in interface 
}
const user = {
    name:"sahil",
    surname:'thadani',
    age:18, 
}

const isLigal = (user:User) => {
    if(user.age <= 18) return 'ligal'
    else return 'inligal'
}