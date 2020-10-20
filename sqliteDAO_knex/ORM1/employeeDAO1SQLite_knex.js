// ORM 1 sqlite knex employees -- CP
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "sqlite.db"
    },
    useNullAsDefault: true
  });

const create = (employee) => {

    knex('orm1_person').insert({id: `${employee.id}`, firstName: `${employee.firstName}`, middleName: `${employee.middleName}`, lastName: `${employee.lastName}`, dob: `${employee.dob}`, phone:`${employee.phone}`, email: `${employee.email}`, streetAddress: `${employee.streetAddress}`, city: `${employee.city}`, state: `${employee.state}`, zip: `${employee.zip}`})
    .then((rows) => {
        for (row of rows) {
            console.log(row)
        }
    })
    knex('orm1_employee').insert({id: `${employee.id}`, personId: `${employee.personId}`, department: `${employee.department}`, title: `${employee.title}`, salary: `${employee.salary}`, managerId:`${employee.managerId}`, companyId: `${employee.companyId}`})
    .then((rows) => {
        for (row of rows) {
            //console.log(row['department'])
        }
    }).finally(function () {
        knex.destroy()
    })
}

const read = (id) => {

    knex
    .from('orm1_employee').select('*').where({'id': id})
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['personId']} ${row['department']} ${row['title']} ${row['salary']} ${row['managerId']} ${row['companyId']}`);
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (employee) => {
    knex('orm1_employee')
    .where("id", `${employee.id}`)
    .update({ 
        id: `${employee.id}`, 
        personId: `${employee.personId}`, 
        department: `${employee.department}`, 
        title: `${employee.title}`, 
        salary: `${employee.salary}`, 
        managerId:`${employee.managerId}`, 
        companyId: `${employee.companyId}`
    }).then(function (count) {
        console.log('update successful');
    }).finally(function () {
        knex.destroy()
    })
}

const remove = (id) => {

    knex("orm1_employee").where("id",`${id}`).del().then(function (count) {
        console.log('delete successful');
    }).finally(function () {
        knex.destroy()
    });
}

const list = () => {
    knex
    .from('orm1_employee').select('*')
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']} ${row['lastName']}`);
        }
    }).finally(function () {
        knex.destroy()
    })
}


module.exports = {create, read, update, remove, list}
