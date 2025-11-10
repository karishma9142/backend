const express = require("express");
const { UserModel, TodoModel } = require("./Db");
const jwt = require("jsonwebtoken");
const jwt_secret = "karishmrawat1234567890";
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
mongoose.connect("mongodb+srv://admin:ieiDNs5hmV2mhVFL@cluster0.tp8kfsa.mongodb.net/todo-karishma");
const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    try {
        if (!email || !password || !name) {
            return res.status(400).json({ msg: "All fields are required." });
        }
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);
        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        })
        res.json({
            msg: "you are logged in "
        })
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate email
            res.status(400).json({ msg: "Email already exists!" });
        } else {
            console.error("Signup error:", error);
            res.status(500).json({ msg: "Error while signing up" });
        }
    }
});

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
    })

    if (!password) {
        res.status(403).json({
            msg: "user does not exist"
        })
    }
    const passwordMatch = bcrypt.compare(password, user.password);
    console.log(user);

    if (passwordMatch) {
        const token = jwt.sign({
            id: user._id
        }, jwt_secret);
        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            msg: "incorrect credential "
        })
    }
});

app.post("/todo", async function (req, res) {
    const title = req.body.title;
    let done = false;
    const token = req.headers.token;
    const decoded = jwt.verify(token, jwt_secret);
    const userId = decoded.id;
    const foundUser = await UserModel.findOne({ _id: userId });
    if (!foundUser) {
        res.status(403).json({ msg: "invalid credential" });
    } else {
        await TodoModel.create({
            title: title,
            done: done,
            userId: userId
        })
        res.json({
            msg: "succesfult added to your todos"
        })
    }
});



// hlo karishma , 

app.get("/todos", async function (req, res) {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(403).json({ msg: "Token missing" });
        }

        const decoded = jwt.verify(token, jwt_secret);
        const userId = decoded.id;

        const foundTodos = await TodoModel.find({ userId: userId });

        if (!foundTodos || foundTodos.length === 0) {
            return res.status(200).json({ msg: "No todos found" });
        }

        res.status(200).json({ todos: foundTodos });
    } catch (err) {
        console.error("Error fetching todos:", err);
        res.status(500).json({ msg: "Error fetching todos" });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});