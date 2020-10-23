// ORM 3 sqlite knex vendor -- CP
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "sqlite.db"
    },
    useNullAsDefault: true
  });

const create = (vendor) => {

    knex('orm3_person').insert({id: `${ vendor.id}`, 
        type: 'vendor',
        firstName: `${ vendor.firstName}`, 
        middleName: `${ vendor.middleName}`, 
        lastName: `${ vendor.lastName}`, 
        dob: `${ vendor.dob}`, 
        phone:`${ vendor.phone}`, 
        email: `${ vendor.email}`, 
        streetAddress: `${ vendor.streetAddress}`, 
        city: `${ vendor.city}`, 
        state: `${ vendor.state}`, 
        zip: `${ vendor.zip}`, 
        companyId: null, 
        department: null, 
        title: null, 
        salary: null, 
        managerId: null,
        bonus: null,
        company: `${vendor.company}`
    
    })
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
    .from('orm3_person').select('*').where({'id': id})
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']} ${row['middleName']} ${row['lastName']} ${row['dob']} ${row['phone']} ${row['email']} ${row['streetAddress']} ${row['city']} ${row['state']} ${row['zip']} ${row['department']} ${row['title']} ${row['salary']} ${row['managerId']} ${row['companyId']}`);
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (vendor) => {
    knex('orm3_person')
    .where("id", `${ vendor.id}`)
    .update({ 
        id: `${ vendor.id}`,
        type: 'vendor',
        firstName: `${ vendor.firstName}`,
        middleName: `${ vendor.middleName}`,
        lastName: `${ vendor.lastName}`,
        dob: `${ vendor.dob}`,
        phone: `${ vendor.phone}`,
        email: `${ vendor.email}`,
        streetAddress: `${ vendor.streetAddress}`,
        city: `${ vendor.city}`,
        state: `${ vendor.state}`,
        zip: `${ vendor.zip}`,
        companyId: null, 
        department: null, 
        title: null, 
        salary: null, 
        managerId: null,
        bonus: null,
        company: `${vendor.company}`

    }).then(function (count) {
        console.log('update successful');
    }).finally(function () {
        knex.destroy()
    })
}

const remove = (id) => {

    knex("orm3_person").where("id",`${id}`).del().then(function (count) {
        console.log('delete successful');
    }).finally(function () {
        knex.destroy()
    });
}

const list = () => {
    knex
    .from('orm3_person').select('*')
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']} ${row['middleName']} ${row['lastName']} ${row['dob']} ${row['phone']} ${row['email']} ${row['streetAddress']} ${row['city']} ${row['state']} ${row['zip']} ${row['department']} ${row['title']} ${row['salary']} ${row['managerId']} ${row['companyId']}`);
        }
    }).finally(function () {
        knex.destroy()
    })
}


module.exports = {create, read, update, remove, list}
