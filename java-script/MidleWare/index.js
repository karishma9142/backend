const express = require("express");
const app = express();
function oldEnough(age) {
    if (age >= 14) {
        return true;
    }
    else {
        return false;
    }
}
function oldEnoughMalware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    }
    else {
        res.status(411).json({
            msg: "Sorry you are not of age yet"
        })
    }
}
app.use(oldEnoughMalware);/// work only for which routes is below of it not for the above of this diclartion
app.get("/ride1", function (req, res) {
    res.json({
        msg: "you have riden ride no.1"
    })
})
app.get("/ride2", function (req, res) {
    res.json({
        msg: "you have riden ride no.2"
    })
})
app.listen(3000);