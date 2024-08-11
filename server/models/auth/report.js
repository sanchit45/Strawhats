import Reportmodel from "../../utils/schema/reportschema.js";
export const report = async (req, res) => {
    try {
        const { patientID, name, phone, age, gender, date, analysis, riskFactor}=req.body;

        const newspeech = Reportmodel({
            patientID, name, phone, age, gender, date, analysis, riskFactor
        })
        if (newspeech) {
            await newspeech.save();
            res.status(201).json({ message: "speech added successfully" });
        }
        else {
            console.log(error.message);
            res.status(401).json({ message: "Invalid details." })
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "internal server error :(" })
    }


}