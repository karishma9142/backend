const express=require("express");
const app =express();
// router handlers
app.get('/',function(req,res){
    res.send("hello word");
})
app.post('/',function(req,res){
    res.send("hello word from post endpoint");
})
app.get('/asb',function(req,res){
    res.send("hello word from asb endpoint");
})
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

// app.listen(3000);  // which port 
