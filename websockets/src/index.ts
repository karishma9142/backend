import {WebSocketServer} from 'ws';

const wss = new WebSocketServer ({port : 8080});

wss.on("connection" , function(socket){
    console.log("sockte is connected");
    socket.send("hello");
    setInterval(() => {
        socket.send("current price of solana" + Math.random())
    },500)

    socket.on("message" ,(e)=> {
        console.log(e.toString());
    })
})