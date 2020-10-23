// ORM 4 sqlite knex contractor -- CP
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "sqlite.db"
    },
    useNullAsDefault: true
  });

const create = (contractor) => {

    knex('orm4_contractor').insert({id: `${contractor.id}`, firstName: `${contractor.firstName}`, middleName: `${contractor.middleName}`, lastName: `${contractor.lastName}`, dob: `${contractor.dob}`, phone:`${contractor.phone}`, email: `${contractor.email}`, streetAddress: `${contractor.streetAddress}`, city: `${contractor.city}`, state: `${contractor.state}`, zip: `${contractor.zip}`, company: `${contractor.company}`})
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
    .from('orm4_contractor').select('*').where({'id': id})
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']} ${row['middleName']} ${row['lastName']} ${row['dob']} ${row['phone']} ${row['email']} ${row['streetAddress']} ${row['city']} ${row['state']} ${row['zip']} ${row['department']} ${row['title']} ${row['salary']} ${row['managerId']} ${row['companyId']}`);
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (contractor) => {
    knex('orm4_contractor')
    .where("id", `${contractor.id}`)
    .update({ 
        id: `${contractor.id}`,
        firstName: `${contractor.firstName}`,
        middleName: `${contractor.middleName}`,
        lastName: `${contractor.lastName}`,
        dob: `${contractor.dob}`,
        phone: `${contractor.phone}`,
        email: `${contractor.email}`,
        streetAddress: `${contractor.streetAddress}`,
        city: `${contractor.city}`,
        state: `${contractor.state}`,
        zip: `${contractor.zip}`,
        companyId: `${contractor.companyId}`
    }).then(function (count) {
        console.log('update successful');
    }).finally(function () {
        knex.destroy()
    })
}

const remove = (id) => {

    knex("orm4_contractor").where("id",`${id}`).del().then(function (count) {
        console.log('delete successful');
    }).finally(function () {
        knex.destroy()
    });
}

const list = () => {
    knex
    .from('orm4_contractor').select('*')
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']} ${row['middleName']} ${row['lastName']} ${row['dob']} ${row['phone']} ${row['email']} ${row['streetAddress']} ${row['city']} ${row['state']} ${row['zip']} ${row['department']} ${row['title']} ${row['salary']} ${row['managerId']} ${row['companyId']}`);
        }
    }).finally(function () {
        knex.destroy()
    })
}


module.exports = {create, read, update, remove, list}
