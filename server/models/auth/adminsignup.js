import usermodel from "../../utils/schema/userschema.js";
import bcryptjs from "bcryptjs"
import generatejwt from "../../generatejwt.js";
export const adminlogin = async (req, res) => {
    try {
        const {email, adminkey } = req.body;
        const user = await usermodel.findOne({ email });
        if (!user) {
            res.status(401).json({ message: "admin with this email doesnt exists" })
            return;
        }
        let key = adminkey.toLowerCase();
        if (key !== "hellobabu") {
            res.status(401).json({ message: "admin key do not match" });
            return;
        }


        // hash pasword
        // const hashedpassword = await bcryptjs.hash(password, 10);


        // const newuser = usermodel({
        //     name,
        //     password: hashedpassword,
        //     email,
        //     role: true,
        // })
        // if (newuser) {
        //     await newuser.save();
        //     generatejwt(newuser._id, res);
        //     res.status(201).json({ message: "user registered successfully" });
        // }
        // else {
        //     console.log(error.message);
        //     res.json({ message: "Invalid user details." })
        // }
        generatejwt(user._id, res);
        res.status(200).json({ message: "Admin logedin successfully" })
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "internal server error :(" })
    }


}