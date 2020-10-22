// ORM 3 postgres knex manager -- CP
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

const create = (manager) => {

    knex('orm3_person').insert({id: `${manager.id}`, 
        type: 'manager',
        firstname: `${manager.firstName}`, 
        middlename: `${manager.middleName}`, 
        lastname: `${manager.lastName}`, 
        dob: `${manager.dob}`, 
        phone:`${manager.phone}`, 
        email: `${manager.email}`, 
        streetaddress: `${manager.streetAddress}`, 
        city: `${manager.city}`, 
        state: `${manager.state}`, 
        zip: `${manager.zip}`, 
        companyid: `${manager.companyId}`, 
        department: `${manager.department}`, 
        title: `${manager.title}`, 
        salary: `${manager.salary}`, 
        managerid: `${manager.managerId}`,
        bonus: null,
        company: null
    
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

const update = (manager) => {
    knex('orm3_person')
    .where("id", `${manager.id}`)
    .update({ 
        id: `${manager.id}`,
        type: 'manager',
        firstname: `${manager.firstName}`,
        middlename: `${manager.middleName}`,
        lastname: `${manager.lastName}`,
        dob: `${manager.dob}`,
        phone: `${manager.phone}`,
        email: `${manager.email}`,
        streetaddress: `${manager.streetAddress}`,
        city: `${manager.city}`,
        state: `${manager.state}`,
        zip: `${manager.zip}`,
        companyid: `${manager.companyId}`, 
        department: `${manager.department}`, 
        title: `${manager.title}`, 
        salary: `${manager.salary}`, 
        managerid:`${manager.managerId}`, 
        companyid: `${manager.companyId}`,
        bonus: null,
        company: null

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
