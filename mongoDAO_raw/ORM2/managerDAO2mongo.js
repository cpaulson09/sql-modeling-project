const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:ZQpYhv2b5d9Q5Q3@sql-modeling-project.kufz1.mongodb.net/<dbname>?retryWrites=true&w=majority";

const create = async (manager) => {

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const db = client.db("4660-Boiz")

        await db.collection('orm2_employee').insertOne({
            "id": manager.id,
            "firstName": manager.firstName,
            "middleName": manager.middleName,
            "lastName": manager.lastName,
            "dob": manager.dob,
            "phone": manager.phone,
            "email": manager.email,
            "streetAddress": manager.streetAddress,
            "city": manager.city,
            "state": manager.state,
            "zip": manager.zip,
            "department": manager.department,
            "title": manager.title,
            "salary": manager.salary,
            "managerid": manager.managerId,
            "companyId": manager.companyId
        })


        await db.collection('orm2_manager').insertOne({
            "employeeid": manager.id
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

        const collection = client.db("4660-Boiz").collection("orm2_manager")

        let item = await collection.findOne({"employeeid": id})

        console.log(item)

        await client.close();

        return item

    } catch(err) {
        console.error(err)
    }
}

const update = async (manager) => {

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const collection = client.db("4660-Boiz").collection("orm2_employee")

        const newDoc = { $set: {
            "id": manager.id,
            "firstName": "Nate",
            "middleName": manager.middleName,
            "lastName": manager.lastName,
            "dob": manager.dob,
            "phone": manager.phone,
            "email": manager.email,
            "streetAddress": manager.streetAddress,
            "city": manager.city,
            "state": manager.state,
            "zip": manager.zip,
            "department": manager.department,
            "title": manager.title,
            "salary": manager.salary,
            "managerid": manager.managerId,
            "companyId": manager.companyId
        } }

        const query = {"id": manager.id};

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

        await client.close();

    } catch(err) {
        console.error(err)
    }
}

module.exports = {create, read, update, remove}