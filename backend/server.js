import express from 'express'
import cors from "cors"
import { connectDB } from './config/db.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
const app = express()
const port = 4000

import { Server } from "socket.io";

const io = new Server(8000, { cors: { origin: "*" } });

const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined',name=>{
        users[socket.id] = name;
        socket.broadcast.emit('user-joined',name);
    });
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
    });

    socket.on('disconnect', message =>{
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    })

})


app.use(express.json())
app.use(cors())


connectDB();


app.use("/api/user", userRouter)

app.get('/',(req,res)=>{
    res.send("Api working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})