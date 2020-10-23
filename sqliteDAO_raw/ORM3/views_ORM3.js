
// Raw Sqlite RDMS views for ORM 3

const generateViews = (db) => {

    // db.serialize(() => {
    //     db.run(
    //         `CREATE VIEW [Vendors from SQLite ORM3] AS
    //          SELECT id, type, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip 
    //          FROM orm3_person
    //          WHERE type = 'vendor';`
    //     ),function (err) {
    //         if (err) {
    //             return console.log(err.message);
    //         }
    //     }
    // })

    // db.serialize(() => {
    //     db.run(
    //         `CREATE VIEW [Customers from SQLite ORM3] AS
    //          SELECT id, type, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip 
    //          FROM orm3_person
    //          WHERE type = 'customer';`
    //     ),function (err) {
    //         if (err) {
    //             return console.log(err.message);
    //         }
    //     }
    // })

    // db.serialize(() => {
    //     db.run(
    //         `CREATE VIEW [Contractors from SQLite ORM3] AS
    //          SELECT id, type, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip 
    //          FROM orm3_person
    //          WHERE type = 'contractor';`
    //     ),function (err) {
    //         if (err) {
    //             return console.log(err.message);
    //         }
    //     }
    // })

    db.serialize(() => {
        db.run(
            `CREATE VIEW [Employees from SQLite ORM3] AS
             SELECT id, type, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip, companyId, department, title, salary, managerId
             FROM orm3_person
             WHERE type = 'employee';`
        ),function (err) {
            if (err) {
                return console.log(err.message);
            }
        }
    })

    db.serialize(() => {
        db.run(
            `CREATE VIEW [Managers from SQLite ORM3] AS
             SELECT id, type, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip, companyId, department, title, salary, managerId
             FROM orm3_person
             WHERE type = 'manager';`
        ),function (err) {
            if (err) {
                return console.log(err.message);
            }
        }
    })

    db.serialize(() => {
        db.run(
            `CREATE VIEW [executives from SQLite ORM3] AS
             SELECT id, type, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip, companyId, department, title, salary, managerId, bonus
             FROM orm3_person
             WHERE type = 'executive';`
        ),function (err) {
            if (err) {
                return console.log(err.message);
            }
        }
    })

    // uncomment to DROP a view
    // db.serialize(() => {
    //     db.run(
    //         `DROP VIEW [view]`
    //     ),function (err) {
    //         if (err) {
    //             return console.log(err.message);
    //         }
    //     }
    // })
}

module.exports = {generateViews}