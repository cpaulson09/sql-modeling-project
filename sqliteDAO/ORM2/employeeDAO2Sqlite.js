// ORM 1 sqlite employees
const sqlite = require('sqlite3').verbose()
const client = require('pg')

const create = (employee) => {
    // no return

    let db = new sqlite.Database('./../sqlite.db', err => {
        if (err){
            console.error(err.message)
        }
        console.log('\nconnected to db')
    })
    
        db.run(`INSERT INTO orm2_employee( id, "firstName", "middleName", "lastName", dob, phone, email, "streetAddress", city, state, zip, company) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`, [employee.id, employee.firstName, employee.middleName, employee.lastName, employee.dob, employee.phone, employee.email, employee.streetAddress, employee.city, employee.state, employee.zip, employee.companyId], function(err) {
            if (err) {
              return console.log(err.message);
            }
            // get the last insert id
            console.log(`Made it`);
          });
    
    db.close((err) => {
        if (err){
            console.error(err.message)
        }
        console.log('closing sqlite database\n')
    })
}

create(employeeMock);

const read = (id) => {
    // return vendor object
}

const update = (employee) => {
    // replace existing row(s)
    // no return
}

const remove = (id) => {
    // no return
}

const list = () => {
    // return array of objects
}


module.exports = {create, read, update, remove, list}
