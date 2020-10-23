const mongoose = require('mongoose');

let contractorsSchema = new mongoose.Schema({
    contractorArr: Array
})

module.exports = mongoose.model('contractors', contractorsSchema)