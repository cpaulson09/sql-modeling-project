// ORM 3 postgres knex contractor -- CP
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

const create = (contractor) => {

    knex('orm3_person').insert({id: `${ contractor.id}`, 
        type: 'contractor',
        firstname: `${ contractor.firstName}`, 
        middlename: `${ contractor.middleName}`, 
        lastname: `${ contractor.lastName}`, 
        dob: `${ contractor.dob}`, 
        phone:`${ contractor.phone}`, 
        email: `${ contractor.email}`, 
        streetaddress: `${ contractor.streetAddress}`, 
        city: `${ contractor.city}`, 
        state: `${ contractor.state}`, 
        zip: `${ contractor.zip}`, 
        companyid: null, 
        department: null, 
        title: null, 
        salary: null, 
        managerid: null,
        bonus: null,
        company: `${contractor.company}`
    
    })
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
    .from('orm3_person').select('*').where({'id': id})
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']} ${row['middleName']} ${row['lastName']} ${row['dob']} ${row['phone']} ${row['email']} ${row['streetAddress']} ${row['city']} ${row['state']} ${row['zip']} ${row['department']} ${row['title']} ${row['salary']} ${row['managerId']} ${row['companyId']}`);
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (contractor) => {
    knex('orm3_person')
    .where("id", `${ contractor.id}`)
    .update({ 
        id: `${ contractor.id}`,
        type: 'contractor',
        firstname: `${ contractor.firstName}`,
        middlename: `${ contractor.middleName}`,
        lastname: `${ contractor.lastName}`,
        dob: `${ contractor.dob}`,
        phone: `${ contractor.phone}`,
        email: `${ contractor.email}`,
        streetaddress: `${ contractor.streetAddress}`,
        city: `${ contractor.city}`,
        state: `${ contractor.state}`,
        zip: `${ contractor.zip}`,
        companyjd: null, 
        department: null, 
        title: null, 
        salary: null, 
        managerid: null,
        bonus: null,
        company: `${contractor.company}`

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
