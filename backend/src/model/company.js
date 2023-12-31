const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// -name
// -email
// -password
// -phone
// -address
const companySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const Company = mongoose.model('Comapny', companySchema);

module.exports = Company;