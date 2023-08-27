import Croquete from './Croquete.js';
import mongoose from 'mongoose';


const croqueteDao = {}

croqueteDao.create = async (croquete) => {
    croquete._id = new mongoose.Types.ObjectId();
    return (await (new Croquete(croquete)).save())[0] || {};
}

croqueteDao.findAll = async () => {
    return await Croquete.find({});
}

croqueteDao.findById = async (_id) => {
    return await Croquete.find({'_id' : _id});
}

croqueteDao.findBy = async (key, value) => {
    return await Croquete.find({[key]: value});
}


export default croqueteDao;