import {WebSocketServer} from "ws";

const wss = new WebSocketServer({port : 8080});

let userCount = 0;
wss.on("connection" , function(socket){
    userCount = userCount+1;
    socket.send("hii");
    console.log("connected");
    console.log(`count of users ${userCount}`); 

    socket.on("message" , (message) => {
        console.log(`message recivied ${message.toString()}`);
        setInterval(() => {
            socket.send(`${message.toString()} sent from the sever`);
        },1000)
    })
})