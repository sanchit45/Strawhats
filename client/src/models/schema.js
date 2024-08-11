import mongoose, { Schema } from 'mongoose';

// Define the Transcript Schema
const TranscriptSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    time_stamp: {
        type: String,
        required: true
    },
    filler_word_count: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    sentiment: {
        type: Number,
        required: true
    }
});

// Define the Speech Schema
const SpeechSchema = new Schema({
    speaker: {
        type: Number,
        required: true
    },
    transcript: {
        type: [TranscriptSchema],
        required: true
    },
    total_filler_words: {
        type: Number,
        required: true
    },
    total_time: {
        type: Number,
        required: true
    },
    average_sentiment: {
        type: Number,
        required: true
    }
});

// Define the Report Schema
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

// Create models for both schemas
const Speech = mongoose.models.Speech || mongoose.model('Speech', SpeechSchema);
const Report = mongoose.models.Report || mongoose.model('Report', ReportSchema);

export default Report
