const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:ZQpYhv2b5d9Q5Q3@sql-modeling-project.kufz1.mongodb.net/<dbname>?retryWrites=true&w=majority";

const create = async (vendor) => {

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const db = client.db("4660-Boiz")

        await db.collection('orm1_person').insertOne({
            "id": vendor.id,
            "firstName": vendor.firstName,
            "middleName": vendor.middleName,
            "lastName": vendor.lastName,
            "dob": vendor.dob,
            "phone": vendor.phone,
            "email": vendor.email,
            "streetAddress": vendor.streetAddress,
            "city": vendor.city,
            "state": vendor.state,
            "zip": vendor.zip,
        })

        await db.collection('orm1_nonemployee').insertOne({
            "personid": vendor.id,
            "company": vendor.company,
            "type": "vendor",
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

const update = async (vendor) => {

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const collection = client.db("4660-Boiz").collection("orm1_person")

        const newDoc = { $set: {
            "id": vendor.id,
            "firstName": "Nate",
            "middleName": vendor.middleName,
            "lastName": vendor.lastName,
            "dob": vendor.dob,
            "phone": vendor.phone,
            "email": vendor.email,
            "streetAddress": vendor.streetAddress,
            "city": vendor.city,
            "state": vendor.state,
            "zip": vendor.zip
        } }

        const query = {"id": vendor.id};

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