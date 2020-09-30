// ORM 2 sqlite contractors

create = (contractor, db) => {
    db.serialize(() => {
        db.run(
            `INSERT INTO orm2_contractor ( id, "firstName", "middleName", "lastName", dob, phone, email, "streetAddress", city, state, zip, company) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                contractor.id,
                contractor.firstName,
                contractor.middleName,
                contractor.lastName,
                contractor.dob,
                contractor.phone,
                contractor.email,
                contractor.streetAddress,
                contractor.city,
                contractor.state,
                contractor.zip,
                contractor.company,
            ],
            function (err) {
                if (err) {
                    return console.log(err.message);
                }
                // get the last insert id
                console.log(`Success, created contractor`);
            }
        );
    });
}

read = (id, db) => {
    let sql = `SELECT * FROM orm2_contractor WHERE id = ${id}`;
    db.serialize(() => {
        db.get(sql, [], (err, row) => {
            if (err) {
                return console.error(err.message);
            }
            let obj = {
                id: row.id,
                firstName: row.firstName,
                middleName: row.middleName,
                lastName: row.lastName,
                dob: row.dob,
                phone: row.phone,
                email: row.email,
                streetAddress: row.streetAddress,
                city: row.city,
                state: row.state,
                zip: row.zip,
                company: row.company,
            };
            // {object}
            return row
                ? console.log(obj)
                : console.log(`No record found with the id ${id}`);
        });
    });
}

update = (contractor, db) => {
    let data = [
        contractor.id,
        contractor.firstName,
        contractor.middleName,
        contractor.lastName,
        contractor.dob,
        contractor.phone,
        contractor.email,
        contractor.streetAddress,
        contractor.city,
        contractor.state,
        contractor.zip,
        contractor.company,
        contractor.id,
    ];

    db.serialize(() => {
        db.run(
            `UPDATE orm2_contractor SET 
            id = ?, 
            id = ?, 
            "firstName" = ?, 
            "middleName" = ?, 
            "lastName" = ?,
            dob = ?,
            phone = ?, 
            email = ?, 
            "streetAddress" = ?, 
            city = ?, 
            state = ?, 
            zip = ?,  
            company= ?,
            WHERE id = ?;`,
            data,
            function (err) {
                if (err) {
                    return console.log(err.message);
                }
                // get the last insert id
                console.log(`Success, updated contractor`);
            }
        );
    })
}

remove = (id, db) => {
    db.serialize(() => {
        let sql = `DELETE FROM orm2_contractor WHERE id = ${id}`;
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
        let sql = `SELECT * FROM orm2_contractor;`;
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
