const mongoose = require('mongoose');

let vendorsSchema = new mongoose.Schema({
    vendors: Array
})

module.exports = mongoose.model('vendors', vendorsSchema)