// ORM 1 sqlite vendors
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':vendor:');

create = (vendor) => {
    // no return
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
