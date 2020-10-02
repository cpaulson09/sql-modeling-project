const { Pool, Client } = require("pg")

const create = async (vendor) => {
    try {
        const connectionString =
            "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

        const client = new Client({
            connectionString: connectionString,
        })
        client.connect()
        const query =
            "INSERT INTO orm2_vendor( id, firstname, middlename, lastname, dob, phone, email, streetaddress, city, state, zip, company) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)"
        const res = await client.query(query, [
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
        const query = "SELECT * FROM orm2_vendor WHERE id = $1"
        const res = await client.query(query, [id])
        console.log(res.rows)
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

const update = async (vendor) => {
    try {
        const connectionString =
            "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

        const client = new Client({
            connectionString: connectionString,
        })
        client.connect()
        const query =
            "UPDATE orm2_vendor SET (firstname, middlename, lastname, dob, phone, email, streetaddress, city, state, zip, company) = ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) WHERE id = $12"
        const res = await client.query(query, [
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
            vendor.id,
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
        const query = "DELETE FROM orm2_vendor WHERE id = $1"
        const res = await client.query(query, [vendor.id])
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
        const query = "SELECT * FROM orm2_vendor;"
        const res = await client.query(query)
        console.log(res.rows)
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

module.exports = { create, read, update, remove, list }
