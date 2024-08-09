import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Boolean
    }
},{timestamps:true})
const usermodel=mongoose.model("user",userschema);
export default usermodel;