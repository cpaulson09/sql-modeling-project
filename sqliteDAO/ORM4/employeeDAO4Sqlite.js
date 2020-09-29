// ORM 4 sqlite employees
const sqlite = require('sqlite3').verbose()
const faker = require('faker')

const create = (employee) => {
    let db = new sqlite.Database('sqlite.db', err => {
        if (err){
            console.error(err.message)
        }
        console.log('\nconnected to db')
    })

    db.run(`INSERT INTO orm2_employee ( id, "firstName", "middleName", "lastName", dob, phone, email, "streetAddress", city, state, zip, companyId, department, title, salary, managerId) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [employee.id, employee.firstName, employee.middleName, employee.lastName, employee.dob, employee.phone, employee.email, employee.streetAddress, employee.city, employee.state, employee.zip, employee.companyId, employee.department, employee.title, employee.salary, employee.managerId], function(err) {
        if (err) {
            return console.log(err.message);
        }
        // get the last insert id
        console.log(`Success, created employee`);
    })
    
    db.close((err) => {
        if (err){
            console.error(err.message)
        }
        console.log('closing sqlite database\n')
    })
}

const read = (id) => {

    let db = new sqlite.Database('sqlite.db', err => {
        if (err){
            console.error(err.message)
        }
        console.log('\nconnected to db')
    })

    let sql = `SELECT * FROM orm2_employee WHERE id = ${id}`
    db.get(sql, [], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        let obj = {
            id: row.id,
            firstName: row.firstName,
            middleName: row.middleName,
            lastName: row.lastName,
            dob: row.dob,
            phone: row.phone,
            email: row.email,
            streetAddress: row.streetAddress,
            city: row.city,
            state: row.state,
            zip: row.zip,
            companyId: row.companyId,
            department: row.department,
            title: row.title,
            salary: row.salary,
            managerId: row.managerId
        }
        // {object}
        return row
          ? console.log(obj)
          : console.log(`No record found with the id ${id}`);
      
      });
    
    db.close((err) => {
        if (err){
            console.error(err.message)
        }
        console.log('closing sqlite database\n')
    })
    // return vendor object
}

const update = (employee) => {
    console.log(employee)
    let db = new sqlite.Database('sqlite.db', err => {
        if (err){
            console.error(err.message)
        }
        console.log('\nconnected to db')
    })
    let data = [employee.id, employee.firstName, employee.middleName, employee.lastName, employee.dob, employee.phone, employee.email, employee.streetAddress, employee.city, employee.state, employee.zip, employee.companyId, employee.department, employee.title, employee.salary, employee.managerId, employee.id]

    db.run(`UPDATE orm2_employee SET 
        id = ?, 
        "firstName" = ?, 
        "middleName" = ?, 
        "lastName" = ?,
        dob = ?,
        phone = ?, 
        email = ?, 
        "streetAddress" = ?, 
        city = ?, 
        state = ?, 
        zip = ?, 
        "companyId" = ?, 
        department = ?, 
        title = ?, 
        salary = ?, 
        "managerId" = ?
        WHERE id = ?;`, data,  function(err) {
        if (err) {
            return console.log(err.message);
        }
        // get the last insert id
        console.log(`Success, updated employee`);
    })
    
    db.close((err) => {
        if (err){
            console.error(err.message)
        }
        console.log('closing sqlite database\n')
    })
    // no return
}

const remove = (id) => {
    let db = new sqlite.Database('sqlite.db', err => {
        if (err){
            console.error(err.message)
        }
        console.log('\nconnected to db')
    })

    let sql = `DELETE FROM orm2_employee WHERE id = ${id}`
    db.run(sql, (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        // {object}
        return row
          ? console.log(`No record found with the id ${id}`)
          : console.log(`record ${id} removed from DB`)
      });
    
    db.close((err) => {
        if (err){
            console.error(err.message)
        }
        console.log('closing sqlite database\n')
    })
    // no return
}

const list = () => {

    let db = new sqlite.Database('sqlite.db', err => {
        if (err){
            console.error(err.message)
        }
        console.log('\nconnected to db')
    })

    let sql = `SELECT * FROM orm2_employee;`
    db.all(sql, [], (err, rows) => {
        if (err){
            console.error(err.message)
        }
        // return array
        rows.forEach((row) => {
            console.log(row);
        })
    })
    
    db.close((err) => {
        if (err){
            console.error(err.message)
        }
        console.log('closing sqlite database\n')
    })
}


module.exports = {create, read, update, remove, list}
