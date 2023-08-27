import mongoose, { Schema } from 'mongoose';

const croqueteSchema = new Schema({
    restaurant: String,
    author: String,
    comment: String,
    date: { type: Date, default: Date.now }
});

const Croquete = mongoose.model('croquete', croqueteSchema);
export default Croquete;