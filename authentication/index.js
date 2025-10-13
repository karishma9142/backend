const express = require("express");
const app = express();
app.use(express.json());

const user = []; ///  stored in server
function genrateToken(){
    let option = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
    let token = "";
    for(let i=0;i<32;i++){
        token = token + option[Math.floor(Math.random()*option.length)];
    }
    return token;
}
app.post("/signup" , function(req,res){
    // input validation using ZOD
    const username = req.body.username;
    const password = req.body.password;
    if(user.find(u=>u.username===username)){
        res.json({
            msg : "you are already signed in"
        })
        return
    }
    user.push({
        username : username,
        password : password
    })
    res.json({
        msg : "you are sgined in"
    })
    console.log(user);
})
app.post("/signin" , function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const fonuduser = user.find(function(u){
        if(u.username === username && u.password==password){
            return true;
        } else{
            return false;
        }
    })

    if(fonuduser){
        const token = genrateToken();
        fonuduser.token=token;
        res.json({
            token : token
        })
    }else{
        res.status(403).send({
            msg : "invalid username nad password"
        })
    }
    console.log(user);
});
app.get("/me" , function(req,res){
    const token = req.headers.token;
    let fonuduser = null;
    for(let i=0;i<user.length;i++){
        if(user[i].token==token){
            fonuduser=user[i];
        }
    }
    if(fonuduser){
        res.json({
            username : fonuduser.username,
            password : fonuduser.password
        })
    }else{
       res.json({
            msg : "invalid token"
       })
    }
})
app.listen(3000);