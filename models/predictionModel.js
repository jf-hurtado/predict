const mongoose = require('mongoose');
const { Schema } = mongoose;

const prediction = new Schema({
    features: {
        type: Array,
        required: true
    },
    meta: {
        type: Object,
        required: true
    },
    prediction: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Prediction = mongoose.model('Prediction', prediction);
module.exports = { Prediction };
