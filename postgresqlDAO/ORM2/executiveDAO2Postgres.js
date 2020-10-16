// ORM 2 sqlite customers
// const sqlite = require("sqlite3").verbose();
// const faker = require("faker");
const { Pool, Client } = require("pg")

const create = async (executive) => {
    try {
        const connectionString =
            "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"
        const client = new Client({
            connectionString: connectionString,
        })
        client.connect()
        const query = "INSERT INTO orm2_executive( id, managerid, bonus) VALUES($1,$2,$3)"
        const res = await client.query(query, [
            executive.id,
            executive.managerId,
            executive.bonus
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

        const query = `SELECT * FROM orm2_executive`
        let knownId = 0;

        const knownData = await client.query(query).then(result => {
            knownId = result.rows[0].id
        })

        const query2 = `SELECT * FROM orm2_executive WHERE id = ${id}`

        const found = await client.query(query2).then(result => {
            console.log('found Data',result.rows)
        })

        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

const update = async () => {
    try {
        const connectionString =
            "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

        const client = new Client({
            connectionString: connectionString,
        })
        client.connect()

        const query = `SELECT * FROM orm2_executive`
        const knownData = await client.query(query).then(result => {
             return result.rows[0]
        })

        const query2 =
            `UPDATE orm2_executive SET bonus = ($1) where = ($2)`
        const res = await client.query(query, [knownData.id])

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
        const query = "DELETE FROM orm2_executive WHERE id = $1"
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
        const query = "SELECT * FROM orm2_executive;"
        const res = await client.query(query).then(result => {
            console.log(result.rows)

        })
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

module.exports = { create, read, update, remove, list }
