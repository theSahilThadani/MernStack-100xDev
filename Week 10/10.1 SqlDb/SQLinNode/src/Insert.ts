import { Client } from "pg";

async function insertData(){
    const client = new Client({
        connectionString:'yout cS'
    })

    try {
        await client.connect()
        const insertQuery:string = 'INSERT INTO users (username, email, password) VALUES ($1,$2,$3)'
        const res = await client.query(insertQuery,['thesahilthadani','the@Gmail.com','HelloWorld'])
        console.log(`Succsessfully inserted ${res}`)
    } catch (err) {
        console.error('Error during the insertion:', err);
    }finally{
        await client.end(); // Close the client connection
    }
    
}
insertData()