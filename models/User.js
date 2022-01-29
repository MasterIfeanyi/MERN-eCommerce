const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String
    },
    size: {
        type: Number
    },
    color: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    }
})

module.exports = mongoose.model("products", productSchema);