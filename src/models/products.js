const mongoos = require("mongoose");

const productSchema = new mongoos.Schema({
    title: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: [true, "Price must be provided"]
    },
    featured:{
        type: Boolean,
        default: false,
    },
    rating:{
        type: Number,
        default: 4.9,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        default: "Sundhu Sports"
    },
});

module.exports = mongoos.model("Product", productSchema);