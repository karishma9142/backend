const express = require("express");
const app = express();
app.use(express.json());
const users = [{
    name: "karishma",
    kidneys: [{
        health: true
    }]
}];

app.get("/", function (req, res) {
    const karishmaKidneys = users[0].kidneys;
    const noOfKidneys = karishmaKidneys.length;
    let healthyKidneys = karishmaKidneys.filter(k => k.health).length;
    const unhealthyKidyeys = noOfKidneys - healthyKidneys;
    res.json({
        // karishmaKednis,
        noOfKidneys,
        healthyKidneys,
        unhealthyKidyeys
    })
})

app.post("/", function (req, res) {
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        health: ishealthy
    })
    res.json({
        msg: "Done!"
    })
})
app.put("/", function (req, res) {
    if(unhealthyCheak()){
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].health = true;
        }
        res.json({ msg: "All kidneys are now healthy!" });
    }
    else{
        res.status(411).json({
            msg : "you don't have any unhealthy kidney"
        })
    }
})
app.delete("/", function (req, res) {
    if (unhealthyCheak()) {
        const updated = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].health) {
                updated.push({
                    health: true
                })
            }
        }
        users[0].kidneys = updated;
        res.json({
            msg: "ho gaya"
        })
    }
    else{
        res.status(411).json({
            msg : "you don't have any unhealthy kidney"
        })
    }
})

function unhealthyCheak() {
    let unhealthy = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].health) {
            unhealthy = true
        }
    }
    return unhealthy;
}
app.listen(3000);