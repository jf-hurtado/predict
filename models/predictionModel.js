import mongoose from 'mongoose';
const { Schema, model} = mongoose;

const prediction = new Schema({
    features: Array,
    featuresCount: Number,
    scalerVersion: String,
    targetDate: Date,
    dailyValues: [{
        0: Double,
        1: Double,
        2: Double
    }],
    kunnaMeta: [{
        alias: String,
        name: String,
        daysUsed: [{
            0: String,
            1: String,
            2: String
        }]
    }],
    fetchMeta: [{
        timeStart: Date,
        timeEnd: Date
    }],
    source: String
}, {
    timestamps: true
});

const Prediction = model('Prediction', prediction);
export default Prediction;
