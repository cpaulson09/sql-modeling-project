const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:ZQpYhv2b5d9Q5Q3@sql-modeling-project.kufz1.mongodb.net/<dbname>?retryWrites=true&w=majority";

const create = async (employee) => {

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const db = client.db("4660-Boiz")

        await db.collection('orm2_employee').insertOne({
            "id": employee.id,
            "firstName": employee.firstName,
            "middleName": employee.middleName,
            "lastName": employee.lastName,
            "dob": employee.dob,
            "phone": employee.phone,
            "email": employee.email,
            "streetAddress": employee.streetAddress,
            "city": employee.city,
            "state": employee.state,
            "zip": employee.zip,
            "department": employee.department,
            "title": employee.title,
            "salary": employee.salary,
            "managerid": employee.managerId,
            "companyId": employee.companyId
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

        const collection = client.db("4660-Boiz").collection("orm2_employee")

        let item = await collection.findOne({"id": id})

        console.log(item)

        await client.close();

        return item

    } catch(err) {
        console.error(err)
    }
}

const update = async (employee) => {

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const collection = client.db("4660-Boiz").collection("orm2_employee")

        const newDoc = { $set: {
            "id": employee.id,
            "firstName": "Nate",
            "middleName": employee.middleName,
            "lastName": employee.lastName,
            "dob": employee.dob,
            "phone": employee.phone,
            "email": employee.email,
            "streetAddress": employee.streetAddress,
            "city": employee.city,
            "state": employee.state,
            "zip": employee.zip,
            "department": employee.department,
            "title": employee.title,
            "salary": employee.salary,
            "managerid": employee.managerId,
            "companyId": employee.companyId
        } }

        const query = {"id": employee.id};

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

        await client.close();

    } catch(err) {
        console.error(err)
    }
}

module.exports = {create, read, update, remove}