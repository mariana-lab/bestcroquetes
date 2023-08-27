import 'dotenv/config';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const connection = {};

connection.start = async({user = process.env.DB_USER, pass = process.env.DB_USER_PASS, db = process.env.DB_TEST} = {}) => mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.zyxj8ow.mongodb.net/${db}?retryWrites=true&w=majority&ssl=true`)
   .catch((err) => console.error(err));

connection.end = mongoose.disconnect;

connection.getCollection = collection => {
   return mongoose.connection.collections[collection]
};

export default connection;