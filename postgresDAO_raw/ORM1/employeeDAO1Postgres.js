// ORM 1 Postgres employee - CP
const { Client } = require("pg")
const connectionString =
"postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

const create = async (employee) => {

    try {
        const client = new Client({
            connectionString: connectionString,
            })
        client.connect()
        const query = 'INSERT INTO orm1_person ( id, firstname, middlename, lastname, dob, "phone", "email", "streetaddress", city, state, zip) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)'
        const res = await client.query(query, [employee.id, employee.firstName, employee.middleName, employee.lastName, employee.dob, employee.phone, employee.email, employee.streetAddress, employee.city, employee.state, employee.zip])
        console.log(res.rows)
        // await client.end()
    } catch (err) {
        console.log(err.stack)
    }
    try {
        const query = "INSERT INTO orm1_employee ( id, personid, department, title, salary, managerid, companyid) VALUES($1,$2,$3,$4,$5,$6,$7)"
        const res = await client.query(query, [
            employee.id,
            employee.personId,
            employee.department,
            employee.title,
            employee.salary,
            employee.managerId,
            employee.companyId
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
        const query = `SELECT * FROM orm1_employee where id =  ${id}`
        const res = await client.query(query).then(result => {
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
        
        let data = [employee.id, employee.personId, employee.department, employee.title, employee.salary, employee.managerId, employee.companyId, employee.id]
        const query = `UPDATE orm1_employee 
        SET id = ($1),
        personid = ($2),
        department = ($3),
        title = ($4),
        salary = ($5),
        managerid = ($6),
        companyid = ($7)
        WHERE id = ($8)`
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
        const query = `DELETE FROM orm1_employee WHERE id = $1`
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
        const query = "SELECT * FROM orm1_employee"
        const res = await client.query(query).then(result => {
            console.log(result.rows)

        })
        await client.end()
    } catch {
        console.log(err.stack)
    }

}

module.exports = {create, read, update, remove, list}
