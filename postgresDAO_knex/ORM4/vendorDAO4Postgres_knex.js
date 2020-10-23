// ORM 4 postgres knex vendor -- CP
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

    knex('orm4_vendor').insert({id: `${vendor.id}`, firstname: `${vendor.firstName}`, middlename: `${vendor.middleName}`, lastname: `${vendor.lastName}`, dob: `${vendor.dob}`, phone:`${vendor.phone}`, email: `${vendor.email}`, streetaddress: `${vendor.streetAddress}`, city: `${vendor.city}`, state: `${vendor.state}`, zip: `${vendor.zip}`, company: `${vendor.company}`})
    .then((rows) => {
        // for (row of rows) {
        //     console.log(row)
        // }
    }).finally(function () {
        knex.destroy()
    })
}

const read = (id) => {

    knex
    .from('orm4_vendor').select('*').where({'id': id})
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']} ${row['middleName']} ${row['lastName']} ${row['dob']} ${row['phone']} ${row['email']} ${row['streetAddress']} ${row['city']} ${row['state']} ${row['zip']} ${row['department']} ${row['title']} ${row['salary']} ${row['managerId']} ${row['companyId']}`);
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (vendor) => {
    knex('orm4_vendor')
    .where("id", `${vendor.id}`)
    .update({ 
        id: `${vendor.id}`,
        firstname: `${vendor.firstName}`,
        middlename: `${vendor.middleName}`,
        lastname: `${vendor.lastName}`,
        dob: `${vendor.dob}`,
        phone: `${vendor.phone}`,
        email: `${vendor.email}`,
        streetaddress: `${vendor.streetAddress}`,
        city: `${vendor.city}`,
        state: `${vendor.state}`,
        zip: `${vendor.zip}`,
        company: `${vendor.company}`
    }).then(function (count) {
        console.log('update successful');
    }).finally(function () {
        knex.destroy()
    })
}

const remove = (id) => {

    knex("orm4_vendor").where("id",`${id}`).del().then(function (count) {
        console.log('delete successful');
    }).finally(function () {
        knex.destroy()
    });
}

const list = () => {
    knex
    .from('orm4_vendor').select('*')
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']} ${row['middleName']} ${row['lastName']} ${row['dob']} ${row['phone']} ${row['email']} ${row['streetAddress']} ${row['city']} ${row['state']} ${row['zip']} ${row['department']} ${row['title']} ${row['salary']} ${row['managerId']} ${row['companyId']}`);
        }
    }).finally(function () {
        knex.destroy()
    })
}


module.exports = {create, read, update, remove, list}
