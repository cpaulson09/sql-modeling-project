// ORM 1 Postgres contractor - CP
const { Client } = require("pg")
const faker = require('faker')

const connectionString =
"postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

const create = async (contractor) => {
    try {
        const client = new Client({
            connectionString: connectionString,
            })
        client.connect()

        const query = 'INSERT INTO orm1_person ( id, firstname, middlename, lastname, dob, "phone", "email", "streetaddress", city, state, zip) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)'
        const res = await client.query(query, [contractor.id, contractor.firstName, contractor.middleName, contractor.lastName, contractor.dob, contractor.phone, contractor.email, contractor.streetAddress, contractor.city, contractor.state, contractor.zip])
        console.log(res.rows)

        const query2 = 'INSERT INTO orm1_nonemployee ( id, personid, company, type) VALUES ($1,$2,$3,$4)'
        const res2 = await client.query(query2, [faker.random.number(), contractor.id, contractor.company, 'contractor'])
        console.log(res2.rows)

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
        const query = `SELECT * FROM orm1_nonemployee where id = $1`
        const res = await client.query(query, [id]).then(result => {
            console.log(result.rows)
        })
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }

}

const update = async (contractor) => {

    try{
        const client = new Client({
            connectionString: connectionString,
            })
        client.connect()
        
        let data = [contractor.id, contractor.personId, contractor.company, contractor.type, contractor.id]
        const query = `UPDATE orm1_nonemployee
        SET id = ($1),
        personid = ($2),
        company = ($3),
        type = ($4)
        WHERE id = ($5)`
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
        const query = `DELETE FROM orm1_nonemployee WHERE id = $1`
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
        const query = "SELECT * FROM orm1_nonemployee"
        const res = await client.query(query).then(result => {
            console.log(result.rows)
        })
        await client.end()
    } catch {
        console.log(err.stack)
    }
}

module.exports = {create, read, update, remove, list}