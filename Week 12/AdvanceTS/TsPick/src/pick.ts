interface User {
    id:number,
    name:string,
    email:string,
    createdAt:Date,
}

type UserProfile = Pick<User,'email'|'name'>;

const display_user = (user:UserProfile) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
} 