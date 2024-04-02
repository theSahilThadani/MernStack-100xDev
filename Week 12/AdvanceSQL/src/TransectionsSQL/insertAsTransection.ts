import { Client } from "pg";

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Good question to have at this point is what queries are run when the user signs up and sends both their information and their address in a single request.
// Do we send two SQL queries into the database? What if one of the queries (address query for example) fails? 
// This would require transactions  in SQL to ensure either both the user information and address goes in, or neither does
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const client = new Client(
    {
        connectionString:"postgresql://theSahilThadani:IgKE4zajTkS2@ep-square-limit-90874182.us-east-2.aws.neon.tech/BackendMaster?sslmode=require"
    }
)

interface Data {
    username:string,
    email:string,
    password:string,
    city:string,
    street:string,
    pincode:string,
}

async function InsertTransection(data:Data) {
    const{username,
        email,
        password,
        city,
        street,
        pincode} = data

    try {
        await client.connect();

        await client.query('BEGIN'); //start Query

        const insertIntoAccounts = 'INSERT INTO accounts (username, email, password) VALUES ($1, $2, $3) RETURNING id;';
        const AccountsRes = await client.query(insertIntoAccounts,[username,email,password]);
        const user_id = AccountsRes.rows[0].id;

        const insertIntoAddresses = `insert into addresses (user_id, city, street, pincode) values ($1, $2, $3, $4)`
        const AddressesRes = await client.query(insertIntoAddresses,[user_id,city,street,pincode]);
        
        //commit transection.
        client.query('COMMIT');
        console.log("Transection sucssesfull status: "+ AccountsRes)

    } catch (error) {
        console.log(error + " : Data not Added Try again...")
    }
    finally{
        await client.end();
    }
}
const SampleData = {
    username:'ParthivThadani',
    email:'parthivThadani@p.d.com',
    password:'pd787873',
    city:'New York',
    street:'123 Broadway St',
    pincode:'10001',
}
InsertTransection(SampleData);