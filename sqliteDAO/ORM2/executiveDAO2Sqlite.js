// ORM 1 sqlite executive
const sqlite3 = require("sqlite3").verbose();

const create = (executive, db) => {
    db.serialize(() => {
        console.log(executive);
        db.run(
            `INSERT INTO orm2_executive ( id, "managerId", bonus) VALUES(?,?,?)`,
            [
                executive.id,
                executive.managerId,
                executive.bonus,

            ],
            function (err) {
                if (err) {
                    return console.log(err.message);
                }
                // get the last insert id
                console.log(`Success, created executive`);
            }
        );
    });
};

const read = (id, db) => {
  // return executive object
  let sql = `SELECT * FROM orm2_executive WHERE id = ${id}`;
    db.serialize(() => {
        db.get(sql, [], (err, row) => {
            if (err) {
                return console.error(err.message);
            }
            let obj = {
                id: row.id,
                managerId: row.managerId,
                bonus: row.bonus,
            };
            // {object}
            return row
                ? console.log(obj)
                : console.log(`No record found with the id ${id}`);
        });
    });
};

const update = (executive, db) => {
  // replace existing row(s)
  // no return
  db.serialize(() => {

    let data = [executive.id, executive.firstName, executive.middleName, executive.lastName, executive.dob, executive.phone, executive.email, executive.streetAddress, executive.city, executive.state, executive.zip, executive.companyId, executive.department, executive.title, executive.salary, executive.managerId, executive.bonus, executive.directReports]

    db.run(`UPDATE orm2_executive SET 
        id = ?, 
        "managerId" = ?,
        "bonus" = ?,
        WHERE id = ?;`, data,  function(err) {
        if (err) {
            return console.log(err.message);
        }
        // get the last insert id
        console.log(`Success, updated executive`);
    })
})

};

const remove = (id, db) => {
  // no return
  db.serialize(() => {
    let sql = `DELETE FROM orm2_executive WHERE id = ${id}`
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
};

const list = (db) => {
  // return array of objects
  db.serialize(() => {
    let sql = `SELECT * FROM orm2_executive;`
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
};

module.exports = { create, read, update, remove, list };
