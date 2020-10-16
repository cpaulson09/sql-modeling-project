// ORM 1 sqlite employees
const sqlite = require('sqlite3').verbose()
const faker = require('faker')

const create = (employee, db) => {
    db.serialize(() => {
        db.run(`INSERT INTO orm1_person ( id, "firstName", "middleName", "lastName", dob, "phone", "email", "streetAddress", city, state, zip) VALUES(?,?,?,?,?,?,?,?,?,?,?)`, [employee.id, employee.firstName, employee.middleName, employee.lastName, employee.dob, employee.phone, employee.email, employee.streetAddress, employee.city, employee.state, employee.zip], function(err) {
            if (err) {
                return console.log(err.message);
            }
            // get the last insert id
            console.log(`Success, created employee`);
        })
        db.run(`INSERT INTO orm1_employee ( id, "personId", "department", "title", salary, "managerId", "companyId") VALUES(?,?,?,?,?,?,?)`, [employee.id, employee.personId, employee.department, employee.title, employee.salary, employee.managerId, employee.companyId], function(err) {
            if (err) {
                return console.log(err.message);
            }
            // get the last insert id
            console.log(`Success, created employee`);
        })
    })
}

const read = (id, db) => {
    db.serialize(() => {
        let sql = `SELECT * FROM orm1_employee WHERE id = ${id}`
        db.get(sql, [], (err, row) => {
            if (err) {
              return console.error(err.message);
            }
            let obj = {
                id: row.id,
                personID: row.personId,
                department: row.department,
                title: row.title,
                salary: row.salary,
                managerId: row.managerId,
                companyId: row.companyId
            }
            // {object}
            return row
              ? console.log(obj)
              : console.log(`No record found with the id ${id}`);
          
        })
    })
}

const update = (employee, db) => {
    db.serialize(() => {

        let data = [employee.id, employee.personId, employee.department, employee.title, employee.salary, employee.managerId, employee.companyId, employee.id]
    
        db.run(`UPDATE orm1_employee SET 
            id = ?, 
            "companyId" = ?, 
            department = ?, 
            title = ?, 
            salary = ?, 
            "managerId" = ?,
            "companyId" = ?
            WHERE id = ?;`, data,  function(err) {
            if (err) {
                return console.log(err.message);
            }
            // get the last insert id
            console.log(`Success, updated employee`);
        })
    })
}

const remove = (id, db) => {

    db.serialize(() => {
        let sql = `DELETE FROM orm1_employee WHERE id = ${id}`
        db.run(sql, (err, row) => {
            if (err) {
              return console.error(err.message);
            }
            // {object}
            return row
              ? console.log(`No record found with the id ${id}`)
              : console.log(`record ${id} removed from DB`)
        })
    })
}

const list = (db) => {

    db.serialize(() => {
        let sql = `SELECT * FROM orm1_employee;`
        db.all(sql, [], (err, rows) => {
            if (err){
                console.error(err.message)
            }
            // return array
            rows.forEach((row) => {
                console.log(row);
            })
        })
    })
}


module.exports = {create, read, update, remove, list}
