// ORM 3 sqlite contractors

create = (contractor, db) => {
    db.serialize(() => {
        db.run(
            `INSERT INTO orm3_person (id, type, "firstName", "middleName", "lastName", dob, phone, email, "streetAddress", city, state, zip, "companyId", department, title, salary, "managerId", bonus, company) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                contractor.id,
                'contractor',
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
                null,
                null,
                null,
                null,
                null,
                null,
                contractor.company
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

update = (contractor, db) => {
    let data = [
        contractor.id,
        contractor.type,
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
        contractor.companyId,
        contractor.department,
        contractor.title,
        contractor.salary,
        contractor.managerId,
        contractor.bonus,
        contractor.company,
        contractor.id,
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
