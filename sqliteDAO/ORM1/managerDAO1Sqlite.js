// ORM 2 sqlite managers
const sqlite = require('sqlite3').verbose()
const faker = require('faker')

const create = (manager, db) => {
    db.serialize(() => {
        db.run(`INSERT INTO orm1_manager ( id, "employeeId") VALUES(?,?)`, [manager.id, manager.employeeId], function(err) {
            if (err) {
                return console.log(err.message);
            }
            // get the last insert id
            console.log(`Success, created manager`);
        })
    })
}

const read = (id, db) => {
    db.serialize(() => {
        let sql = `SELECT * FROM orm1_manager WHERE id = ${id}`
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

const update = (manager, db) => {
    db.serialize(() => {

        let data = [manager.id, manager.employeeId, manager.id]
    
        db.run(`UPDATE orm1_manager SET 
            id = ?, 
            "employeeId" = ?
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
        let sql = `DELETE FROM orm1_manager WHERE id = ${id}`
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
        let sql = `SELECT * FROM orm1_manager;`
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