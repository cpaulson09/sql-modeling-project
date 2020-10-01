// ORM 1 sqlite vendor
const faker = require('faker')

const create = (contractor, db) => {
    db.serialize(() => {
        db.run(`INSERT INTO orm1_person ( id, "firstName", "middleName", "lastName", dob, "phone", "email", "streetAddress", city, state, zip) VALUES(?,?,?,?,?,?,?,?,?,?,?)`, [contractor.id, contractor.firstName, contractor.middleName, contractor.lastName, contractor.dob, contractor.phone, contractor.email, contractor.streetAddress, contractor.city, contractor.state, contractor.zip], function(err) {
            if (err) {
                return console.log(err.message);
            }
            // get the last insert id
            console.log(`Success, created person`);
        })
        db.run(`INSERT INTO orm1_nonemployee ("personId", company, type) VALUES(?,?,?)`, [contractor.id, contractor.company, 'contractor'], function(err) {
            if (err) {
                return console.log(err.message);
            }
            // get the last insert id
            console.log(`Success, created nonemployee`);
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

        let data = [contractor.id, contractor.personId, contractor.company, contractor.type, contractor.id]
    
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