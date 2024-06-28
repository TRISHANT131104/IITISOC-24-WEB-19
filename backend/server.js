import path from "path";
import express from 'express'
import cors from "cors"
import { connectDB } from './config/db.js'
import userRouter from './routes/userRoute.js'
import messageRouter from './routes/messageRoute.js'
import jobRouter from "./routes/jobRoute.js";
import { app, server } from "./socket/socket.js";
import dotenv from 'dotenv';
dotenv.config();
const __dirname = path.resolve();

const PORT = process.env.PORT || 5000





app.use(express.json())
app.use(cors())


// connectDB();


app.use("/api/user", userRouter)

app.use("/api/message", messageRouter)

app.use("/api/job", jobRouter)

app.use(express.static(path.join(__dirname, '/frontends/dist')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, "frontends", "dist","index.html"))
})
// app.get('/',(req,res) => {
//   res.send("API is working properly")
// }
// )

server.listen(PORT,()=>{
    connectDB();
    console.log(`Server started on http://localhost:${PORT}`)
})