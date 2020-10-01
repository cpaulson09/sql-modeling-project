// ORM 3 sqlite employees

create = (employee, db) => {
    db.serialize(() => {
        db.run(
            `INSERT INTO orm3_person (id, type, "firstName", "middleName", "lastName", dob, phone, email, "streetAddress", city, state, zip, "companyId", department, title, salary, "managerId", bonus, company) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                employee.id,
                'employee',
                employee.firstName,
                employee.middleName,
                employee.lastName,
                employee.dob,
                employee.phone,
                employee.email,
                employee.streetAddress,
                employee.city,
                employee.state,
                employee.zip,
                employee.companyId,
                employee.department,
                employee.title,
                employee.salary,
                employee.managerId,
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

update = (employee, db) => {
    let data = [
        employee.id,
        employee.type,
        employee.firstName,
        employee.middleName,
        employee.lastName,
        employee.dob,
        employee.phone,
        employee.email,
        employee.streetAddress,
        employee.city,
        employee.state,
        employee.zip,
        employee.companyId,
        employee.department,
        employee.title,
        employee.salary,
        employee.managerId,
        employee.bonus,
        employee.company,
        employee.id,
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
