// ORM 1 Postgres knex vendor -- CP
const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : 'lallah.db.elephantsql.com',
      user : 'chdnzkgx',
      password : '4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt',
      database : 'chdnzkgx'
    }
  })

const create = (vendor) => {

    knex('orm1_person').insert({id: `${vendor.id}`, firstname: `${vendor.firstName}`, middlename: `${vendor.middleName}`, lastname: `${vendor.lastName}`, dob: `${vendor.dob}`, phone:`${vendor.phone}`, email: `${vendor.email}`, streetaddress: `${vendor.streetAddress}`, city: `${vendor.city}`, state: `${vendor.state}`, zip: `${vendor.zip}`})
    .then((rows) => {
        // for (row of rows) {
        //     console.log(row)
        // }
    })
    knex('orm1_nonemployee').insert({id: `${vendor.id}`, personid: `${vendor.id}`, company: `${vendor.company}`, type: `vendor`})
    .then((rows) => {
        // for (row of rows) {
        //     //console.log(row['department'])
        // }
    }).finally(function () {
        knex.destroy()
    })
}

const read = (id) => {

    knex
    .from('orm1_nonemployee').select('*').where({'id': id})
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['personid']} ${row['company']} ${row['type']}`);
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (vendor) => {
    knex('orm1_nonemployee')
    .where("id", `${vendor.id}`)
    .update({ 
        id: `${vendor.id}`, 
        personid: `${vendor.id}`, 
        company: `${vendor.company}`, 
        type: `${vendor.type}`
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
