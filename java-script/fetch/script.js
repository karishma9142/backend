const express = require ("express");
const app = express();
app.get("/add/:a/:b" , function(req,res){
    let a = parseInt(req.params.a);
    let b=parseInt(req.params.b);
    let ans=a+b;
    res.send("The sum is " + ans);
})
app.get("/multiply/:a/:b" , function(req,res){
    let a = parseInt(req.params.a);
    let b=parseInt(req.params.b);
    let ans=a*b;
    res.send("The multliplication is " + ans);
})
app.get("/divide/:a/:b" , function(req,res){
    let a = parseInt(req.params.a);
    let b=parseInt(req.params.b);
    let ans=a/b;
    res.send("The division is " + ans);
})
app.get("/substract/:a/:b" , function(req,res){
    let a = parseInt(req.params.a);
    let b=parseInt(req.params.b);
    let ans=a-b;
    res.send("The substcarion is " + ans);
})
app.listen(3000);