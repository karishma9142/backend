const express = require("express");
const {UserModel , TodoModel} = require("./Db");
const jwt = require("jsonwebtoken");
const jwt_secret = "karishmrawat1234567890";
const app = express();
app.use(express.json());

app.post("/signup" ,async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    await UserModel.insert({
        email : email,
        password : password ,
        name : name
    })
    res.json({
        msg : "you are logged in "
    })
});

app.post("/signin" ,async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user =await UserModel.findOne({
        email : email ,
        password :password 
    })

    console.log(user);

    if(user){
        const token =jwt.sign({
            id : user._id
        })  ;
        res.json({
            token : token
        });
    }else{
        res.status(403).json({
            msg : "incorrect credential " 
        })
    }
});

app.post("/todo" , function(req,res){
     
});

app.get("/todos" , function(req,res){
    
});