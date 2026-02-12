import {WebSocketServer , WebSocket} from "ws";

const wss = new WebSocketServer({port : 8080});

interface User {
    socket : WebSocket ,
    room : string
}
let allSockets : User[] = [];
wss.on("connection" , function(socket){

    socket.on("message" , (message) => {
        const parsedMesage = JSON.parse(message.toString());
        if(parsedMesage.type === "join"){
            allSockets.push({
                socket,
                room : parsedMesage.payload.roomId
            })
        }
        else if(parsedMesage.type === "chat"){
            const currentUserRoom = allSockets.find((x) => x.socket == socket)?.room; 
            for(let i=0;i<allSockets.length;i++){
                if(allSockets[i]?.room == currentUserRoom){
                    allSockets[i]?.socket .send(parsedMesage.payload.message)
                }
            }
        }
    })

    socket.on("disconnect" ,()=>{
        
    })
})