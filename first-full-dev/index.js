const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/divide" , function(req,res){
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    res.json({
        answer : a*b,
    })
})
app.listen(3000);
