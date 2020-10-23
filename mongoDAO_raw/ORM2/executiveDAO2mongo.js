const executiveDAO1Postgres = require('../../postgresDAO_raw/ORM1/executiveDAO1Postgres');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:ZQpYhv2b5d9Q5Q3@sql-modeling-project.kufz1.mongodb.net/<dbname>?retryWrites=true&w=majority";

const create = async (executive) => {

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const db = client.db("4660-Boiz")

        await db.collection('orm2_employee').insertOne({
            "id": executive.id,
            "firstName": executive.firstName,
            "middleName": executive.middleName,
            "lastName": executive.lastName,
            "dob": executive.dob,
            "phone": executive.phone,
            "email": executive.email,
            "streetAddress": executive.streetAddress,
            "city": executive.city,
            "state": executive.state,
            "zip": executive.zip,
            "department": executive.department,
            "title": executive.title,
            "salary": executive.salary,
            "managerid": executive.managerId,
            "companyId": executive.companyId
        })

        await db.collection('orm2_manager').insertOne({
            "employeeid": executive.id
        })

        await db.collection('orm2_executive').insertOne({
            "managerid": executive.id,
            "bonus": executive.bonus
        })

        await client.close();

    } catch(err) {
        console.error(err)
    }
}

const read = async (id) => {

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const collection = client.db("4660-Boiz").collection("orm2_executive")

        let item = await collection.findOne({"managerid": id})

        console.log(item)

        await client.close();

        return item

    } catch(err) {
        console.error(err)
    }
}

const update = async (executive) => {

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const collection = client.db("4660-Boiz").collection("orm2_person")

        const newDoc = { $set: {
            "id": executive.id,
            "firstName": "Nate",
            "middleName": executive.middleName,
            "lastName": executive.lastName,
            "dob": executive.dob,
            "phone": executive.phone,
            "email": executive.email,
            "streetAddress": executive.streetAddress,
            "city": executive.city,
            "state": executive.state,
            "zip": executive.zip,
            "department": executive.department,
            "title": executive.title,
            "salary": executive.salary,
            "managerid": executive.managerId,
            "companyId": executive.companyId
        } }

        const query = {"id": executive.id};

        await collection.updateOne(query, newDoc)

        await client.close();

    } catch(err) {
        console.error(err)
    }
}

const remove = async (id) => {

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const db = client.db("4660-Boiz")

        await db.collection("orm2_employee").deleteOne({"id": id})
        await db.collection("orm2_manager").deleteOne({"employeeid": id})
        await db.collection("orm2_executive").deleteOne({"managerid": id})

        await client.close();

    } catch(err) {
        console.error(err)
    }
}

module.exports = {create, read, update, remove}