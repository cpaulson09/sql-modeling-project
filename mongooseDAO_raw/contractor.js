const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:ZQpYhv2b5d9Q5Q3@sql-modeling-project.kufz1.mongodb.net/" + encodeURI('4660-Boiz') + "?retryWrites=true&w=majority";
let contractor = require('../mongooseDAO_schemas/contractors')

const create = async (contractors) => {

    try {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, uri_decode_auth: true }).then(() => {
            try {
                let contract = new contractor({
                    contractorArr: contractors
                });

                contract.save().then(() => {
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