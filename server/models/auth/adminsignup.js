import usermodel from "../../utils/schema/userschema.js";
import bcryptjs from "bcryptjs"
import generatejwt from "../../generatejwt.js";
export const adminsignup = async (req, res) => {
    try {
        const { name, email, password, confirmpassword, adminkey } = req.body;
        if (password !== confirmpassword) {
            res.json({ message: "password do not match" });
            return;
        }
        let key = adminkey.toLowerCase();
        if (key !== "hellobabu") {
            res.json({ message: "admin key do not match" });
            return;
        }

        const user = await usermodel.findOne({ email });
        if (user) {
            res.json({ message: "user with this email already exists" })
            return;
        }

        // hash pasword
        const hashedpassword = await bcryptjs.hash(password, 10);


        const newuser = usermodel({
            name,
            password: hashedpassword,
            email,
            role: true,
        })
        if (newuser) {
            await newuser.save();
            generatejwt(newuser._id, res);
            res.status(201).json({ message: "user registered successfully" });
        }
        else {
            console.log(error.message);
            res.json({ message: "Invalid user details." })
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "internal server error :(" })
    }


}