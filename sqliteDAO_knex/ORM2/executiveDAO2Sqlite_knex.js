// ORM 2 sqlite knex executive -- CP
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "sqlite.db"
    },
    useNullAsDefault: true
  });

const create = (executive) => {

    knex('orm2_executive').insert({id: `${executive.id}`, managerId: `${executive.managerId}`, bonus: `${executive.bonus}`})
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
    .from('orm2_executive').select('*').where({'id': id})
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']}`)
    }
    }).finally(function () {
        knex.destroy()
    })
}

const update = (executive) => {
    knex('orm2_executive')
    .where("id", `${executive.id}`)
    .update({ 
        id: `${executive.id}`,
        managerId: `${executive.managerId}`,
        bonus: `${executive.bonus}`
    }).then(function (count) {
        console.log('update successful');
    }).finally(function () {
        knex.destroy()
    })
}

const remove = (id) => {

    knex("orm2_executive").where("id",`${id}`).del().then(function (count) {
        console.log('delete successful');
    }).finally(function () {
        knex.destroy()
    });
}

const list = () => {
    knex
    .from('orm2_executive').select('*')
    .then((rows) => {
    for (row of rows) {
        console.log(`${row['id']} ${row['firstName']}`)
        }
    }).finally(function () {
        knex.destroy()
    })
}


module.exports = {create, read, update, remove, list}
