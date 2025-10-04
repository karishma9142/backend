const express = require ("express");
const app = express();
app.get("/add" , function(req,res){
    let a = parseInt(req.query.a);
    let b=parseInt(req.query.b);
    let ans=a+b;
    res.send("The sum is " + ans);
})
app.get("/multiply" , function(req,res){
    let a = parseInt(req.query.a);
    let b=parseInt(req.query.b);
    let ans=a*b;
    res.send("The multliplication is " + ans);
})
app.get("/divide" , function(req,res){
    let a = parseInt(req.query.a);
    let b=parseInt(req.query.b);
    let ans=a/b;
    res.send("The division is " + ans);
})
app.get("/substract" , function(req,res){
    let a = parseInt(req.query.a);
    let b=parseInt(req.query.b);
    let ans=a-b;
    res.send("The substcarion is " + ans);
})
app.listen(3000);