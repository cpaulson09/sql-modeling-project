// ORM 2 sqlite customers
// const sqlite = require("sqlite3").verbose();
// const faker = require("faker");

const create = (customer, db) => {
    db.serialize(() => {
        db.run(
            `INSERT INTO orm3_person ( id, type, "firstName", "middleName", "lastName", dob, phone, email, "streetAddress", city, state, zip, companyId, department, title, salary, managerId, bonus, company) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                customer.id,
                "customer",
                customer.firstName,
                customer.middleName,
                customer.lastName,
                customer.dob,
                customer.phone,
                customer.email,
                customer.streetAddress,
                customer.city,
                customer.state,
                customer.zip,
                null,
                null,
                null,
                null,
                null,
                null,
                customer.company,
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
    let sql = `SELECT * FROM orm3_person WHERE id = ${id}`;
    db.serialize(() => {
        db.get(sql, [], (err, row) => {
            if (err) {
                return console.error(err.message);
            }
            let obj = {
                id: row.id,
                type: row.type,
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

const update = (customer, db) => {
    let data = [
        customer.id,
        customer.firstName,
        customer.middleName,
        customer.lastName,
        customer.dob,
        customer.phone,
        customer.email,
        customer.streetAddress,
        customer.city,
        customer.state,
        customer.zip,
        customer.company,
        customer.id,
    ];
    db.serialize(() => {
        db.run(
            `UPDATE orm3_person SET 
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
        "company" = ? 
        WHERE id = ?;`,
            data,
            function (err) {
                if (err) {
                    return console.log(err.message);
                }
                // get the last insert id
                console.log(`Success, updated customer`);
            }
        );
    });
};

const remove = (id, db) => {
    db.serialize(() => {
        let sql = `DELETE FROM orm3_person WHERE id = ${id}`;
        db.run(sql, (err, row) => {
            if (err) {
                return console.error(err.message);
            }
            // {object}
            return row
                ? console.log(`No record found with the id ${id}`)
                : console.log(`record ${id} removed from DB`);
        });
    });
    // no return
};

const list = (db) => {
    db.serialize(() => {
        let sql = `SELECT * FROM orm3_person;`;
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error(err.message);
            }
            // return array
            rows.forEach((row) => {
                console.log(row);
            });
        });
    });
};

module.exports = { create, read, update, remove, list };
