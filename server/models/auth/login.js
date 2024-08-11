import usermodel from "../../utils/schema/userschema.js";
import bcryptjs from "bcryptjs"
import generatejwt from "../../generatejwt.js";
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usermodel.findOne({ email });
        if (!user) return res.status(401).json({ error: `No user with ${email} emailid exists` })
        console.log(user.role);
        if(user.role){
            return res.status(401).json({error:"No such hospital personnel exists"})
        }
        // compare password
        const matched = await bcryptjs.compare(password, user?.password || "");
        if (matched) {
            // generate jwt token.
            generatejwt(user._id, res);
            res.status(200).json({ message: "User logedin successfully" })
            // console.log(user);
        }
        else {
            res.status(401).json({ error: "Invalid Password" })
        }
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "internal server error :(" })
    }
}