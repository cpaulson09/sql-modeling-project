// ORM 1 sqlite knex customer -- CP
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "sqlite.db"
    },
    useNullAsDefault: true
  });

const create = (customer) => {

    knex('orm1_person').insert({id: `${customer.id}`, firstName: `${customer.firstName}`, middleName: `${customer.middleName}`, lastName: `${customer.lastName}`, dob: `${customer.dob}`, phone:`${customer.phone}`, email: `${customer.email}`, streetAddress: `${customer.streetAddress}`, city: `${customer.city}`, state: `${customer.state}`, zip: `${customer.zip}`})
    .then((rows) => {
        for (row of rows) {
            console.log(row)
        }
    })
    knex('orm1_nonemployee').insert({id: `${customer.id}`, personId: `${customer.id}`, company: `${customer.company}`, type: `customer`})
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

const update = (customer) => {
    knex('orm1_nonemployee')
    .where("id", `${customer.id}`)
    .update({ 
        id: `${customer.id}`, 
        personId: `${customer.id}`, 
        company: `${customer.company}`, 
        type: `${customer.type}`
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
