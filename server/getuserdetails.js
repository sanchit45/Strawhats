import express from "express"
import cp from "cookie-parser";
const app=express();
app.use(cp());
export const getmydetails=async(req,res)=>{
    res.json({
        sucess:true,
        message:"user found",
        user:req.user
    })
}