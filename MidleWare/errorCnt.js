const express = require("express");
const app = express();
let errorCnt=0; 
app.use(function(req,res,res ,next){
    res.status(404).json({});
    errorCnt=errorCnt+1;
})
app.get("/user" , function(req,res){
    throw new Error("user not found")
    res.status(200).json({name : "Karishma"})
})
app.post("/user" , function(req,res){
    res.status(200).json({msg : "created dummy account"})
})
app.get("/errorCnt" , function(req,res){
    res.status(200).json({errorCnt}); 
})
app.listen(3000);