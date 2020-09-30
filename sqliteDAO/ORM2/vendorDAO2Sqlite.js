// ORM 1 sqlite vendors
const sqlite3 = require("sqlite3").verbose();

const create = (vendor, db) => {
    db.serialize(() => {
        db.run(
            `INSERT INTO orm2_vendor ( id, "firstName", "middleName", "lastName", dob, phone, email, "streetAddress", city, state, zip, company) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                vendor.id,
                vendor.firstName,
                vendor.middleName,
                vendor.lastName,
                vendor.dob,
                vendor.phone,
                vendor.email,
                vendor.streetAddress,
                vendor.city,
                vendor.state,
                vendor.zip,
                vendor.company,
            ],
            function (err) {
                if (err) {
                    return console.log(err.message);
                }
                // get the last insert id
                console.log(`Success, created customer`);
            }
        );
    });
};

const read = (id, db) => {
  // return vendor object
  let sql = `SELECT * FROM orm2_vendor WHERE id = ${id}`;
    db.serialize(() => {
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
                company: row.company,
            };
            // {object}
            return row
                ? console.log(obj)
                : console.log(`No record found with the id ${id}`);
        });
    });
};

const update = (vendor, db) => {
  // replace existing row(s)
  // no return
  db.serialize(() => {

    let data = [vendor.id, vendor.firstName, vendor.middleName, vendor.lastName, vendor.dob, vendor.phone, vendor.email, vendor.streetAddress, vendor.city, vendor.state, vendor.zip, vendor.companyId, vendor.department, vendor.title, vendor.salary, vendor.managerId, vendor.id]

    db.run(`UPDATE orm2_vendor SET 
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
        console.log(`Success, updated vendor`);
    })
})

};

const remove = (id, db) => {
  // no return
  db.serialize(() => {
    let sql = `DELETE FROM orm2_vendor WHERE id = ${id}`
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
    let sql = `SELECT * FROM orm2_vendor;`
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
