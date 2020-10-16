// ORM 2 sqlite customers
// const sqlite = require("sqlite3").verbose();
// const faker = require("faker");
const { Pool, Client } = require("pg")

const create = async (employee) => {
    try {
        const connectionString =
            "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

        const client = new Client({
            connectionString: connectionString,
        })
        client.connect()
        const query =
            "INSERT INTO orm2_employee( id, firstname, middlename, lastname, dob, phone, email, streetaddress, city, state, zip, companyid, department, title, salary, managerid) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)"
        const res = await client.query(query, [
            employee.id,
            employee.firstName,
            employee.middleName,
            employee.lastName,
            employee.dob,
            employee.phone,
            employee.email,
            employee.streetAddress,
            employee.city,
            employee.state,
            employee.zip,
            employee.companyId,
            employee.department,
            employee.title,
            employee.salary,
            employee.managerId
        ])
        console.log(res.rows)
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

const read = async (id) => {
    try {
        const connectionString =
            "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

        const client = new Client({
            connectionString: connectionString,
        })
        client.connect()
        const query = "SELECT * FROM orm2_employee WHERE id = $1"
        const res = await client.query(query, [id])
        console.log(res.rows)
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

const update = async (employee) => {
    try {
        const connectionString =
            "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

        const client = new Client({
            connectionString: connectionString,
        })
        client.connect()
        const query =
            "UPDATE orm2_employee SET (firstname, middlename, lastname, dob, phone, email, streetaddress, city, state, zip, companyid, department, title, salary, managerid) = ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) WHERE id = $16"
        const res = await client.query(query, [
            employee.firstName,
            employee.middleName,
            employee.lastName,
            employee.dob,
            employee.phone,
            employee.email,
            employee.streetAddress,
            employee.city,
            employee.state,
            employee.zip,
            employee.companyId,
            employee.department,
            employee.title,
            employee.salary,
            employee.managerId,
            employee.id
        ])
        console.log(res.rows)
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

const remove = async (id) => {
    try {
        const connectionString =
            "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

        const client = new Client({
            connectionString: connectionString,
        })
        client.connect()
        const query = "DELETE FROM orm2_employee WHERE id = $1"
        const res = await client.query(query, [customer.id])
        console.log(res.rows)
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

const list = async () => {
    try {
        const connectionString =
            "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

        const client = new Client({
            connectionString: connectionString,
        })
        client.connect()
        const query = "SELECT * FROM orm2_employee;"
        const res = await client.query(query)
        console.log(res.rows)
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

module.exports = { create, read, update, remove, list }
