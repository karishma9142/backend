import { Client } from "pg";

const pgClient = new Client('postgresql://neondb_owner:npg_0Fx9PSsMhwHR@ep-broad-resonance-a1zcgg8y-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');

async function main() {
    await pgClient.connect();
    const response = await pgClient.query("SELECT username FROM users WHERE id=4;")
    const response2 = await pgClient.query("UPDATE users SET username='random' WHERE id=4;")
    // const response3 = await pgClient.query("CREATE TABLE todos( id SERIAL PRIMARY KEY  , disc VARCHAR(500) , title VARCHAR(100) NOT NULL);")
    const response4 = await pgClient.query("ALTER TABLE todos ADD done BOOLEAN;")
    console.log(response.rows);
}
main();