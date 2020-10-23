const mongoose = require('mongoose');

let customersSchema = new mongoose.Schema({
    customers: Array
})

module.exports = mongoose.model('customers', customersSchema)