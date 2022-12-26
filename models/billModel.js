import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const billSchema = new Schema({}, { timestamps: true });

const Bill = model('bill', billSchema);

export default Bill;
