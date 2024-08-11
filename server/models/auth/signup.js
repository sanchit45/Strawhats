import usermodel from "../../utils/schema/userschema.js";
import bcryptjs from "bcryptjs"
import generatejwt from "../../generatejwt.js";
export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await usermodel.findOne({ email });
        if (user) {
            res.status(401).json({ message: "user with this email already exists" })
            return;
        }

        // hash pasword
        const hashedpassword = await bcryptjs.hash(password, 10);


        const newuser = usermodel({
            name,
            password: hashedpassword,
            email,
            role:false
        })
        if (newuser) {
            await newuser.save();
            generatejwt(newuser._id, res);
            res.status(201).json({ message: "user registered successfully" });
        }
        else {
            console.log(error.message);
            res.status(401).json({ message: "Invalid user details." })
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "internal server error :(" })
    }


}