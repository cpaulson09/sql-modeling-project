// ORM 2 sqlite employees
const sqlite = require('sqlite3').verbose()
const faker = require('faker')

const create = (executive, db) => {
    db.serialize(() => {
        db.run(`INSERT INTO orm1_executive ( id, "managerId", bonus) VALUES(?,?,?)`, [executive.id, executive.managerId, executive.bonus], function(err) {
            if (err) {
                return console.log(err.message);
            }
            // get the last insert id
            console.log(`Success, created executive`);
        })
    })
}

const read = (id, db) => {
    db.serialize(() => {
        let sql = `SELECT * FROM orm1_executive WHERE id = ${id}`
        db.get(sql, [], (err, row) => {
            if (err) {
              return console.error(err.message);
            }
            let obj = {
                id: row.id,
                managerId: row.managerId,
                bonus: row.bonus
            }
            // {object}
            return row
              ? console.log(obj)
              : console.log(`No record found with the id ${id}`);
          
        })
    })
}

const update = (executive, db) => {
    db.serialize(() => {

        let data = [executive.id, executive.managerId,executive.bonus, executive.id]
    
        db.run(`UPDATE orm1_executive SET 
            id = ?, 
            "managerId" = ?,
            bonus = ?
            WHERE id = ?;`, data,  function(err) {
            if (err) {
                return console.log(err.message);
            }
            // get the last insert id
            console.log(`Success, updated executive`);
        })
    })
}

const remove = (id, db) => {

    db.serialize(() => {
        let sql = `DELETE FROM orm1_executive WHERE id = ${id}`
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
        let sql = `SELECT * FROM orm1_executive;`
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