// ORM 2 sqlite knex customer -- CP
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "sqlite.db"
    },
    useNullAsDefault: true
  });

const create = (customer) => {

    knex('orm2_customer').insert({id: `${customer.id}`, firstName: `${customer.firstName}`, middleName: `${customer.middleName}`, lastName: `${customer.lastName}`, dob: `${customer.dob}`, phone:`${customer.phone}`, email: `${customer.email}`, streetAddress: `${customer.streetAddress}`, city: `${customer.city}`, state: `${customer.state}`, zip: `${customer.zip}`, company: `${customer.company}`})
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
    .from('orm2_customer').select('*').where({'id': id})
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']} ${row['middleName']} ${row['lastName']} ${row['dob']} ${row['phone']} ${row['email']} ${row['streetAddress']} ${row['city']} ${row['state']} ${row['zip']} ${row['department']} ${row['title']} ${row['salary']} ${row['managerId']} ${row['companyId']}`);
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (customer) => {
    knex('orm2_customer')
    .where("id", `${customer.id}`)
    .update({ 
        id: `${customer.id}`,
        firstName: `${customer.firstName}`,
        middleName: `${customer.middleName}`,
        lastName: `${customer.lastName}`,
        dob: `${customer.dob}`,
        phone: `${customer.phone}`,
        email: `${customer.email}`,
        streetAddress: `${customer.streetAddress}`,
        city: `${customer.city}`,
        state: `${customer.state}`,
        zip: `${customer.zip}`,
        companyId: `${customer.companyId}`
    }).then(function (count) {
        console.log('update successful');
    }).finally(function () {
        knex.destroy()
    })
}

const remove = (id) => {

    knex("orm2_customer").where("id",`${id}`).del().then(function (count) {
        console.log('delete successful');
    }).finally(function () {
        knex.destroy()
    });
}

const list = () => {
    knex
    .from('orm2_customer').select('*')
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']} ${row['middleName']} ${row['lastName']} ${row['dob']} ${row['phone']} ${row['email']} ${row['streetAddress']} ${row['city']} ${row['state']} ${row['zip']} ${row['department']} ${row['title']} ${row['salary']} ${row['managerId']} ${row['companyId']}`);
        }
    }).finally(function () {
        knex.destroy()
    })
}


module.exports = {create, read, update, remove, list}
