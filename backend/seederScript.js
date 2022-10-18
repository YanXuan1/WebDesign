require('dotenv').config();
const productsData = require('./data/products');
const usersData = require('./data/users')
const connectDB = require('./config/db');
const Product = require('./models/Products')
const User = require('./models/Users')
connectDB();

const importData = async()=>{
    try {
        
        await Product.deleteMany({});
        await User.deleteMany({});
        await Product.insertMany(productsData);
        await User.insertMany(usersData);
        console.log('Data imported!')
        process.exit();
    } catch (error) {
        console.error("Error with data import");
        console.log(error);
        process.exit(1);
    }
}

importData();