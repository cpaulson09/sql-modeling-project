const sqlite = require('sqlite3').verbose()
const client = require('pg')

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


// Get PostgreSQL DB loaded in here