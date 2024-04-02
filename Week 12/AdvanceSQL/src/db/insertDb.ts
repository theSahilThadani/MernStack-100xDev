import {Client} from 'pg';
const clinet =  new Client({
    connectionString:"postgresql://theSahilThadani:IgKE4zajTkS2@ep-square-limit-90874182.us-east-2.aws.neon.tech/BackendMaster?sslmode=require"
})

interface accounts {
    username:string,
    email:string,
    password:string,
}

async function InsertToDb(Accounts:accounts) {
    try {
        await clinet.connect();
        const {username,email,password} = Accounts;
        const Inserquery = 'INSERT INTO accounts (username,email,password) VALUES ($1,$2,$3)';
        const VALUE = [username,email,password];
        const res  = await clinet.query(Inserquery,VALUE);
        console.log("Insertion Completed response: " + res);
    } catch (e) {
        console.log("Insertion Failed error: "+e)
    }finally{
        await clinet.end(); //close connection
    }
}
const user = {
    username:'theSahilThadani',
    email:'SahilThadani@gmail.com',
    password:'Sahil@1234',
}
InsertToDb(user);