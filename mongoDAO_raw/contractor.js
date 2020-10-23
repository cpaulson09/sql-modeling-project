const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:ZQpYhv2b5d9Q5Q3@sql-modeling-project.kufz1.mongodb.net/<dbname>?retryWrites=true&w=majority";

const create = async (contractors) => {

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const db = client.db("4660-Boiz")

        await db.collection('contractors').insertOne({contractors})

        await client.close();

    } catch(err) {
        console.error(err)
    }
}

module.exports = {create}