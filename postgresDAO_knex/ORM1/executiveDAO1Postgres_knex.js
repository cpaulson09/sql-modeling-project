// ORM 1 sqlite knex executive -- CP
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

const create = (executive) => {

    knex('orm1_executive').insert({id: `${executive.id}`, managerid: `${executive.managerId}`, bonus: `${executive.bonus}`})
    .then((rows) => {
        console.log('create sucessful')
    }).finally(function () {
        knex.destroy()
    })
}

const read = (id) => {

    knex
    .from('orm1_executive').select('*').where({'id': id})
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['managerid']} ${row['bonus']}`);
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (executive) => {
    knex('orm1_executive')
    .where('id', `${executive.id}`)
    .update({ 
        id: `${executive.id}`, 
        managerid: `${executive.managerId}` ,
        bonus: `${executive.bonus}`
    }).then(function (count) {
        console.log('update successful');
        knex.destroy()
    })
}

const remove = (id) => {

    knex("orm1_executive").where("id",`${id}`).del().then(function (count) {
        console.log('delete');
    }).finally(function () {
        knex.destroy()
    });
}

const list = () => {
    knex
    .from('orm1_executive').select('*')
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['managerId']} ${row['bonus']}`);
        }
    }).finally(function () {
        knex.destroy()
    })
}


module.exports = {create, read, update, remove, list}
