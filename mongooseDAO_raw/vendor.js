const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:ZQpYhv2b5d9Q5Q3@sql-modeling-project.kufz1.mongodb.net/" + encodeURI('4660-Boiz') + "?retryWrites=true&w=majority";
let vendor = require('../mongooseDAO_schemas/vendors')

const create = async (vendors) => {

    try {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, uri_decode_auth: true }).then(() => {
            try {
                let vendorsDoc = new vendor({
                    vendors: vendors
                });

                vendorsDoc.save().then(() => {
                    mongoose.disconnect()
                });
            }
            catch (err) {
                console.error(err);
            }
        })
        .catch(err => {
            console.error('Database connection error: ', err)
        })

    } catch(err) {
        console.error(err)
    }
}

module.exports = {create}