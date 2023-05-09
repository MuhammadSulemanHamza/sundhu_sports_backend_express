require("dotenv").config();
const connectDB = require('./src/db/connect');
const ProductModel = require('./src/models/products');

const products_dummy_data = require('./products_data.json');

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_DB_URI);
        // await connectDB();
        await ProductModel.deleteMany();
        await ProductModel.create(products_dummy_data);
        console.log("Data uploaded");
    } catch (error) {
        console.log(error);
    }
}

start();