// ORM1 Employees Postgres

const create = (employee, client) => {
    client.connect()
    client.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
    })
    client.end()
    return
    // let query = client.query(`INSERT INTO orm1_person ( id, "personId", "department", "title", salary, "managerId", "companyId") VALUES(?,?,?,?,?,?,?)`, [employee.id, employee.personId, employee.department, employee.title, employee.salary, employee.managerId, employee.companyId])
    // query.on('row', function(row) {
    //     console.log(row)
    // })
}

// db.run(`INSERT INTO orm1_person ( id, "firstName", "middleName", "lastName", dob, "phone", "email", "streetAddress", city, state, zip) VALUES(?,?,?,?,?,?,?,?,?,?,?)`, [employee.id, employee.firstName, employee.middleName, employee.lastName, employee.dob, employee.phone, employee.email, employee.streetAddress, employee.city, employee.state, employee.zip], function(err) {
//     if (err) {
//         return console.log(err.message);
//     }
//     // get the last insert id
//     console.log(`Success, created employee`);
// })
// db.run(`INSERT INTO orm1_employee ( id, "personId", "department", "title", salary, "managerId", "companyId") VALUES(?,?,?,?,?,?,?)`, [employee.id, employee.personId, employee.department, employee.title, employee.salary, employee.managerId, employee.companyId], function(err) {
//     if (err) {
//         return console.log(err.message);
//     }
//     // get the last insert id
//     console.log(`Success, created employee`);
// })

const read = (id, client) => {

}

const update = (employee, client) => {

}

const remove = (id, client) => {

}

let list = (client) => {

}

module.exports = {create, read, update, remove, list}
