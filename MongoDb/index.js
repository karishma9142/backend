const express = require("express");
const {UserModel , TodoModel} = require("./Db");
const jwt = require("jsonwebtoken");
const jwt_secret = "karishmrawat1234567890";
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:ieiDNs5hmV2mhVFL@cluster0.tp8kfsa.mongodb.net/todo-karishma");
const app = express();
app.use(express.json());

app.post("/signup" ,async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    await UserModel.create({
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
        },jwt_secret)  ;
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

app.listen(3000, () => {
    console.log("Server running on port 3000");
});