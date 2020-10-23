// ORM 1 sqlite knex employee -- CP
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
    knex('orm1_person').insert({id: `${employee.id}`, firstname: `${employee.firstName}`, middlename: `${employee.middleName}`, lastname: `${employee.lastName}`, dob: `${employee.dob}`, phone:`${employee.phone}`, email: `${employee.email}`, streetaddress: `${employee.streetAddress}`, city: `${employee.city}`, state: `${employee.state}`, zip: `${employee.zip}`})
    .then((rows) => {
        // console.log(rows)
    }).finally(function () {
        knex.destroy()
    })

    knex('orm1_employee').insert({id: `${employee.id}`, personid: `${employee.personId}`, department: `${employee.department}`, title: `${employee.title}`, salary: `${employee.salary}`, managerid:`${employee.managerId}`, companyid: `${employee.companyId}`})
    .then((rows) => {
        
    }).finally(function () {
        knex.destroy()
    })
}

const read = (id) => {

    knex
    .from('orm1_employee').select('*').where({'id': id})
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['personid']} ${row['department']} ${row['title']} ${row['salary']} ${row['managerid']} ${row['companyId']}`);
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (employee) => {
    knex('orm1_employee')
    .where('id', `${employee.id}`)
    .update({ 
        id: `${employee.id}`, 
        personid: `${employee.personId}`, 
        department: `${employee.department}`, 
        title: `${employee.title}`, 
        salary: `${employee.salary}`, 
        managerid:`${employee.managerId}`, 
        companyid: `${employee.companyId}`
    }).then(function (count) {
        console.log('update successful');
    }).finally(function () {
        knex.destroy()
    })
}

const remove = (id) => {
    knex('orm1_employee')
        .where( 'id', id )
        .del().finally(function () {
            knex.destroy()
        })

}

const list = () => {

    knex
    .from('orm1_employee').select('*')
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['department']}   ${row['title']}`);
    }
    }).finally(function () {
        knex.destroy()
    })
}


module.exports = {create, read, update, remove, list}
