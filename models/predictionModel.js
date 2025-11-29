import mongoose from 'mongoose';
const { Schema, model} = mongoose;

const prediction = new Schema({
    features: Array,
    meta: Object,
}, {
    timestamps: true
});

const Prediction = model('Prediction', prediction);
export default Prediction;
