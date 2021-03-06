// ORM 1 sqlite vendors
const redis = require('redis')
const client = redis.createClient()

const create = (vendor, db) => {

    // redis create
    console.log(vendor)
    client.hset(`id:${vendor.id}`, 'vendor', JSON.stringify(vendor))

    db.serialize(() => {
        db.run(
            `INSERT INTO orm4_vendor ( id, "firstName", "middleName", "lastName", dob, phone, email, "streetAddress", city, state, zip, company) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                vendor.id,
                vendor.firstName,
                vendor.middleName,
                vendor.lastName,
                vendor.dob,
                vendor.phone,
                vendor.email,
                vendor.streetAddress,
                vendor.city,
                vendor.state,
                vendor.zip,
                vendor.company,
            ],
            function (err) {
                if (err) {
                    return console.log(err.message);
                }
                // get the last insert id
                console.log(`Success, created vendor`);
            }
        );
    });
};

const read = (id, db) => {

  let cachedData = ''
  const vendorExists = client.hexists(`id:${id}`, 'vendor', (err, res) => {
    // console.log(JSON.parse(reply.toString()))
    return
  })
  if (vendorExists){
    client.quit()
  }
  client.quit()

  // return vendor object
  let sql = `SELECT * FROM orm4_vendor WHERE id = ${id}`;
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
};

const update = (vendor, db) => {

    client.hget(`id:${vendor.id}`, (err,res) => {
        let vendorCache = JSON.parse(reply.toString())
        vendorCache.firstName = vendor.firstName
        reuturn
    })


  // replace existing row(s)
  // no return
  db.serialize(() => {

    let data = [vendor.id, vendor.firstName, vendor.middleName, vendor.lastName, vendor.dob, vendor.phone, vendor.email, vendor.streetAddress, vendor.city, vendor.state, vendor.zip, vendor.company]

    db.run(`UPDATE orm4_vendor SET 
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
        "company" = ?, 
        WHERE id = ?;`, data,  function(err) {
        if (err) {
            return console.log(err.message);
        }
        // get the last insert id
        console.log(`Success, updated vendor`);
    })
})

};

const remove = (id, db) => {

client.hdel(`id:${vendor.id}`, 'vendor')

  // no return
  db.serialize(() => {
    let sql = `DELETE FROM orm4_vendor WHERE id = ${id}`
    db.run(sql, (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        // {object}
        return row
          ? console.log(`No record found with the id ${id}`)
          : console.log(`record ${id} removed from DB`)
    })
})
};

const list = (db) => {
    
    client.keys("*", function (err, keys) {
        if (err) return console.log(err);
      
        for (var i = 0, len = keys.length; i < len; i++) {
          const regex = "/id:*/g";
          if (keys[i].search(regex)) {
            client.hgetall(keys[i], (err, rep) => {
              console.log(rep);
              return;
            });
          }
        }
      });


  // return array of objects
  db.serialize(() => {
    let sql = `SELECT * FROM orm4_vendor;`
    db.all(sql, [], (err, rows) => {
        if (err){
            console.error(err.message)
        }
        // return array
        rows.forEach((row) => {
            console.log(row);
        })
    })
})
};

module.exports = { create, read, update, remove, list };
