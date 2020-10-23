const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema({
    "id": Number, 
    "firstName": String,
    "middleName": String,
    "lastName": String,
    "dob": Number,
    "phone": String,
    "email": String,
    "streetAddress": String,
    "city": String,
    "state": String,
    "zip": String
})

module.exports = mongoose.model('Employee1', employeeSchema);