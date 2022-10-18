require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('Connected!')
    }catch(error){
        console.error('Connect failed!');
        process.exit(1);
    }
}
module.exports = connectDB;