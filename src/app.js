const express = require("express");
const app = express();
const uuid = require("uuid").v4;
const port = process.env.PORT || 3000;
const { createServer } = require("http");
const path = require("path");
const server = createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  
    socket.on("create-user",async ()=>{
        
        io.to(socket.id).emit("user-created",)
    })

});

server.listen(port, () => {
  console.log("listening on *:", port);
});
