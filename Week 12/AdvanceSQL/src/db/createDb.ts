import {Client} from 'pg'

const client = new Client({
    connectionString:"postgresql://theSahilThadani:IgKE4zajTkS2@ep-square-limit-90874182.us-east-2.aws.neon.tech/BackendMaster?sslmode=require"
})

//creating on db 

async function dbcreate() {
    try {
        await client.connect(); //create connection to db instance.
    const result = await client.query(`
        CREATE TABLE Accounts (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `);
    console.log(result.command);
    } catch (error) {
        console.log(error + " : Data not Added Try again...")
    }
    finally{
        await client.end(); // Close the client connection
    }
}
dbcreate();