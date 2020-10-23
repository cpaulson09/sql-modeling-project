const { Client } = require("pg")

const connectionString =
"postgres://chdnzkgx:4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt@lallah.db.elephantsql.com:5432/chdnzkgx"

const generateViews = async () => {

    const client = new Client({
        connectionString: connectionString,
        })

    client.connect()
    
    try{

        let query1 = `
        CREATE VIEW vendors_view AS
        SELECT id, firstname, middlename, lastname, dob, phone, email, streetaddress, city, state, zip
        FROM orm3_person
        WHERE type = 'vendor' 
        `
        let res1 = await client.query(query1)
        console.log(res1.rows)
    } catch (err) {
        console.log(err)
    }


    try{
        let query2 = `
        CREATE VIEW customers_view AS
        SELECT id, firstname, middlename, lastname, dob, phone, email, streetaddress, city, state, zip
        FROM orm3_person
        WHERE type = 'customer' 
        `
        let res2 = await client.query(query2)
        console.log(res2)
    } catch (err) {
        console.log(err.stack)
    }


    try{
        let query3 = `
        CREATE VIEW contractors_view AS
        SELECT id, firstname, middlename, lastname, dob, phone, email, streetaddress, city, state, zip
        FROM orm3_person
        WHERE type = 'contractor' 
        `
        let res3 = await client.query(query3, [])
        console.log(res3)
    } catch (err) {
        console.log(err.stack)
    }


    try{
        let query4 = `
        CREATE VIEW employees_view AS
        SELECT id, firstname, middlename, lastname, dob, phone, email, streetaddress, city, state, zip, companyid, department, title, salary, managerId
        FROM orm3_person
        WHERE type = 'employee' 
        `
        let res4 = await client.query(query4, [])
        console.log(res1)
    } catch (err) {
        console.log(err.stack)
    }

    try{
        let query5 = `
        CREATE VIEW managers_view AS
        SELECT id, firstname, middlename, lastname, dob, phone, email, streetaddress, city, state, zip, companyid, department, title, salary, managerId
        FROM orm3_person
        WHERE type = 'manager' 
        `
        let res5 = await client.query(query5, [])
        console.log(res5)
    } catch (err) {
        console.log(err.stack)
    }

    try{
        let query6 = `
        CREATE VIEW executives_view AS
        SELECT id, firstname, middlename, lastname, dob, phone, email, streetaddress, city, state, zip, companyid, department, title, salary, managerId, bonus
        FROM orm3_person
        WHERE type = 'executive' 
        `
        let res6 = await client.query(query6, [])
        console.log(res6)
        await client.end()
    } catch (err) {
        console.log(err.stack)
    }

}

module.exports = { generateViews }