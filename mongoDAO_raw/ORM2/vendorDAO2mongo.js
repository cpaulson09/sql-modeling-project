const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:ZQpYhv2b5d9Q5Q3@sql-modeling-project.kufz1.mongodb.net/<dbname>?retryWrites=true&w=majority";

const create = async (vendor) => {

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const db = client.db("4660-Boiz")

        await db.collection('orm2_vendor').insertOne(vendor)

        await client.close();

    } catch(err) {
        console.error(err)
    }
}

const read = async (id) => {

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const collection = client.db("4660-Boiz").collection("orm2_vendor")

        let item = await collection.findOne({"id": id})

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

        const collection = client.db("4660-Boiz").collection("orm2_vendor")

        vendor.name = "Nate"

        const newDoc = { $set: vendor }

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

        await db.collection("orm2_vendor").deleteOne({"id": id})

        await client.close();

    } catch(err) {
        console.error(err)
    }
}

module.exports = {create, read, update, remove}