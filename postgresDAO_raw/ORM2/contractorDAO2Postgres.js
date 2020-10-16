const { Pool, Client } = require("pg")

const create = async (contractor) => {
    try {
        const connectionString =
            "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

        const client = new Client({
            connectionString: connectionString,
        })
        client.connect()
        const query =
            "INSERT INTO orm2_contractor( id, firstname, middlename, lastname, dob, phone, email, streetaddress, city, state, zip, company) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)"
        const res = await client.query(query, [
            contractor.id,
            contractor.firstName,
            contractor.middleName,
            contractor.lastName,
            contractor.dob,
            contractor.phone,
            contractor.email,
            contractor.streetAddress,
            contractor.city,
            contractor.state,
            contractor.zip,
            contractor.company,
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
        const query = "SELECT * FROM orm2_contractor WHERE id = $1"
        const res = await client.query(query, [id])
        console.log(res.rows)
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

const update = async (contractor) => {
    try {
        const connectionString =
            "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

        const client = new Client({
            connectionString: connectionString,
        })
        client.connect()
        const query =
            "UPDATE orm2_contractor SET (firstname, middlename, lastname, dob, phone, email, streetaddress, city, state, zip, company) = ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) WHERE id = $12"
        const res = await client.query(query, [
            contractor.firstName,
            contractor.middleName,
            contractor.lastName,
            contractor.dob,
            contractor.phone,
            contractor.email,
            contractor.streetAddress,
            contractor.city,
            contractor.state,
            contractor.zip,
            contractor.company,
            contractor.id,
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
        const query = "DELETE FROM orm2_contractor WHERE id = $1"
        const res = await client.query(query, [contractor.id])
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
        const query = "SELECT * FROM orm2_contractor;"
        const res = await client.query(query)
        console.log(res.rows)
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

module.exports = { create, read, update, remove, list }
