// ORM 1 sqlite knex managers -- CP
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "sqlite.db"
    },
    useNullAsDefault: true
  });

const create = (manager) => {

    knex('orm1_manager').insert({id: `${manager.id}`, employeeId: `${manager.employeeId}`})
    .then((rows) => {
        console.log('create sucessful')
    }).finally(function () {
        knex.destroy()
    })
}

const read = (id) => {

    knex
    .from('orm1_manager').select('*').where({'id': id})
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['employeeId']}`);
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (manager) => {
    console.log(manager)
    knex('orm1_manager')
    .where('id', `${manager.id}`)
    .update({ 
        id: `${manager.id}`, 
        employeeId: `${manager.employeeId}` 
    }).then(function (count) {
        console.log('update successful');
        knex.destroy()
    })
}

const remove = (id) => {

    knex("orm1_manager").where("id",`${id}`).del().then(function (count) {
        console.log('delete successful');
    }).finally(function () {
        knex.destroy()
    });
}

const list = () => {
    knex
    .from('orm1_manager').select('*')
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['employeeId']}`);
        }
    }).finally(function () {
        knex.destroy()
    })
}


module.exports = {create, read, update, remove, list}
