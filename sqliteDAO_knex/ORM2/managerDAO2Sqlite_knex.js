// ORM 2 sqlite knex manager -- CP
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "sqlite.db"
    },
    useNullAsDefault: true
  });

const create = (manager) => {

    knex('orm2_manager').insert({id: `${manager.id}`, employeeId: `${manager.employeeId}`})
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
    .from('orm2_manager').select('*').where({'id': id})
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']}`)
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (manager) => {
    knex('orm2_manager')
    .where("id", `${manager.id}`)
    .update({ 
        id: `${manager.id}`,
        employeeId: `${manager.employeeId}`
    }).then(function (count) {
        console.log('update successful');
    }).finally(function () {
        knex.destroy()
    })
}

const remove = (id) => {

    knex("orm2_manager").where("id",`${id}`).del().then(function (count) {
        console.log('delete successful');
    }).finally(function () {
        knex.destroy()
    });
}

const list = () => {
    knex
    .from('orm2_manager').select('*')
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']}`)
        }
    }).finally(function () {
        knex.destroy()
    })
}


module.exports = {create, read, update, remove, list}
