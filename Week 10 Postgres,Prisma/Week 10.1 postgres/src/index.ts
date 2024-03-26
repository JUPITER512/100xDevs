// 
import { Client } from "pg";
const connection_string="postgresql://syedalimurtaza36:nDNBOJAbh92a@ep-rough-snow-a1h542i9.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
const client=new Client({
    connectionString:connection_string
})

async function createUserTable(){
   await client.connect();
    try{
      const result=await client.query(`
      Create Table users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
      `)
      console.log(result);

    }catch(err){
        console.log("Error while creating table",err    );
    }
}
async function insertDataIntoUsersTable(username:string,email:string,password:string) {
   await client.connect();
    try{

        const insertQuery=`INSERT INTO users (username,email,password) VALUES ($1,$2,$3)`
        const values=[username,email,password]
        const result=await client.query(insertQuery,values);
        console.log("Data insert Successfully",result)

    }catch(err){
        console.log("error occured while putting data in db")
    }finally{
        await client.end();
    }
    
}
async function getUserFromDb(email:string){
    await client.connect();
    try{
        const getUserFromDbQuery=`SELECT * FROM users Where email =$1;`
        const values=[email];
        const result=await client.query(getUserFromDbQuery,values);
        if (result.rows.length>0){
            // console.log("Data get Successfully",result.rows[0]);
            console.log(result.rows)
            return result.rows[0];
        }else{
            console.log('No user found with the given email.');
            return null;
        }
    }catch(err){
        console.error('Error during fetching user:', err);
        throw err; 
    }finally{
        await client.end();
    }
}
getUserFromDb('alimurtaza3@gmail.com').catch(console.error);
// insertDataIntoUsersTable("Syed Ali Murtaza bokhari","alimurtaza3@gmail.com","abasdc123");