// ORM 1 Postgres manager - CP
const { Client } = require("pg")
const connectionString =
"postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

const create = async (manager) => {

    try {
        const client = new Client({
            connectionString: connectionString,
            })
        client.connect()
        const query = 'INSERT INTO orm1_manager ( id, employeeid) VALUES($1,$2)'
        const res = await client.query(query, [manager.id, manager.employeeId])
        console.log(res.rows)
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

const read = async (id) => {

    try {
        const client = new Client({
            connectionString: connectionString,
            })
        client.connect()
        const query = `SELECT * FROM orm1_manager where id = $1`
        const res = await client.query(query, [id]).then(result => {
            console.log(result.rows)
        })
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }

}

const update = async (manager) => {

    try{
        const client = new Client({
            connectionString: connectionString,
            })
        client.connect()
        
        let data = [manager.id, manager.employeeId, manager.id]
        const query = `UPDATE orm1_manager 
        SET id = ($1),
        employeeid = ($2)
        WHERE id = ($3)`
        const res = await client.query(query, data)

        await client.end()
    } catch (err) {
        console.log(err.stack)
    }

}

const remove =  async (id) => {

    try{
        const client = new Client({
            connectionString: connectionString,
            })
        client.connect()
        const query = `DELETE FROM orm1_manager WHERE id = $1`
        const res = await client.query(query, [id])
        console.log(res.rows)
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }
}

let list = async () => {

    try{
        const client = new Client({
            connectionString: connectionString,
            })
        client.connect()
        const query = "SELECT * FROM orm1_manager"
        const res = await client.query(query).then(result => {
            console.log(result.rows)

        })
        await client.end()
    } catch {
        console.log(err.stack)
    }

}

module.exports = {create, read, update, remove, list}
