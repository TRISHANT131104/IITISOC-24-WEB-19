import path from "path";
import express from 'express'
import cors from "cors"
import { connectDB } from './config/db.js'
import userRouter from './routes/userRoute.js'
import messageRoute from './routes/messageRoute.js'
import { app, server } from "/socket/socket.js";
import 'dotenv/config'
const __dirname = path.resolve();

const PORT = process.env.PORT || 4000


// const io = new Server(4000, { cors: { origin: "*" } });

// const users = {};

// io.on('connection', socket => {
//     socket.on('new-user-joined',name=>{
//         users[socket.id] = name;
//         socket.broadcast.emit('user-joined',name);
//     });
//     socket.on('send',message=>{
//         socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
//     });

//     socket.on('disconnect', message =>{
//         socket.broadcast.emit('left', users[socket.id]);
//         delete users[socket.id];
//     })

// })


app.use(express.json())
app.use(cors())


// connectDB();


app.use("/api/user", userRouter)

app.use("/api/message", messageRoute)

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist","index.html"))
})

server.listen(PORT,()=>{
    connectDB();
    console.log(`Server started on http://localhost:${PORT}`)
})