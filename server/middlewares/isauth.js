import jwt from "jsonwebtoken"
import cp from "cookie-parser";
import express from "express";
import usermodel from "../utils/schema/userschema.js";
const app=express();
app.use(cp());
export const isauth = async (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        const decodedid = jwt.verify(token, "abcdefghijklmnop")
        const userid=decodedid.userid;
        req.user = await usermodel.findById(userid);
        next();
    }
    else{
        console.log("not logged in")
        return res.status(401).json({
            error:"please login first"
        })
    }
}