const mongoose = require('mongoose');

let executiveSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    middleName: String,
    lastName: String,
    dob: String,
    phone: String,
    email: String,
    streetAddress: String,
    city: String,
    state: String,
    zip: String,
    personId: String,
    companyId: String,
    department: String,
    title: String,
    salary: String,
    managerId: String,
    employeeId: String,
    directReports: Array,
    Bonus: Number
})

module.exports = mongoose.model('companies', executiveSchema)