require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const products_route = require('./routes/products');
const connectDB = require('./db/connect');

app.get("/", (req, res) => {
    res.send("Hellyeo");
});

app.use('/api/products', products_route);

const start = async () => {
    try {
        const db = await connectDB(process.env.MONGO_DB_URI);
        app.listen(PORT, () => {
            console.log(`${PORT} Listening`);
        });
    } catch (error) {
        console.log("error thrown (hehe🤖): "+error);
    }
}

start();
