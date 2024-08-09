import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import route from "./routes/route.js"
import connection from "./connection.js";
import cookieParser from "cookie-parser"
const app=express();
dotenv.config();
// implementing cors
const corsoptions={
    origin:"http://localhost:3000",
    methods:"*",
    credentials:true
}
app.use(cors(corsoptions))
app.use(cookieParser())
app.use(express.json());
// app.use((express.urlencoded({extended:true})))

// routes
app.use("/api/auth",route);

// listening the server.
app.listen(5000,()=>{
    connection();
    console.log(`server is running on port 5000`);
})