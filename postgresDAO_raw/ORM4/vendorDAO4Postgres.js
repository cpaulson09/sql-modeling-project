// ORM 4 Postgres vendor - CP
const { Client } = require("pg")
const faker = require('faker')

const connectionString =
"postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

const create = async (vendor) => {
    try {
        const client = new Client({
            connectionString: connectionString,
            })
        client.connect()

        const query = 'INSERT INTO orm4_vendor ( id, firstname, middlename, lastname, dob, "phone", "email", "streetaddress", city, state, zip, company) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)'
        const res = await client.query(query, 
        [   
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
            vendor.company      
        ])
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
        const query = `SELECT * FROM orm4_vendor where id = $1`
        const res = await client.query(query, [id]).then(result => {
            console.log(result.rows)
        })
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }

}

const update = async (vendor) => {

    try{
        const client = new Client({
            connectionString: connectionString,
            })
        client.connect()
        
        let data = [   
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
            vendor.id
        ]
        const query = `UPDATE orm4_vendor
        SET id = ($1),
        firstname = ($2),
        middlename = ($3),
        lastname = ($4),
        dob = ($5),
        phone = ($6),
        email = ($7),
        streetaddress = ($8),
        city = ($9),
        state = ($10),
        zip = ($11),
        company = ($12)
        WHERE id = ($13)`
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
        const query = `DELETE FROM orm4_vendor WHERE id = $1`
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
        const query = "SELECT * FROM orm4_vendor"
        const res = await client.query(query).then(result => {
            console.log(result.rows)
        })
        await client.end()
    } catch {
        console.log(err.stack)
    }
}

module.exports = {create, read, update, remove, list}