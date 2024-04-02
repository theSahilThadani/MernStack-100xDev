import { Client } from "pg";

async function CreateTableAdresses() {
    const client = new Client(
        {
            connectionString:"postgresql://theSahilThadani:IgKE4zajTkS2@ep-square-limit-90874182.us-east-2.aws.neon.tech/BackendMaster?sslmode=requirez"
        }
    )
    try {
        await client.connect();
        const queryToCreate = ` CREATE TABLE ADDRESSES (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            street VARCHAR(200) NOT NULL,
            pincode VARCHAR(10) NOT NULL,
            createAT TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES accounts(id) ON DELETE CASCADE 
        );`
        const res = await client.query(queryToCreate);
        console.log(res.command);
    } catch (error) {
        console.log(error + " : Data not Added Try again...")
    }
    finally{
        client.end();
    }
}
CreateTableAdresses();