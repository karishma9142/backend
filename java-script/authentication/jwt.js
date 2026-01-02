const express = require("express");
const jwt = require("jsonwebtoken")
const app = express();
const cors = require("cors");
const JWT_SECRET="karishmaasdfghjkl"
app.use(express.json());

const user = []; ///  stored in server
// midleware
function auth(req,res,next){
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token,JWT_SECRET);
    if(decodedInformation.username){
        req.username=decodedInformation.username;
        next();
    }else{
        res.send("you are not signed in")
    }

};

function logger(req,res,next){
    console.log(req.method+" request come");
    next();
};

app.get("/" , function(req,res){
    res.sendFile(__dirname +  "/public/index.html"); // hosted fe and be in same domain localhost:3000
});

app.post("/signup" ,logger , function(req,res){
    // input validation using ZOD
    const username = req.body.username;
    const password = req.body.password;
    if(user.find(u=>u.username===username)){
        res.json({
            msg : "you are already signed in"
        })
        return
    }
    user.push({
        username : username,
        password : password
    })
    res.json({
        msg : "you are sgined in"
    })
    console.log(user);
});

app.post("/signin" ,logger , function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const fonuduser = user.find(function(u){
        if(u.username === username && u.password==password){
            return true;
        } else{
            return false;
        }
    })

    if(fonuduser){
        // convert usernamn to jwt
        const token = jwt.sign({
            username:username
        },JWT_SECRET); 
        // fonuduser.token=token;
        res.json({
            token : token
        })
    }else{
        res.status(403).send({
            msg : "invalid username nad password"
        })
    }
    console.log(user);
});

app.get("/me" ,auth , function(req,res){
    const username = req.username; 
    let fonuduser = null;
    for(let i=0;i<user.length;i++){
        if(user[i].username===username){
            fonuduser=user[i];
        }
    }
    if(fonuduser){
        res.json({
            username : fonuduser.username,
            password : fonuduser.password
        })
    }
});

app.listen(3000);