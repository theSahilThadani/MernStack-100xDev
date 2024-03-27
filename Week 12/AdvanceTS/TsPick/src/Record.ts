interface UserOne {
    id:number,
    name:string
}

type userObj = Record<string,UserOne>;

const UsersObjects:userObj = {
    "one":{id:9090,name:"sahil"},
    'xyz789': { id: 789, name: 'Jane Doe' },
} 

//or we can use with another method
type userobj2 = {[key:string]:UserOne};

const users: userobj2 = {
    'abc123': { id: 9090, name: 'John Doe' },
    'xyz789': { id: 9090, name: 'Jane Doe' },
  };
  