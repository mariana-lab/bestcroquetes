import 'dotenv/config';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const connection = {};
connection.start = () => mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASS}@cluster0.zyxj8ow.mongodb.net/?retryWrites=true&w=majority&ssl=true`)
   .then(() =>  console.log('connection successful'))
   .catch((err) => console.error(err));

connection.end = mongoose.disconnect;

export default connection;