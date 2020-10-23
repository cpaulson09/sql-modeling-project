const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:ZQpYhv2b5d9Q5Q3@sql-modeling-project.kufz1.mongodb.net/<dbname>?retryWrites=true&w=majority";

const create = async (contractor) => {

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const db = client.db("4660-Boiz")

        await db.collection('orm1_person').insertOne({
            "id": contractor.id,
            "firstName": contractor.firstName,
            "middleName": contractor.middleName,
            "lastName": contractor.lastName,
            "dob": contractor.dob,
            "phone": contractor.phone,
            "email": contractor.email,
            "streetAddress": contractor.streetAddress,
            "city": contractor.city,
            "state": contractor.state,
            "zip": contractor.zip,
        })

        await db.collection('orm1_nonemployee').insertOne({
            "personid": contractor.id,
            "company": contractor.company,
            "type": "contractor",
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

        const collection = client.db("4660-Boiz").collection("orm1_nonemployee")

        let item = await collection.findOne({"personid": id})

        console.log(item)

        await client.close();

    } catch(err) {
        console.error(err)
    }
}

const update = async (contractor) => {

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const collection = client.db("4660-Boiz").collection("orm1_person")

        const newDoc = { $set: {
            "id": contractor.id,
            "firstName": "Nate",
            "middleName": contractor.middleName,
            "lastName": contractor.lastName,
            "dob": contractor.dob,
            "phone": contractor.phone,
            "email": contractor.email,
            "streetAddress": contractor.streetAddress,
            "city": contractor.city,
            "state": contractor.state,
            "zip": contractor.zip
        } }

        const query = {"id": contractor.id};

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

        await db.collection("orm1_person").deleteOne({"id": id})
        await db.collection("orm1_nonemployee").deleteOne({"personid": id})

        await client.close();

    } catch(err) {
        console.error(err)
    }
}

module.exports = {create, read, update, remove}