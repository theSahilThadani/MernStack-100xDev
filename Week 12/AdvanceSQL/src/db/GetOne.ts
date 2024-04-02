import { Client } from "pg";

async function Getone(username:string) {
    const client = new Client({
        connectionString:"postgresql://theSahilThadani:IgKE4zajTkS2@ep-square-limit-90874182.us-east-2.aws.neon.tech/BackendMaster?sslmode=require"
    })

    try {
        await client.connect();
        const queryGetOne = 'SELECT * FROM accounts WHERE username = $1'
        const values = [username];
        const res = await client.query(queryGetOne,values);
        console.log(res.rows);
    } catch (e) {
        console.log(e);
    }
    finally{
        await client.end();
    }
}
Getone('theSahilThadani');