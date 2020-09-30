// ORM 1 sqlite managers

create = (manager, db) => {
    db.serialize(() => {
        db.run(
            `INSERT INTO orm2_manager ( id, employeeId) VALUES(?,?)`,
            [
                manager.id,
                manager.employeeId,
            ],
            function (err) {
                if (err) {
                    return console.log(err.message);
                }
                // get the last insert id
                console.log(`Success, created manager`);
            }
        );
    });
}

read = (id) => {
    // return vendor object
}

update = (manager) => {
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
