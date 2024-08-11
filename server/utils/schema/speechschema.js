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


// Create models for both schemas
const Speechmodel = mongoose.models.Speech || mongoose.model('Speech', SpeechSchema);

export default Speechmodel;