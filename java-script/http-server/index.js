const express=require("express");

//*************  creating a http server  ***************//

function calculateSum(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans+=i;
    }
    return ans;
}
const app = express();

app.get("/",function(req,res){
    const n=req.query.n;
    const sum=calculateSum(n);
    res.send("hii sum is : " + sum);
})

app.listen(3001);  // the clinic address (needs to be unique for every process )



// router handlers
// app.get('/',function(req,res){
//     res.send("hello word");
// })
// app.post('/',function(req,res){
//     res.send("hello word from post endpoint");
// })
// app.get('/asb',function(req,res){
//     res.send("hello word from asb endpoint");
// })
// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });

// app.listen(3000);  // which port 
