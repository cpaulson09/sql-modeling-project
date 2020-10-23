const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:ZQpYhv2b5d9Q5Q3@sql-modeling-project.kufz1.mongodb.net/" + encodeURI('4660-Boiz') + "?retryWrites=true&w=majority";
let executive = require('../mongooseDAO_schemas/executive')

const create = async (employees, managers, executives) => {

    try {

        let higherarchy = {}
        let exec = null;
        executives.forEach((item, key) => {
            item.directReports = [];
            managers.forEach((manager) => {
                if(manager.managerId == item.id) {
                    item.directReports.push(manager)
                }
            })

            if(item.managerId == item.id) {
                executives.splice(key, 1)
                exec = item
            }

        })

        exec.directReports.push(executives[0])
        exec.directReports.push(executives[1])

        higherarchy = {exec};

        higherarchy.exec.directReports.forEach((item) => {
            item.directReports.forEach((manager) => {
                manager.directReports = [];
                employees.forEach(employee => {
                    if(employee.managerId == manager.id) {
                        manager.directReports.push(employee)
                    }
                })
            })
        })

        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, uri_decode_auth: true }).then(() => {
            try {
                let exec = new executive({
                    id: higherarchy.exec.id,
                    firstName: higherarchy.exec.firstName,
                    middleName: higherarchy.exec.middleName,
                    lastName: higherarchy.exec.lastName,
                    dob: higherarchy.exec.dob,
                    phone: higherarchy.exec.phone,
                    email: higherarchy.exec.email,
                    streetAddress: higherarchy.exec.streetAddress,
                    city: higherarchy.exec.city,
                    state: higherarchy.exec.state,
                    zip: higherarchy.exec.zip,
                    personId: higherarchy.exec.personId,
                    companyId: higherarchy.exec.companyId,
                    department: higherarchy.exec.department,
                    title: higherarchy.exec.title,
                    salary: higherarchy.exec.salary,
                    managerId: higherarchy.exec.managerId,
                    employeeId: higherarchy.exec.employeeId,
                    directReports: higherarchy.exec.directReports,
                    Bonus: higherarchy.exec.Bonus
                });

                exec.save().then(() => {
                    mongoose.disconnect()
                });
                console.log(exec);
            }
            catch (err) {
                console.error(err);
            }
        })
        .catch(err => {
            console.error('Database connection error: ', err)
        })


    } catch(err) {
        console.error(err)
    }
}

module.exports = { create }