import mongoose, { Schema } from 'mongoose';
const ReportSchema = new Schema({
    patientID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    analysis: {
        type: String,
        required: true
    },
    riskFactor: {
        type: String,
        required: true
    }
});
const Reportmodel = mongoose.models.Report || mongoose.model('Report', ReportSchema);
export default Reportmodel