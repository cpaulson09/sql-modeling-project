// ORM 2 sqlite customers
// const sqlite = require("sqlite3").verbose();
// const faker = require("faker");
const { Pool, Client } = require("pg");

const create = async (customer) => {
    const connectionString =
        "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx";

    const client = new Client({
        connectionString: connectionString,
    });
    client.connect();
    let w = await client.query("SELECT NOW()");
    console.log(w);
    await client.end();
    return;
    client.serialize(() => {
        client.run(
            `INSERT INTO orm2_customer ( id, "firstName", "middleName", "lastName", dob, phone, email, "streetAddress", city, state, zip, company) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
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

const read = (id, client) => {
    let sql = `SELECT * FROM orm2_customer WHERE id = ${id}`;
    client.serialize(() => {
        client.get(sql, [], (err, row) => {
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

const update = (customer, client) => {
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
    client.serialize(() => {
        client.run(
            `UPDATE orm2_customer SET 
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

const remove = (id, client) => {
    client.serialize(() => {
        let sql = `DELETE FROM orm2_customer WHERE id = ${id}`;
        client.run(sql, (err, row) => {
            if (err) {
                return console.error(err.message);
            }
            // {object}
            return row
                ? console.log(`No record found with the id ${id}`)
                : console.log(`record ${id} removed from client`);
        });
    });
    // no return
};

const list = (client) => {
    client.serialize(() => {
        let sql = `SELECT * FROM orm2_customer;`;
        client.all(sql, [], (err, rows) => {
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
