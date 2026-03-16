import express from 'express';

const app = express();

app.get("/health-api",(req,res)=>{
    try {
        res.status(200).json({
            msg : "health api work fine"
        })
    } catch (error) {
        res.status(500).json({
            msg : "internal server error"
        })
    }
})
app.listen(3000);