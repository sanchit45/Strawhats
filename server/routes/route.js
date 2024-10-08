import express from "express"
import { login } from "../models/auth/login.js";
import { logout } from "../models/auth/logout.js";
import { signup } from "../models/auth/signup.js";
import { adminlogin } from "../models/auth/adminsignup.js";
import { isauth } from "../middlewares/isauth.js";
import { addaudio } from "../models/auth/addaudio.js";
import { getmydetails } from "../getuserdetails.js";
import { report } from "../models/auth/report.js";
import getreports from "../models/auth/getreports.js";
const route=express.Router();
route.post("/login",login)
route.get("/logout",logout)
route.post("/adduser",signup)
route.post("/addreport",report)
route.post("/adminlogin",adminlogin)
route.post("/addaudio",isauth,addaudio)
route.get("/user",isauth,getmydetails)
route.get("/getreports",getreports)
export default route;