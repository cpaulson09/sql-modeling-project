// ORM 2 sqlite knex vendor -- CP
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "sqlite.db"
    },
    useNullAsDefault: true
  });

const create = (vendor) => {

    knex('orm2_vendor').insert({id: `${vendor.id}`, firstName: `${vendor.firstName}`, middleName: `${vendor.middleName}`, lastName: `${vendor.lastName}`, dob: `${vendor.dob}`, phone:`${vendor.phone}`, email: `${vendor.email}`, streetAddress: `${vendor.streetAddress}`, city: `${vendor.city}`, state: `${vendor.state}`, zip: `${vendor.zip}`, company: `${vendor.company}`})
    .then((rows) => {
        for (row of rows) {
            console.log(row)
        }
    }).finally(function () {
        knex.destroy()
    })
}

const read = (id) => {

    knex
    .from('orm2_vendor').select('*').where({'id': id})
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']} ${row['middleName']} ${row['lastName']} ${row['dob']} ${row['phone']} ${row['email']} ${row['streetAddress']} ${row['city']} ${row['state']} ${row['zip']} ${row['department']} ${row['title']} ${row['salary']} ${row['managerId']} ${row['companyId']}`);
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (vendor) => {
    knex('orm2_vendor')
    .where("id", `${vendor.id}`)
    .update({ 
        id: `${vendor.id}`,
        firstName: `${vendor.firstName}`,
        middleName: `${vendor.middleName}`,
        lastName: `${vendor.lastName}`,
        dob: `${vendor.dob}`,
        phone: `${vendor.phone}`,
        email: `${vendor.email}`,
        streetAddress: `${vendor.streetAddress}`,
        city: `${vendor.city}`,
        state: `${vendor.state}`,
        zip: `${vendor.zip}`,
        companyId: `${vendor.companyId}`
    }).then(function (count) {
        console.log('update successful');
    }).finally(function () {
        knex.destroy()
    })
}

const remove = (id) => {

    knex("orm2_vendor").where("id",`${id}`).del().then(function (count) {
        console.log('delete successful');
    }).finally(function () {
        knex.destroy()
    });
}

const list = () => {
    knex
    .from('orm2_vendor').select('*')
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']} ${row['middleName']} ${row['lastName']} ${row['dob']} ${row['phone']} ${row['email']} ${row['streetAddress']} ${row['city']} ${row['state']} ${row['zip']} ${row['department']} ${row['title']} ${row['salary']} ${row['managerId']} ${row['companyId']}`);
        }
    }).finally(function () {
        knex.destroy()
    })
}


module.exports = {create, read, update, remove, list}
