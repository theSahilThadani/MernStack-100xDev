import { Client } from "pg";

async function GetOne(){
    const client = new Client({
        connectionString:'yout cS'
    })
    try {
        await client.connect()
        const Getquery = 'select * from users where username = $1'
        const value = ['thesahilthadani']
        const result = await client.query(Getquery,value)
        if(result.rows.length > 0){
            console.log('User found:', result); // Output user data
            return result.rows[0]; // Return the user data
        }else {
            console.log('No user found with the given email.');
            return null; // Return null if no user was found
          }
    } catch (error) {
        console.error('Error during fetching user:', error);
        throw error; // Rethrow or handle error appropriately
    }finally {
        await client.end(); // Close the client connection
      }
}
GetOne()