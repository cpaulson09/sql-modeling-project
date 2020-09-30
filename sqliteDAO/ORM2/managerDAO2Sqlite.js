// ORM 1 sqlite managers

create = (manager, db) => {
    db.serialize(() => {
        db.run(
            `INSERT INTO orm2_manager ( id, "employeeId") VALUES(?,?)`,
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

read = (id, db) => {
    let sql = `SELECT * FROM orm2_manager WHERE id = ${id}`;
    db.serialize(() => {
        db.get(sql, [], (err, row) => {
            if (err) {
                return console.error(err.message);
            }
            let obj = {
                id: row.id,
                employeeId: row.employeeId,
            };
            // {object}
            return row
                ? console.log(obj)
                : console.log(`No record found with the id ${id}`);
        });
    });
}

update = (manager, db) => {
    let data = [
        manager.id,
        manager.employeeId,
        manager.id,
    ];

    db.serialize(() => {
        db.run(
            `UPDATE orm2_manager SET 
            id = ?, 
            "employeeId" = ?, 
            WHERE id = ?;`,
            data,
            function (err) {
                if (err) {
                    return console.log(err.message);
                }
                // get the last insert id
                console.log(`Success, updated manager`);
            }
        );
    })
}

remove = (id, db) => {
    db.serialize(() => {
        let sql = `DELETE FROM orm2_manager WHERE id = ${id}`;
        db.run(sql, (err, row) => {
            if (err) {
                return console.error(err.message);
            }

            return row
                ? console.log(`No record found with the id ${id}`)
                : console.log(`record ${id} removed from DB`);
        });
    })
}

list = (db) => {
    db.serialize(() => {
        let sql = `SELECT * FROM orm2_manager;`;
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error(err.message);
            }
            // return array
            rows.forEach((row) => {
                console.log(row);
            });
        });
    })
}


module.exports = {create, read, update, remove, list}
