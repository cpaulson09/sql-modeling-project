// ORM 2 sqlite customers
// const sqlite = require("sqlite3").verbose();
// const faker = require("faker");
const { Pool, Client } = require("pg")

const create = async (customer) => {
    try {
        const connectionString =
            "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

        const client = new Client({
            connectionString: connectionString,
        })
        client.connect()
        const query =
            "INSERT INTO orm2_customer( id, firstname, middlename, lastname, dob, phone, email, streetaddress, city, state, zip, company) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)"
        const res = await client.query(query, [
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
        const query = "SELECT * FROM orm2_customer WHERE id = $1"
        const res = await client.query(query, [id])
        console.log(res.rows)
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

const update = async (customer) => {
    try {
        const connectionString =
            "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

        const client = new Client({
            connectionString: connectionString,
        })
        client.connect()
        const query =
            "UPDATE orm2_customer SET (firstname, middlename, lastname, dob, phone, email, streetaddress, city, state, zip, company) = ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) WHERE id = $12"
        const res = await client.query(query, [
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
        const query = "DELETE FROM orm2_customer WHERE id = $1"
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
        const query = "SELECT * FROM orm2_customer;"
        const res = await client.query(query)
        console.log(res.rows)
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

module.exports = { create, read, update, remove, list }
