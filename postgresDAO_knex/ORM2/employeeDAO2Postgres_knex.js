// ORM 2 postgres knex employees -- CP
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

const create = (employee) => {

    knex('orm2_employee').insert({id: `${employee.id}`, firstname: `${employee.firstName}`, middlename: `${employee.middleName}`, lastname: `${employee.lastName}`, dob: `${employee.dob}`, phone:`${employee.phone}`, email: `${employee.email}`, streetaddress: `${employee.streetAddress}`, city: `${employee.city}`, state: `${employee.state}`, zip: `${employee.zip}`, companyid: `${employee.companyId}`, department: `${employee.department}`, title: `${employee.title}`, salary: `${employee.salary}`, managerid: `${employee.managerId}`})
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
    .from('orm2_employee').select('*').where({'id': id})
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']} ${row['middleName']} ${row['lastName']} ${row['dob']} ${row['phone']} ${row['email']} ${row['streetAddress']} ${row['city']} ${row['state']} ${row['zip']} ${row['department']} ${row['title']} ${row['salary']} ${row['managerId']} ${row['companyId']}`);
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (employee) => {
    knex('orm2_employee')
    .where("id", `${employee.id}`)
    .update({ 
        id: `${employee.id}`,
        firstname: `${employee.firstName}`,
        middlename: `${employee.middleName}`,
        lastname: `${employee.lastName}`,
        dob: `${employee.dob}`,
        phone: `${employee.phone}`,
        email: `${employee.email}`,
        streetaddress: `${employee.streetAddress}`,
        city: `${employee.city}`,
        state: `${employee.state}`,
        zip: `${employee.zip}`,
        companyid: `${employee.companyId}`, 
        department: `${employee.department}`, 
        title: `${employee.title}`, 
        salary: `${employee.salary}`, 
        managerd:`${employee.managerId}`, 
        companyid: `${employee.companyId}`
    }).then(function (count) {
        console.log('update successful');
    }).finally(function () {
        knex.destroy()
    })
}

const remove = (id) => {

    knex("orm2_employee").where("id",`${id}`).del().then(function (count) {
        console.log('delete successful');
    }).finally(function () {
        knex.destroy()
    });
}

const list = () => {
    knex
    .from('orm2_employee').select('*')
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']} ${row['middleName']} ${row['lastName']} ${row['dob']} ${row['phone']} ${row['email']} ${row['streetAddress']} ${row['city']} ${row['state']} ${row['zip']} ${row['department']} ${row['title']} ${row['salary']} ${row['managerId']} ${row['companyId']}`);
        }
    }).finally(function () {
        knex.destroy()
    })
}


module.exports = {create, read, update, remove, list}
