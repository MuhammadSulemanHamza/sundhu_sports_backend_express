const mongoose = require("mongoose");
// const { MongoClient } = require("mongodb");

// const uri = "mongodb+srv://muhammadsulemanhamza9:JXfZ8AEjEhZkrBjS@sundhusportsapi.ty0wtqq.mongodb.net/SundhuSportsAPI?retryWrites=true&w=majority";

// const uri = "mongodb+srv://muhammadsulemanhamza9:JXfZ8AEjEhZkrBjS@sundhusportsapi.ty0wtqq.mongodb.net/?retryWrites=true&w=majority";

// const username = "muhammadsulemanhamza9";
// const password = "JXfZ8AEjEhZkrBjS";
// const dbname = "SundhuSportsAPI";

// const uri = `mongodb+srv://${username}:${password}@sundhusportsapi.ty0wtqq.mongodb.net/${dbname}?retryWrites=true&w=majority`;
// const uri = `mongodb+srv://muhammadsulemanhamza9:JXfZ8AEjEhZkrBjS@sundhusportsapi.ty0wtqq.mongodb.net/SundhuSportsAPI?retryWrites=true&w=majority`;

const connectDB = (uri) => {
    // const client = new MongoClient(uri);
    // return new MongoClient(uri).db('SundhuSportsAPI');

    const client = mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return client;
}

module.exports = connectDB;