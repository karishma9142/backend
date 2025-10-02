const express = require("express");
const app = express();
let requestCnt=0;
app.use(function(req,res, next){
    requestCnt=requestCnt+1;
    next();
})
app.get("/user" , function(req,res){
    res.status(200).json({
        msg : "Karishma"
    })
})
app.post("/user" , function(req,res){
    res.status(200).json({
        msg : "you have done dummy id"
    })
})
app.get("/requestCnt" , function(req,res){
    res.status(200).json({
        requestCnt
    })
})
app.listen(3000);