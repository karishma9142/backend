const express = require("express");
const app = express();
let numberOfRequest = {};
setInterval(()=>{
    numberOfRequest={};
},1000)
app.use(function(req,res,next){
    let userId = req.header("user-id");
    if(numberOfRequest[userId]){
        numberOfRequest[userId]++;
        if(numberOfRequest[userId]>5){
            res.status(404).send("no Intry");
        }
        else{
            next();
        }
    }
    else{
        numberOfRequest[userId]=1;
        next();
    }
})
app.get("/user-id",function(req,res){
    res.status(200).json({
        msg : "done"
    })
})
app.listen(3000);