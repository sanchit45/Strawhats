import audiomodel from "../../utils/schema/audioschema.js";
export const addaudio = async (req, res) => {
    try {
        const user = req.user
        const userid = user._id;
        const { url } = req.body;
        const newaudio = audiomodel({
            author: userid,
            audiourl: url
        })
        if (newaudio) {
            await newaudio.save();
            res.status(201).json({ message: "audio added successfully" });
        }
        else {
            console.log(error.message);
            res.json({ message: "Invalid details. Please check" })
        }
    }
    catch (error) {
        // console.log(error.message);
        res.status(500).json({ message: "internal server error :(" })
    }


}