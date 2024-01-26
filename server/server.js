import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import branch1Routes from "./routes/branches1.js";
import branch2Routes from "./routes/branches2.js";
import branch3Routes from "./routes/branches3.js";
import branch4Routes from "./routes/branches4.js";
import branch5Routes from "./routes/branches5.js";


const server = express();

dotenv.config();

const port = process.env.PORT || 5001;

server.use(express.json({limit:"50mb",extended:true}));
server.use(express.urlencoded({limit:"50mb",extended:true}));
server.use(cors());

server.get('/',(req,res)=>{
    res.send("<h1 style='text-align: center;' >Welcome to my kh-doc API</h1>");
});

server.use("/branches1",branch1Routes);
server.use("/branches2",branch2Routes);
server.use("/branches3",branch3Routes);
server.use("/branches4",branch4Routes);
server.use("/branches5",branch5Routes);

server.listen(port,()=>{
    console.log(`Server is runing on http://localhost:${port}`);
});