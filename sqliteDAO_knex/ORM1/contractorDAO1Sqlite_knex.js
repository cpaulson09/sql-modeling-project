// ORM 1 sqlite knex vendor -- CP
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "sqlite.db"
    },
    useNullAsDefault: true
  });

const create = (contractor) => {

    knex('orm1_person').insert({id: `${contractor.id}`, firstName: `${contractor.firstName}`, middleName: `${contractor.middleName}`, lastName: `${contractor.lastName}`, dob: `${contractor.dob}`, phone:`${contractor.phone}`, email: `${contractor.email}`, streetAddress: `${contractor.streetAddress}`, city: `${contractor.city}`, state: `${contractor.state}`, zip: `${contractor.zip}`})
    .then((rows) => {
        for (row of rows) {
            console.log(row)
        }
    })
    knex('orm1_nonemployee').insert({id: `${contractor.id}`, personId: `${contractor.id}`, company: `${contractor.company}`, type: `contractor`})
    .then((rows) => {
        for (row of rows) {
            //console.log(row['department'])
        }
    }).finally(function () {
        knex.destroy()
    })
}

const read = (id) => {

    knex
    .from('orm1_nonemployee').select('*').where({'id': id})
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['personId']} ${row['company']} ${row['type']}`);
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (contractor) => {
    knex('orm1_nonemployee')
    .where("id", `${contractor.id}`)
    .update({ 
        id: `${contractor.id}`, 
        personId: `${contractor.id}`, 
        company: `${contractor.company}`, 
        type: `${contractor.type}`
    }).then(function (count) {
        console.log('update successful');
    }).finally(function () {
        knex.destroy()
    })
}

const remove = (id) => {

    knex("orm1_nonemployee").where("id",`${id}`).del().then(function (count) {
        console.log('delete successful');
    }).finally(function () {
        knex.destroy()
    });
}

const list = () => {
    knex
    .from('orm1_nonemployee').select('*')
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']} ${row['lastName']}`);
        }
    }).finally(function () {
        knex.destroy()
    })
}


module.exports = {create, read, update, remove, list}
