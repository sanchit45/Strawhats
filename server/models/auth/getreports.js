import Reportmodel from "../../utils/schema/reportschema.js"
const getreports=async(req,res)=>{
    const reports=await Reportmodel.find();
    console.log(reports);
    res.json(reports);
}
export default getreports;