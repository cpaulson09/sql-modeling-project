// ORM 4 Postgres customer - CP
const { Client } = require("pg")
const faker = require('faker')

const connectionString =
"postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

const create = async (customer) => {
    try {
        const client = new Client({
            connectionString: connectionString,
            })
        client.connect()

        const query = 'INSERT INTO orm4_customer ( id, firstname, middlename, lastname, dob, "phone", "email", "streetaddress", city, state, zip, company) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)'
        const res = await client.query(query, 
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
            customer.company      
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
        const query = `SELECT * FROM orm4_employee where id = $1`
        const res = await client.query(query, [id]).then(result => {
            console.log(result.rows)
        })
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }

}

const update = async (employee) => {

    try{
        const client = new Client({
            connectionString: connectionString,
            })
        client.connect()
        
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
            customer.id
        ]
        const query = `UPDATE orm4_customer
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
        const query = `DELETE FROM orm4_customer WHERE id = $1`
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
        const query = "SELECT * FROM orm4_customer"
        const res = await client.query(query).then(result => {
            console.log(result.rows)
        })
        await client.end()
    } catch {
        console.log(err.stack)
    }
}

module.exports = {create, read, update, remove, list}