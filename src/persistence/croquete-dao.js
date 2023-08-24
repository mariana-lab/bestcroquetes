//file responsible to make the object-db entity translation
import mongoose from 'mongoose';
const { Schema } = mongoose;

//needs only once
const croqueteSchema = new Schema({
    restaurant: String,
    author: String,
    comment: String,
    date: { type: Date, default: Date.now }
});

//converts into a model
const CroqueteModelDB = mongoose.model('croquete', croqueteSchema);

const croqueteDao = {}

croqueteDao.create = async (croquete) => {

    await CroqueteModelDB.create(croquete);
}

export default croqueteDao;