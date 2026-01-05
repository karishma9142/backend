import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());
const pgClient = new Client('postgresql://neondb_owner:npg_0Fx9PSsMhwHR@ep-broad-resonance-a1zcgg8y-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
pgClient.connect();

app.post("/signup", async (req, res) => {

    const password = req.body.password;
    const username = req.body.username;
    const email = req.body.email;

    const city = req.body.city;
    const country = req.body.country;
    const pincode = req.body.pincode;
    const street = req.body.street;

    try {
        const usersqlquery = "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING id";
        const addressquery = "INSERT INTO address (city , country , pincode , street , user_id) VALUES ($1 , $2 , $3 , $4 , $5)";
        const uservaluse = [username, password, email] // sql injection

        await pgClient.query("BEGIN"); // START A TRANSITATION
         
        const responce = await pgClient.query(usersqlquery , uservaluse);
        const userid = responce.rows[0].id;
        const addressvalue = [city , country , pincode , street , userid]; // relationships => forign key
        await pgClient.query(addressquery , addressvalue);

        await pgClient.query("COMMIT");
        res.json({
            msg: "you are signed up"
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg : "error while sign up " + error
        })
    }
    


})
app.listen(3000);
// async function main() {
//     await pgClient.connect();
//     const response = await pgClient.query("SELECT username FROM users WHERE id=4;")
//     const response2 = await pgClient.query("UPDATE users SET username='random' WHERE id=4;")
//     // const response3 = await pgClient.query("CREATE TABLE todos( id SERIAL PRIMARY KEY  , disc VARCHAR(500) , title VARCHAR(100) NOT NULL);")
//     const response4 = await pgClient.query("ALTER TABLE todos ADD done BOOLEAN;")
//     console.log(response.rows);
// }
// main();