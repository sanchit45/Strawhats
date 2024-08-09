import express from "express"
import { login } from "../models/auth/login.js";
import { logout } from "../models/auth/logout.js";
import { signup } from "../models/auth/signup.js";
import { adminsignup } from "../models/auth/adminsignup.js";
import { isauth } from "../middlewares/isauth.js";
import { addaudio } from "../models/auth/addaudio.js";
const route=express.Router();
route.post("/login",login)
route.post("/logout",logout)
route.post("/signup",signup)
route.post("/adminsignup",adminsignup)
route.post("/addaudio",isauth,addaudio)
export default route;