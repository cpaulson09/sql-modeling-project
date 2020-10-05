// ORM 2 postgres manager
const { Pool, Client } = require("pg")

const create = async (manager) => {
    try {
        const connectionString =
            "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"
        const client = new Client({
            connectionString: connectionString,
        })
        client.connect()
        const query = "INSERT INTO orm2_manager( id, employeeid) VALUES($1,$2)"
        const res = await client.query(query, [
            manager.id,
            manager.employeeId,
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

        const query2 = `SELECT * FROM orm2_manager WHERE id = ${id}`

        const found = await client.query(query2).then(result => {
            console.log('found Data',result.rows)
        })

        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

const update = async (manager) => {
    try {
        const connectionString =
            "postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

        const client = new Client({
            connectionString: connectionString,
        })
        client.connect()

        const query2 = `UPDATE orm2_manager SET 
        employeeid = $1 
        where = $2`
        const res = await client.query(query, [manager.employeeId, manager.id])

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
        const query = "DELETE FROM orm2_manager WHERE id = $1"
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
        const query = "SELECT * FROM orm2_manager;"
        const res = await client.query(query).then(result => {
            console.log(result.rows)

        })
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

module.exports = { create, read, update, remove, list }
