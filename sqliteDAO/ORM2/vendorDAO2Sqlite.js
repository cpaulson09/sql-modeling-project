// ORM 1 sqlite vendors
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite.Database('./../sqlite.db', err => {
    if (err){
        console.error(err.message)
    }
    console.log('\nconnected to db')
})



// db.close((err) => {
//     if (err){
//         console.error(err.message)
//     }
//     console.log('closing sqlite database\n')
// })


create = (vendor) => {
    // no return
    db.serialize(() => {
        db.run('INSERT')

        // db.each(`SELECT * FROM orm3_person;`, (err, row) => {
        //   if (err) {
        //     console.error(err.message)
        //   }
        //   console.log(row)
        // })
      })
    
}


read = (id) => {
    // return vendor object
}

update = (vendor) => {
    // replace existing row(s)
    // no return
}

remove = (id) => {
    // no return
}

list = () => {
    // return array of objects
}


module.exports = {create, read, update, remove, list}
