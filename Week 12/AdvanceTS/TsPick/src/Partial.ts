interface User {
    id:number,
    name:string,
    email:string,
    CratedAt:Date,
    password:string,
    age:string
}
// Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
type updatePartical = Partial<User>

function updateUser(updatedProps: updatePartical) {
    // hit the database tp update the user
    // now update what is need to update in db like email,pass etc particialy
}
updateUser({})