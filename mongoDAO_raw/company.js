const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:ZQpYhv2b5d9Q5Q3@sql-modeling-project.kufz1.mongodb.net/<dbname>?retryWrites=true&w=majority";

const create = async (employees, managers, executives) => {

    try {

        let higherarchy = {}
        let exec = null;
        executives.forEach((item, key) => {
            item.directReports = [];
            managers.forEach((manager) => {
                if(manager.managerId == item.id) {
                    item.directReports.push(manager)
                }
            })

            if(item.managerId == item.id) {
                executives.splice(key, 1)
                exec = item
            }

        })

        exec.directReports.push(executives[0])
        exec.directReports.push(executives[1])

        higherarchy = {exec};

        higherarchy.exec.directReports.forEach((item) => {
            item.directReports.forEach((manager) => {
                manager.directReports = [];
                employees.forEach(employee => {
                    if(employee.managerId == manager.id) {
                        manager.directReports.push(employee)
                    }
                })
            })
        })

        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const db = client.db("4660-Boiz")

        await db.collection('companies').insertOne(higherarchy)

        await client.close();

    } catch(err) {
        console.error(err)
    }
}

module.exports = { create }