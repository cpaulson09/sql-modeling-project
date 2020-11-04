// ORM 4 sqlite contractors
const redis = require('redis');
const client = redis.createClient();


// client.set('hello', "world")
// client.get('hello', redis.print)

// client.quit;

create = (contractor, db) => {
   

    // on creation cache the new user
client.set('contractor', JSON.stringify(contractor), redis.print)

client.quit;

    db.serialize(() => {
        db.run(
            `INSERT INTO orm4_contractor ( id, "firstName", "middleName", "lastName", dob, phone, email, "streetAddress", city, state, zip, company) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`,
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

    const cacheData = null;
    //redis data

   if(client.get('contractor', redis.print)) {

       const cacheData = JSON.parse(client.get('contractor'))
       client.quit();
       console.log(cacheData["id"])
    let sql = `SELECT * FROM orm4_contractor WHERE id = ${id}`;
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
    return
   }

    let sql = `SELECT * FROM orm4_contractor WHERE id = ${id}`;
    db.serialize(() => {
    //     db.get(sql, [], (err, row) => {
    //         if (err) {
    //             return console.error(err.message);
    //         }
    //         let obj = {
    //             id: row.id,
    //             firstName: row.firstName,
    //             middleName: row.middleName,
    //             lastName: row.lastName,
    //             dob: row.dob,
    //             phone: row.phone,
    //             email: row.email,
    //             streetAddress: row.streetAddress,
    //             city: row.city,
    //             state: row.state,
    //             zip: row.zip,
    //             company: row.company,
    //         };
    //         // {object}
    //         return row
    //             ? console.log(obj)
    //             : console.log(`No record found with the id ${id}`);
    //     });
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
            `UPDATE orm4_contractor SET 
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
        let sql = `DELETE FROM orm4_contractor WHERE id = ${id}`;
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
        let sql = `SELECT * FROM orm4_contractor;`;
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
