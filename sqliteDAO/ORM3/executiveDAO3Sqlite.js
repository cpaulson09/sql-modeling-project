// ORM 3 sqlite executive

create = (executive, db) => {
    db.serialize(() => {
        db.run(
            `INSERT INTO orm3_person (id, type, "firstName", "middleName", "lastName", dob, phone, email, "streetAddress", city, state, zip, "companyId", department, title, salary, "managerId", bonus, company) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                executive.id,
                'executive',
                executive.firstName,
                executive.middleName,
                executive.lastName,
                executive.dob,
                executive.phone,
                executive.email,
                executive.streetAddress,
                executive.city,
                executive.state,
                executive.zip,
                executive.companyId,
                executive.department,
                executive.title,
                executive.salary,
                executive.managerId,
                null,
                null
            ],
            function (err) {
                if (err) {
                    return console.log(err.message);
                }
                // get the last insert id
                console.log(`Success, created employee`);
            }
        );
    });
}

read = (id, db) => {
    let sql = `SELECT * FROM orm3_person WHERE id = ${id}`;
    db.serialize(() => {
        db.get(sql, [], (err, row) => {
            if (err) {
                return console.error(err.message);
            }
            let obj = {
                id: row.id,
                type: row.type,
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
                companyId: row.companyId,
                department: row.department,
                title: row.title,
                salary: row.salary,
                managerId: row.managerId,
                bonus: row.bonus,
                company: row.company
            };
            // {object}
            return row
                ? console.log(obj)
                : console.log(`No record found with the id ${id}`);
        });
    });
}

update = (executive, db) => {
    let data = [
        executive.id,
        executive.type,
        executive.firstName,
        executive.middleName,
        executive.lastName,
        executive.dob,
        executive.phone,
        executive.email,
        executive.streetAddress,
        executive.city,
        executive.state,
        executive.zip,
        executive.companyId,
        executive.department,
        executive.title,
        executive.salary,
        executive.managerId,
        executive.bonus,
        executive.company,
        executive.id,
    ];

    db.serialize(() => {
        db.run(
            `UPDATE orm3_person SET 
            id = ?,
            type = ?, 
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
            companyId = ?,
            department = ?,
            title = ?,
            salary = ?,
            managerId = ?,
            bonus = ?,
            company = ?,
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
        let sql = `DELETE FROM orm3_person WHERE id = ${id}`;
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
        let sql = `SELECT * FROM orm3_person;`;
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
