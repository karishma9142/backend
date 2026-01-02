const express = require("express");
const app = express();
app.use(function(req,res,next){
    console.log(`the method is ${req.method}`);
    console.log(`the url is ${req.url}`);
    console.log(`the host is ${req.hostname}`);
    console.log(`the time is ${new Date()}`);
    next();
})
app.get("/sum" , function(req,res){
    let a= parseInt(req.query.a);
    let b=parseInt(req.query.b);
    let ans= a+b;
    res.send(`the sum is ${ans}`);
})
app.get("/divide" , function(req,res){
    let a= parseInt(req.query.a);
    let b=parseInt(req.query.b);
    let ans= a/b;
    res.send(`the division is is ${ans}`);
})
app.get("/muiltiply" , function(req,res){
    let a= parseInt(req.query.a);
    let b=parseInt(req.query.b);
    let ans= a*b;
    res.send(`the muiltiplication  is ${ans}`);
})
app.listen(3000);