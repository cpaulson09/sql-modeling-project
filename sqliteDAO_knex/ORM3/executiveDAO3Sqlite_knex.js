// ORM 3 sqlite knex executive -- CP
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "sqlite.db"
    },
    useNullAsDefault: true
  });

const create = (executive) => {

    knex('orm3_person').insert({
        id: `${executive.id}`, 
        type: 'executive',
        firstName: `${executive.firstName}`, 
        middleName: `${executive.middleName}`, 
        lastName: `${executive.lastName}`, 
        dob: `${executive.dob}`, 
        phone:`${executive.phone}`, 
        email: `${executive.email}`, 
        streetAddress: `${executive.streetAddress}`, 
        city: `${executive.city}`, 
        state: `${executive.state}`, 
        zip: `${executive.zip}`, 
        companyId: `${executive.companyId}`, 
        department: `${executive.department}`, 
        title: `${executive.title}`, 
        salary: `${executive.salary}`, 
        managerId: `${executive.managerId}`,
        bonus: `${executive.bonus}`,
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
        console.log(`${row['id']} ${row['firstName']} ${row['middleName']} ${row['lastName']} ${row['dob']} ${row['phone']} ${row['email']} ${row['streetAddress']} ${row['city']} ${row['state']} ${row['zip']} ${row['department']} ${row['title']} ${row['salary']} ${row['executiveId']} ${row['companyId']}`);
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (executive) => {
    knex('orm3_person')
    .where("id", `${executive.id}`)
    .update({ 
        id: `${executive.id}`,
        type: 'executive',
        firstName: `${executive.firstName}`,
        middleName: `${executive.middleName}`,
        lastName: `${executive.lastName}`,
        dob: `${executive.dob}`,
        phone: `${executive.phone}`,
        email: `${executive.email}`,
        streetAddress: `${executive.streetAddress}`,
        city: `${executive.city}`,
        state: `${executive.state}`,
        zip: `${executive.zip}`,
        companyId: `${executive.companyId}`, 
        department: `${executive.department}`, 
        title: `${executive.title}`, 
        salary: `${executive.salary}`, 
        managerId:`${executive.managerId}`, 
        companyId: `${executive.companyId}`,
        bonus: `${executive.bonus}`,
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
        console.log(`${row['id']} ${row['firstName']} ${row['middleName']} ${row['lastName']} ${row['dob']} ${row['phone']} ${row['email']} ${row['streetAddress']} ${row['city']} ${row['state']} ${row['zip']} ${row['department']} ${row['title']} ${row['salary']} ${row['executiveId']} ${row['companyId']}`);
        }
    }).finally(function () {
        knex.destroy()
    })
}


module.exports = {create, read, update, remove, list}
