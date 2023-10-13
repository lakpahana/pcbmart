const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    orderStatus: {
        type: String,
        required: true,

    },
    file: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: true,
    },

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;