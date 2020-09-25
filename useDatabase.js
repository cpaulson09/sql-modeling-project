const sqlite = require('sqlite3').verbose()
const client = require('pg')
const postyDB = 'postgres://postgres:root@localhost:5432/nosql'

// sqlite

let db = new sqlite.Database('./sqlite.db', err => {
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



// PostgreSQL

let client = new pg.Client(postyDB);
client.connect();

//do more queries down here