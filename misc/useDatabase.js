const sqlite = require('sqlite3').verbose()
const client = require('pg')
// const vendorDao = require('./sqliteDAO/vendorDAO1Sqlite')
// const pgClient = new client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'nosql',
//     password: 'root',
//     port: 5432
// })
// vendorDao.create()
// vendorDao.read()

// sqlite - - - - - - - - - - 

let db = new sqlite.Database('./../sqlite.db', err => {
    if (err){
        console.error(err.message)
    }
    console.log('\nconnected to db')
})

db.serialize(() => {
    db.each(`SELECT * FROM orm3_person;`, (err, row) => {
      if (err) {
        console.error(err.message)
      }
      console.log(row)
    })
  })

db.close((err) => {
    if (err){
        console.error(err.message)
    }
    console.log('closing sqlite database\n')
})



// PostgreSQL - - - - - - - - - 

// pgClient.connect();

// const query = `SELECT * FROM orm3_employees`

// pgClient.query(query, (err, res) => {
//     if (err) {
//         console.error(err)
//     }
//     console.log(res)
// })

//do more queries down here