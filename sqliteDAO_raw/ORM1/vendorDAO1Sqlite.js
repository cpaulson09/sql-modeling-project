// ORM 1 sqlite vendor
const faker = require('faker')

const create = (vendor, db) => {
    db.serialize(() => {
        db.run(`INSERT INTO orm1_person ( id, "firstName", "middleName", "lastName", dob, "phone", "email", "streetAddress", city, state, zip) VALUES(?,?,?,?,?,?,?,?,?,?,?)`, [vendor.id, vendor.firstName, vendor.middleName, vendor.lastName, vendor.dob, vendor.phone, vendor.email, vendor.streetAddress, vendor.city, vendor.state, vendor.zip], function(err) {
            if (err) {
                return console.log(err.message);
            }
            // get the last insert id
            console.log(`Success, created employee`);
        })
        db.run(`INSERT INTO orm1_nonemployee ("personId", company, type) VALUES(?,?,?)`, [vendor.id, vendor.company, 'vendor'], function(err) {
            if (err) {
                return console.log(err.message);
            }
            // get the last insert id
            console.log(`Success, created vendor`);
        })
    })
}

const read = (id, db) => {
    db.serialize(() => {
        let sql = `SELECT * FROM orm1_nonemployee WHERE id = ${id}`
        db.get(sql, [], (err, row) => {
            if (err) {
              return console.error(err.message);
            }
            let obj = {
                id: row.id,
                employeeId: row.employeeId,
            }
            // {object}
            return row
              ? console.log(obj)
              : console.log(`No record found with the id ${id}`);
          
        })
    })
}

const update = (vendor, db) => {
    db.serialize(() => {

        let data = [vendor.id, vendor.personId, vendor.company, vendor.type, vendor.id]
    
        db.run(`UPDATE orm1_nonemployee SET 
            id = ?, 
            "personId" = ?,
            company = ?,
            type = ?
            WHERE id = ?;`, data,  function(err) {
            if (err) {
                return console.log(err.message);
            }
            // get the last insert id
            console.log(`Success, updated manager`);
        })
    })
}

const remove = (id, db) => {

    db.serialize(() => {
        let sql = `DELETE FROM orm1_nonemployee WHERE id = ${id}`
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
        let sql = `SELECT * FROM orm1_nonemployee;`
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