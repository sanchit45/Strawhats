import mongoose from "mongoose";
const audioschema=new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    audiourl:{
        type:String,
        required:true
    }
},{timestamps:true})
const audiomodel=mongoose.model("audio",audioschema);
export default audiomodel;