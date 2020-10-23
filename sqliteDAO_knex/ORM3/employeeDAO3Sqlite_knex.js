// ORM 3 sqlite knex employee -- CP
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "sqlite.db"
    },
    useNullAsDefault: true
  });

const create = (employee) => {

    knex('orm3_person').insert({id: `${employee.id}`, 
        type: 'employee',
        firstName: `${employee.firstName}`, 
        middleName: `${employee.middleName}`, 
        lastName: `${employee.lastName}`, 
        dob: `${employee.dob}`, 
        phone:`${employee.phone}`, 
        email: `${employee.email}`, 
        streetAddress: `${employee.streetAddress}`, 
        city: `${employee.city}`, 
        state: `${employee.state}`, 
        zip: `${employee.zip}`, 
        companyId: `${employee.companyId}`, 
        department: `${employee.department}`, 
        title: `${employee.title}`, 
        salary: `${employee.salary}`, 
        managerId: `${employee.managerId}`,
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

const update = (employee) => {
    knex('orm3_person')
    .where("id", `${employee.id}`)
    .update({ 
        id: `${employee.id}`,
        type: 'employee',
        firstName: `${employee.firstName}`,
        middleName: `${employee.middleName}`,
        lastName: `${employee.lastName}`,
        dob: `${employee.dob}`,
        phone: `${employee.phone}`,
        email: `${employee.email}`,
        streetAddress: `${employee.streetAddress}`,
        city: `${employee.city}`,
        state: `${employee.state}`,
        zip: `${employee.zip}`,
        companyId: `${employee.companyId}`, 
        department: `${employee.department}`, 
        title: `${employee.title}`, 
        salary: `${employee.salary}`, 
        managerId:`${employee.managerId}`, 
        companyId: `${employee.companyId}`,
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
