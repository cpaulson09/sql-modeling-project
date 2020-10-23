const { exec } = require("child_process")
const faker = require("faker")
const sqlite = require("sqlite3").verbose()
const { Pool, Client } = require("pg")
const { Sequelize } = require("sequelize");


// SQLite Raw DAO
employee1DAO = require("./sqliteDAO_raw/ORM1/employeeDAO1Sqlite")
manager1DAO = require("./sqliteDAO_raw/ORM1/managerDAO1Sqlite")
executive1DAO = require("./sqliteDAO_raw/ORM1/executiveDAO1Sqlite")
vendor1DAO = require("./sqliteDAO_raw/ORM1/vendorDAO1Sqlite")
contractor1DAO = require("./sqliteDAO_raw/ORM1/contractorDAO1Sqlite")
customer1DAO = require("./sqliteDAO_raw/ORM1/customerDAO1Sqlite")
employee2DAO = require("./sqliteDAO_raw/ORM2/employeeDAO2Sqlite")
customer2DAO = require("./sqliteDAO_raw/ORM2/customerDAO2Sqlite")
manager2DAO = require("./sqliteDAO_raw/ORM2/managerDAO2Sqlite")
contractor2DAO = require("./sqliteDAO_raw/ORM2/contractorDAO2Sqlite")
vendor2DAO = require("./sqliteDAO_raw/ORM2/vendorDAO2Sqlite")
executive2DAO = require("./sqliteDAO_raw/ORM2/executiveDAO2Sqlite")
manager3DAO = require("./sqliteDAO_raw/ORM3/managerDAO3Sqlite")
executive3DAO = require("./sqliteDAO_raw/ORM3/executiveDAO3Sqlite")
vendors3DAO = require("./sqliteDAO_raw/ORM3/vendorDAO3Sqlite")
customer3DAO = require("./sqliteDAO_raw/ORM3/customerDAO3Sqlite")
customer4DAO = require("./sqliteDAO_raw/ORM4/customerDAO4Sqlite")

// SQLite Knex DAO
employee1DAOsqlite_knex = require('./sqliteDAO_knex/ORM1/employeeDAO1SQLite_knex')
manager1DAOsqlite_knex = require('./sqliteDAO_knex/ORM1/managerDAO1Sqlite_knex')
executive1DAOsqlite_knex = require('./sqliteDAO_knex/ORM1/executiveDAO1Sqlite_knex')
customer1DAOsqlite_knex = require('./sqliteDAO_knex/ORM1/customerDAO1Sqlite_knex')
vendor1DAOsqlite_knex = require('./sqliteDAO_knex/ORM1/vendorDAO1Sqlite_knex')
contractor1DAOsqlite_knex = require('./sqliteDAO_knex/ORM1/contractorDAO1Sqlite_knex')
employee2DAOsqlite_knex = require('./sqliteDAO_knex/ORM2/employeeDAO2Sqlite_knex')
contractor2DAOsqlite_knex = require('./sqliteDAO_knex/ORM2/contractorDAO2Sqlite_knex')
customer2DAOsqlite_knex = require('./sqliteDAO_knex/ORM2/customerDAO2Sqlite_knex')
vendor2DAOsqlite_knex = require('./sqliteDAO_knex/ORM2/vendorDAO2Sqlite_knex')
manager2DAOsqlite_knex = require('./sqliteDAO_knex/ORM2/managerDAO2Sqlite_knex')
executive2DAOsqlite_knex = require('./sqliteDAO_knex/ORM2/executiveDAO2Sqlite_knex')
employee3DAOsqlite_knex = require('./sqliteDAO_knex/ORM3/employeeDAO3Sqlite_knex')
manager3DAOsqlite_knex = require('./sqliteDAO_knex/ORM3/managerDAO3Sqlite_knex')
executive3DAOsqlite_knex = require('./sqliteDAO_knex/ORM3/executiveDAO3Sqlite_knex')
customer3DAOsqlite_knex = require('./sqliteDAO_knex/ORM3/customerDAO3Sqlite_knex')
contractor3DAOsqlite_knex = require('./sqliteDAO_knex/ORM3/contractorDAO3Sqlite_knex')
vendor3DAOsqlite_knex = require('./sqliteDAO_knex/ORM3/vendorDAO3Sqlite_knex')
employee4DAOsqlite_knex = require('./sqliteDAO_knex/ORM4/employeeDAO4Sqlite_knex')
contractor4DAOsqlite_knex = require('./sqliteDAO_knex/ORM4/contractorDAO4Sqlite_knex')
customer4DAOsqlite_knex = require('./sqliteDAO_knex/ORM4/customerDAO4Sqlite_knex')
vendor4DAOsqlite_knex = require('./sqliteDAO_knex/ORM4/vendorDAO4Sqlite_knex')

// PostgreSQL Raw DAOs
employee1DAOPostgres = require("./postgresDAO_raw/ORM1/employeeDAO1Postgres")
manager1DAOPostgres = require("./postgresDAO_raw/ORM1/managerDAO1Postgres")
executive1DAOPostgres = require("./postgresDAO_raw/ORM1/executiveDAO1Postgres")
customer1DAOPostgres = require("./postgresDAO_raw/ORM1/customerDAO1Postgres")
contractor1DAOPostgres = require("./postgresDAO_raw/ORM1/contractorDAO1Postgres")
vendor1DAOPostgres = require("./postgresDAO_raw/ORM1/vendorDAO1Postgres")
employee2DAOpostgres = require('./postgresDAO_raw/ORM2/employeeDAO2Postgres')
customer2DAOpostgres = require("./postgresDAO_raw/ORM2/customerDAO2Postgres")
executive2DAOpostgres = require("./postgresDAO_raw/ORM2/executiveDAO2Postgres")
contractor2DAOpostgres = require('./postgresDAO_raw/ORM2/contractorDAO2Postgres')
manager2DAOpostgres = require('./postgresDAO_raw/ORM2/managerDAO2Postgres')
vendor2DAOPostgres = require("./postgresDAO_raw/ORM2/vendorDAO2Postgres")
contractor3DAOPostgres = require("./postgresDAO_raw/ORM3/contractorDAO3Postgres")
customer3DAOPostgres = require("./postgresDAO_raw/ORM3/customerDAO3Postgres")
vendor3DAOPostgres = require("./postgresDAO_raw/ORM3/vendorDAO3Postgres")
executive3DAOPostgres = require("./postgresDAO_raw/ORM3/executiveDAO3Postgres")
manager3DAOPostgres = require("./postgresDAO_raw/ORM3/managerDAO3Postgres")
employee3DAOPostgres = require("./postgresDAO_raw/ORM3/employeeDAO3Postgres")
employee4DAOPostgres = require("./postgresDAO_raw/ORM4/employeeDAO4Postgres")
customer4DAOPostgres = require("./postgresDAO_raw/ORM4/customerDAO4Postgres")
contractor4DAOPostgres = require("./postgresDAO_raw/ORM4/contractorDAO4Postgres")
vendor4DAOPostgres = require("./postgresDAO_raw/ORM4/vendorDAO4Postgres")

// PostgreSQL Knex DAOs
employee1DAOpostgres_knex = require('./postgresDAO_knex/ORM1/employeeDAO1Postgres_knex')
manager1DAOpostgres_knex = require('./postgresDAO_knex/ORM1/managerDAO1Postgres_knex')
executive1DAOpostgres_knex = require('./postgresDAO_knex/ORM1/executiveDAO1Postgres_knex')
customer1DAOpostgres_knex = require('./postgresDAO_knex/ORM1/customerDAOPostgres_knex')
contractor1DAOpostgres_knex = require('./postgresDAO_knex/ORM1/contractorDAO1Postgres_knex')
vendor1DAOpostgres_knex = require('./postgresDAO_knex/ORM1/vendorDAO1Postgres_knex')
contractor2DAOpostgres_knex = require('./postgresDAO_knex/ORM2/contractorDAO2Postgres_knex')
customer2DAOpostgres_knex = require('./postgresDAO_knex/ORM2/customerDAO2Postgres_knex')
employee2DAOpostgres_knex = require('./postgresDAO_knex/ORM2/employeeDAO2Postgres_knex')
executive2DAOpostgres_knex = require('./postgresDAO_knex/ORM2/executiveDAO2Postgres_knex')
manager2DAOpostgres_knex = require('./postgresDAO_knex/ORM2/managerDAO2Postgres_knex.js')
vendor2DAOpostgres_knex = require('./postgresDAO_knex/ORM2/vendorDAO2Postgres_knex')
contractor3DAOpostgres_knex = require('./postgresDAO_knex/ORM3/contractorDAO3Postgres_knex')
customer3DAOpostgres_knex = require('./postgresDAO_knex/ORM3/customerDAO3Postgres_knex')
employee3DAOpostgres_knex = require('./postgresDAO_knex/ORM3/employeeDAO3Postgres_knex')
manager3DAOpostgres_knex = require('./postgresDAO_knex/ORM3/managerDAO3Postgres_knex')
vendor3DAOpostgres_knex = require('./postgresDAO_knex/ORM3/vendorDAO3Postgres_knex')
executive3DAOpostgres_knex = require('./postgresDAO_knex/ORM3/executiveDAO3Postgres_knex')
contractor4DAOpostgres_knex = require('./postgresDAO_knex/ORM4/contractorDAO4Postgres_knex')
customer4DAOpostgres_knex = require('./postgresDAO_knex/ORM4/customerDAO4Postgres_knex')
employee4DAOpostgres_knex = require('./postgresDAO_knex/ORM4/employeeDAO4Postgres_knex')
vendor4DAOpostgres_knex = require('./postgresDAO_knex/ORM4/vendorDAO4Postgres_knex')

companiesMongo = require("./mongoDAO_raw/company")
contractorsMongo = require("./mongoDAO_raw/contractor")
customersMongo = require("./mongoDAO_raw/customer")
vendorsMongo = require("./mongoDAO_raw/vendor")

mongooseCompany = require('./mongooseDAO_raw/company')
mongooseContractor = require('./mongooseDAO_raw/contractor')
mongooseCustomer = require('./mongooseDAO_raw/customer')
mongooseVendor = require('./mongooseDAO_raw/vendor')

// 1 - create ES6 classes with Contructors for Person, Employee, Manager, Executive, Nonemployee, Contractor, Vendor, Customer
// parent class
class Person {
    constructor(
        id,
        firstName,
        middleName,
        lastName,
        dob,
        phone,
        email,
        streetAddress,
        city,
        state,
        zip
    ) {
        this.id = id
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
        this.dob = dob
        this.phone = phone
        this.email = email
        this.streetAddress = streetAddress
        this.city = city
        this.state = state
        this.zip = zip
    }
}
class Employee extends Person {
    constructor(
        id,
        personId,
        firstName,
        middleName,
        lastName,
        dob,
        phone,
        email,
        streetAddress,
        city,
        state,
        zip,
        companyId,
        department,
        title,
        salary,
        managerId
    ) {
        super(
            id,
            firstName,
            middleName,
            lastName,
            dob,
            phone,
            email,
            streetAddress,
            city,
            state,
            zip
        )
        this.personId = personId
        this.companyId = companyId
        this.department = department
        this.title = title
        this.salary = salary
        this.managerId = managerId
    }
}
class Manager extends Employee {
    constructor(
        id,
        employeeId,
        firstName,
        middleName,
        lastName,
        dob,
        phone,
        email,
        streetAddress,
        city,
        state,
        zip,
        companyId,
        department,
        title,
        salary,
        managerId,
        directReports
    ) {
        super(
            id,
            firstName,
            middleName,
            lastName,
            dob,
            phone,
            email,
            streetAddress,
            city,
            state,
            zip,
            companyId,
            department,
            title,
            salary,
            managerId
        )
        this.employeeId = employeeId
        this.directReports = directReports
    }
}
class Executive extends Manager {
    constructor(
        id,
        firstName,
        middleName,
        lastName,
        dob,
        phone,
        email,
        streetAddress,
        city,
        state,
        zip,
        companyId,
        department,
        title,
        salary,
        managerId,
        bonus,
        directReports
    ) {
        super(
            id,
            firstName,
            middleName,
            lastName,
            dob,
            phone,
            email,
            streetAddress,
            city,
            state,
            zip,
            companyId,
            department,
            title,
            salary,
            managerId,
            directReports
        )
        this.bonus = bonus
    }
}

class Nonemployee extends Person {
    constructor(
        id,
        firstName,
        middleName,
        lastName,
        dob,
        phone,
        email,
        streetAddress,
        city,
        state,
        zip,
        company
    ) {
        super(
            id,
            firstName,
            middleName,
            lastName,
            dob,
            phone,
            email,
            streetAddress,
            city,
            state,
            zip
        )
        this.company = company
    }
}
class Contractor extends Nonemployee {
    constructor(
        id,
        firstName,
        middleName,
        lastName,
        dob,
        phone,
        email,
        streetAddress,
        city,
        state,
        zip,
        company
    ) {
        super(
            id,
            firstName,
            middleName,
            lastName,
            dob,
            phone,
            email,
            streetAddress,
            city,
            state,
            zip,
            company
        )
    }
}
class Vendor extends Nonemployee {
    constructor(
        id,
        firstName,
        middleName,
        lastName,
        dob,
        phone,
        email,
        streetAddress,
        city,
        state,
        zip,
        company
    ) {
        super(
            id,
            firstName,
            middleName,
            lastName,
            dob,
            phone,
            email,
            streetAddress,
            city,
            state,
            zip,
            company
        )
    }
}
class Customer extends Nonemployee {
    constructor(
        id,
        firstName,
        middleName,
        lastName,
        dob,
        phone,
        email,
        streetAddress,
        city,
        state,
        zip,
        company
    ) {
        super(
            id,
            firstName,
            middleName,
            lastName,
            dob,
            phone,
            email,
            streetAddress,
            city,
            state,
            zip,
            company
        )
    }
}

// 5 - put the objects in arrays
let persons = []
let vendors = []
let customers = []
let contractors = []
let employees = []
let managers = []
let executives = []

// 2 - use faker.js to create fake data
// 3 - call the constructors with faker data
for (let i = 0; i < 5; i++) {
    persons.push(
        new Person(
            faker.random.number(),
            faker.name.firstName(),
            faker.name.firstName(),
            faker.name.lastName(),
            faker.date.past(),
            faker.phone.phoneNumber(),
            faker.internet.email(),
            faker.address.streetAddress(),
            faker.address.city(),
            faker.address.state(),
            faker.address.zipCode(),
        )
    )
    vendors.push(
        new Vendor(
            faker.random.number(),
            faker.name.firstName(),
            faker.name.firstName(),
            faker.name.lastName(),
            faker.date.past(),
            faker.phone.phoneNumber(),
            faker.internet.email(),
            faker.address.streetAddress(),
            faker.address.city(),
            faker.address.state(),
            faker.address.zipCode(),
            faker.company.companyName()
        )
    )
    customers.push(
        new Customer(
            faker.random.number(),
            faker.name.firstName(),
            faker.name.firstName(),
            faker.name.lastName(),
            faker.date.past(),
            faker.phone.phoneNumber(),
            faker.internet.email(),
            faker.address.streetAddress(),
            faker.address.city(),
            faker.address.state(),
            faker.address.zipCode(),
            faker.company.companyName()
        )
    )
    contractors.push(
        new Contractor(
            faker.random.number(),
            faker.name.firstName(),
            faker.name.firstName(),
            faker.name.lastName(),
            faker.date.past(),
            faker.phone.phoneNumber(),
            faker.internet.email(),
            faker.address.streetAddress(),
            faker.address.city(),
            faker.address.state(),
            faker.address.zipCode(),
            faker.company.companyName()
        )
    )
    managers.push(
        new Manager(
            faker.random.number(),
            faker.random.number(),
            faker.name.firstName(),
            faker.name.firstName(),
            faker.name.lastName(),
            faker.date.past(),
            faker.phone.phoneNumber(),
            faker.internet.email(),
            faker.address.streetAddress(),
            faker.address.city(),
            faker.address.state(),
            faker.address.zipCode(),
            faker.random.number(),
            faker.commerce.department(),
            faker.name.jobTitle(),
            faker.finance.amount(),
            faker.random.number(),
            faker.random.number()
        )
    )
    if (i < 3) {
        executives.push(
            new Executive(
                faker.random.number(),
                faker.name.firstName(),
                faker.name.firstName(),
                faker.name.lastName(),
                faker.date.past(),
                faker.phone.phoneNumber(),
                faker.internet.email(),
                faker.address.streetAddress(),
                faker.address.city(),
                faker.address.state(),
                faker.address.zipCode(),
                faker.random.number(),
                faker.commerce.department(),
                faker.name.jobTitle(),
                faker.finance.amount(),
                faker.random.number(),
                faker.finance.amount(),
                faker.random.number()
            )
        )
    }
}
for (let i = 0; i < 20; i++) {
    employees.push(
        new Employee(
            faker.random.number(),
            faker.random.number(),
            faker.name.firstName(),
            faker.name.firstName(),
            faker.name.lastName(),
            faker.date.past(),
            faker.phone.phoneNumber(),
            faker.internet.email(),
            faker.address.streetAddress(),
            faker.address.city(),
            faker.address.state(),
            faker.address.zipCode(),
            faker.random.number(),
            faker.commerce.department(),
            faker.name.jobTitle(),
            faker.finance.amount(),
            faker.random.number()
        )
    )
}

// 4 - modify the objects
for (employee of employees) {
    employee.managerId =
        managers[Math.floor(Math.random() * managers.length)].id
}
managers[0].managerId = executives[0].id
managers[1].managerId = executives[0].id

managers[2].managerId = executives[1].id
managers[3].managerId = executives[1].id
managers[4].managerId = executives[1].id

executives[0].managerId = executives[2].id
executives[1].managerId = executives[2].id

executives[2].managerId = executives[2].id

// console.log(vendors)
// console.log(customers)
// console.log(contractors)
// console.log(managers)
// console.log(executives)
// console.log(employees)

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let db = new sqlite.Database("sqlite.db", (err) => {
//     if (err) {
//         console.error(err.message)
//     }
//     console.log("\nconnected to db")
// })


// customers, employees, vendors, managers, contractors, executives
// postgresRun(customers, employees, vendors, managers, contractors, executives);
// return;

// ================== DAOs ===================================================
// ===========================================================================

// ============ TESTING  SQLite========================

// ORM 1 Employee testing - - - - - - - -
// employee1DAO.create(employees[0], db)
// employee1DAO.read(employees[0].id, db)
// employees[0].department = 'Connor'
// console.log(employees[0])
// employee1DAO.update(employees[0], db)
// employee1DAO.remove(3763, db)
// employee1DAO.list(db)
// for (employee of employees) {
//     employee1DAO.create(employee, db)
// }

// ORM 1 Manager testing - - - - - - - -
// manager1DAO.create(managers[0], db)
// manager1DAO.read(managers[0].id, db)
// console.log(managers[0].employeeId)
// managers[0].employeeId = 9
// console.log(managers[0])
// manager1DAO.update(managers[0], db)
// manager1DAO.remove(3763, db)
// manager1DAO.list(db)
// for (manager of managers) {
//     manager1DAO.create(managers, db)
// }

// ORM 1 Executive testing - - - - - - - -
// executive1DAO.create(executives[0], db)
// executive1DAO.read(executives[0].id, db)
// executives[0].bonus = '400.69'
// executive1DAO.update(executives[0], db)
// executive1DAO.remove(23536, db)
// executive1DAO.list(db)
// for (executive of executives) {
//     executive1DAO.create(managers, db)
// }

// ORM 1 vendor testing - - - - - - - -
//customer1DAO.create(customers[0], db)
// vendor1DAO.read(vendors[0].id, db)
// vendors[0].department = 'Connor'
// console.log(vendors[0])
// employee1DAO.update(vendors[0], db)
// customer1DAO.remove(3763, db)
// employee1DAO.list(db)
// for (vendor of vendors) {
//     employee1DAO.create(employee, db)
// }

// ORM 2 Employee testing - - - - - - - -
// employee2DAO.create(employees[0], db)
// employee2DAO.read(employees[0].id, db)
// employees[0].firstName = 'Connor'
// employee2DAO.update(employees[0], db)
//employee2DAO.remove(73627, db)
// employee2DAO.remove(73627, db)
// employee2DAO.list(db)
// for (employee of employees) {
//     employee2DAO.create(employee, db)
// }

// ORM 2 customer testing - - - - - - - -
// customers.forEach((customer) => {
//     customer2DAO.create(customer, db);
//     customer3DAO.create(customer, db);
//     customer4DAO.create(customer, db);
// });
// customer2DAO.create(customers[0], db);
// customer2DAO.read(customers[0].id, db);
// customers[0].firstName = "Connor";
// customer2DAO.update(employees[0]);
// customer2DAO.remove(45, db);
// customer2DAO.list();

// ORM 2 manager testing - - - - - - - -
// manager2DAO.create(managers[0], db);
// manager2DAO.read(managers[0].id, db);
// managers[0].employeeId = "100000001";
// manager2DAO.update(managers[0], db);
// manager2DAO.remove(73627, db);
// manager2DAO.list(db);

// ORM 2 contractor testing - - - - - - - -
// contractor2DAO.create(managers[0], db);
// contractor2DAO.read(managers[0].id, db);
// contractors[0].firstName = "Breck";
// contractor2DAO.update(managers[0], db);
// contractor2DAO.remove(73627, db);
// contractor2DAO.list(db);

// ORM 2 Vendor testing - - - - - - - -
// vendor2DAO.create(vendors[0], db)
// console.log('create')
//  vendor2DAO.read(vendors[0].id, db)
//  console.log('read')
// vendors[0].firstName = 'Gracias'
// console.log('update name')
// vendor2DAO.update(vendors[0], db)
// console.log('update')
// vendor2DAO.remove(73627, db)
// console.log('remove')
// vendor2DAO.list(db)
// for (vendor of vendors) {
//     //SQLITE_CONSTRAINT: UNIQUE constraint failed
//     vendor2DAO.create(vendor, db)
// }

// ORM 4 Vendor testing - - - - - - - -
// vendor4DAO.create(vendors[0], db)
// console.log('create')
//  vendor4DAO.read(vendors[0].id, db)
//  console.log('read')
// vendors[0].firstName = 'Gracias'
// console.log('update name')
// vendor4DAO.update(vendors[0], db)
// console.log('update')
// vendor4DAO.remove(96025, db)
// console.log('remove')
// vendor4DAO.list(db)
// for (vendor of vendors) {
//     //SQLITE_CONSTRAINT: UNIQUE constraint failed
//     vendor4DAO.create(vendor, db)
// }

// ORM 2 Executive testing - - - - - - - -
// executiveDAO4.create(executives[0], db)
// executive2DAO.create(executives[0], db)
// console.log('create')
// executive2DAO.read(executives[0].id, db)
//  console.log('read')
// executives[0].firstName = 'Gracias'
// console.log('update name')
// executive2DAO.update(executives[0], db)
// console.log('update')
// executive2DAO.remove(73627, db)
// console.log('remove')
// executive2DAO.list(db)
// for (executive of executives) {
//     //SQLITE_CONSTRAINT: UNIQUE constraint failed
//     executive2DAO.create(executive, db)
// }

// ORM 3 Employee testing - - - - - - - -
// employee3DAO.create(employees[0])
// employee3DAO.read(employees[0].id)
// employees[0].firstName = 'Connor'
// employee3DAO.update(employees[0])
// employee3DAO.remove(73627)
// employee3DAO.list()
// for (employee of employees) {
//     employee3DAO.create(employee)
// }

// ORM 3 manager testing - - - - - - - -
// manager3DAO.create(managers[0], db);
// manager3DAO.read(managers[0].id, db);
// managers[0].employeeId = "100000001";
// manager3DAO.update(managers[0], db);
// manager3DAO.remove(73627, db);
// manager3DAO.list(db);

// ORM 3 vendor testing - - - - - - - -
// vendors3DAO.create(vendors[0], db);
// vendors3DAO.read(vendors[0].id, db);
// vendors[0].employeeId = "100000001";
// vendors3DAO.update(vendors[0], db);
// vendors3DAO.remove(73627, db);
// vendors3DAO.list(db);

// ORM 3 executive testing - - - - - - - -
// executive3DAO.create(executives[0], db);
// executive3DAO.read(executives[0].id, db);
// executives[0].employeeId = "100000001";
// executive3DAO.update(executives[0], db);
// executive3DAO.remove(73627, db);
// executive3DAO.list(db);

// ORM 3 contractor testing - - - - - - - -
// contractor3DAO.create(managers[0], db);
// contractor3DAO.read(managers[0].id, db);
// managers[0].employeeId = "100000001";
// contractor3DAO.update(managers[0], db);
// contractor3DAO.remove(73627, db);
// contractor3DAO.list(db);

// ORM 4 Employee testing - - - - - - - -
// employee4DAO.create(employees[0])
// employee4DAO.read(employees[0].id)
// employees[0].firstName = 'Connor'
// employee4DAO.update(employees[0])
// employee4DAO.remove(73627)
// employee4DAO.list()
// for (employee of employees) {
//     employee4DAO.create(employee)
// }

// ORM 4 contractor testing - - - - - - - -
// contractor4DAO.create(managers[0], db);
// contractor4DAO.read(managers[0].id, db);
// contractors[0].firstName = "Breck";
// contractor4DAO.update(managers[0], db);
// contractor4DAO.remove(73627, db);
// contractor4DAO.list(db);

// Postgres ORM 2 Executive testing - - - - - - - -
// executive1DAO.create(executives[0], db)
// executive1DAO.read(executives[0].id, db)
// executives[0].bonus = '400.69'
// executive1DAO.update(executives[0], db)
// executive1DAO.remove(23536, db)
// executive1DAO.list(db)
// for (executive of executives) {
//     executive1DAO.create(managers, db)
// }

// db.close((err) => {
//     if (err) {
//         console.error(err.message)
//     }
//     console.log("closing sqlite database\n")
// })

// client.end();

// async function postgresRun(customers, employees, vendors, managers, contractors, executives) {
    // Postgres testing - - - - - - - -

//     // await vendor4DAOPostgres.create(vendors[0])

//     //await contractor4DAOPostgres.create(contractors[0])

//     // await customer4DAOPostgres.create(customers[0])

//     // await employee4DAOPostgres.create(employees[0])

//     // await employee3DAOPostgres.create(employees[0])
//     // await employee3DAOPostgres.read(employees[0].id)

//     // await manager3DAOPostgres.create(managers[0])

//     // await executive3DAOPostgres.create(executives[0])

//     // await vendor3DAOPostgres.create(vendors[0])
//     // vendors[0].lastName = 'Paulson'
//     // await vendor3DAOPostgres.update(vendors[0])
//     // await vendor3DAOPostgres.read(vendors[0].id)
//     // await vendor3DAOPostgres.list()

//     // await customer3DAOPostgres.create(customers[0])
//     // customers[0].lastName = 'Paulson'
//     // await customer3DAOPostgres.update(customers[0])
//     // await customer3DAOPostgres.read(customers[0].id)
//     // await customer3DAOPostgres.list()

//     //await customer1DAOPostgres.create(customers[0])

//     // await executive1DAOPostgres.create(executives[0])
//     // await executive1DAOPostgres.read(executives[0].id)
//     // executives[0].bonus = "4"
//     // console.log(executives[0])
//     // await executive1DAOPostgres.update(executives[0])
//     // await executive1DAOPostgres.remove(62455)
//     // await executive1DAOPostgres.list()

//     // await manager1DAOPostgres.create(managers[0])
//     // await manager1DAOPostgres.read(managers[0].id)
//     // managers[0].employeeId = 4
//     // await manager1DAOPostgres.update(managers[0])
//     // await manager1DAOPostgres.remove(62455)
//     // await manager1DAOPostgres.list()


//     // await employee1DAOPostgres.create(employees[0])
//     // employees[0].department = 'ConnorP'
//     // console.log(employees[0])
//     // await employee1DAOPostgres.update(employees[0])
//     // await employee1DAOPostgres.list()
//     // await employee1DAOPostgres.read(employees[0].id)

//     //await executive2DAOpostgres.create(executives[0])
//     //await manager2DAOpostgres.create(managers[0])
//     // managers[0].employeeId = '3456'
//     // await manager2DAOpostgres.update()
//     // await manager2DAOpostgres.read(managers[0].id)


//     // await executive2DAOpostgres.create(executives[0])
//     // await executive2DAOpostgres.read(executives[0].id)
//     // await executive2DAOpostgres.update()


//     // await contractor2DAOpostgres.create(contractors[0])
//     // contractors[0].firstName = 'Conman'
//     // await contractor2DAOpostgres.update(contractors[0])
//     // await contractor2DAOpostgres.read(contractors[0].id)


//     // await employee2DAOpostgres.create(employees[0])
//     // employees[0].firstName = 'Conman'
//     // await employee2DAOpostgres.update(employees[0])
//     // await employee2DAOpostgres.read(employees[0].id)
//     // // console.log(employees[0])


//     // for (customer of customers) {
//         // await customer2DAOpostgres.create(customer)
//         // await customer2DAOpostgres.read(customer.id)
//     }
    // for (employee of employees) {
    //     await employee3DAOpostgres.create(employee)
    // }
    //etc.....


    // ============ SQLite Knex Testing ===================
    // ====================================================

    // employee1DAOsqlite_knex.create(employees[0])
    // employees[0].department = "Connor"
    // employee1DAOsqlite_knex.update(employees[0])
    // employee1DAOsqlite_knex.remove(3711)
    // employee1DAOsqlite_knex.read(employees[0].id)
    // employee1DAOsqlite_knex.list()

    // manager1DAOsqlite_knex.create(managers[0])
    // manager1DAOsqlite_knex.read(managers[0].id)
    // managers[0].employeeId = 464
    // manager1DAOsqlite_knex.update(managers[0])
    // manager1DAOsqlite_knex.remove(24739)
    // manager1DAOsqlite_knex.list()

    // executive1DAOsqlite_knex.create(executives[0])
    // executive1DAOsqlite_knex.read(executives[0].id)
    // executives[0].bonus = 6969
    // executive1DAOsqlite_knex.update(executives[0])
    // executive1DAOsqlite_knex.remove(82214)
    // executive1DAOsqlite_knex.list()

    //contractor1DAOsqlite_knex.create(vendors[0])
    // customers[0].company = 6969
    // customer1DAOsqlite_knex.update(customers[0])
    // customer1DAOsqlite_knex.read(customers[0].id)
    // executive1DAOsqlite_knex.remove(82214)
    // executive1DAOsqlite_knex.list()

    // employee2DAOsqlite_knex.create(employees[0])
    // vendor2DAOsqlite_knex.create(vendors[0])
    // customer2DAOsqlite_knex.create(customers[0])
    // manager2DAOsqlite_knex.create(managers[0])
    // executive2DAOsqlite_knex.create(executives[0])

    // employee3DAOsqlite_knex.create(employees[0])
    // manager3DAOsqlite_knex.create(managers[0])
    // executive3DAOsqlite_knex.create(executives[0])
    // contractor3DAOsqlite_knex.create(contractors[0])
    // vendor3DAOsqlite_knex.create(vendors[0])

    // employee4DAOsqlite_knex.create(employees[0])


    // ========== Postgres Knex DAOs ====================
    // ==================================================

    // employee1DAOpostgres_knex.create(employees[0])
    // employee1DAOpostgres_knex.remove(57245)
    // employees[0].title = 'Conman'
    // employee1DAOpostgres_knex.update(employees[0])

    // manager1DAOpostgres_knex.create(managers[0])
    // manager1DAOpostgres_knex.read(83676)

    // executive1DAOpostgres_knex.create(executives[0])
    // customer1DAOpostgres_knex.create(customers[0])
    // contractor1DAOpostgres_knex.create(contractors[0])
    // vendor1DAOpostgres_knex.create(vendors[0])

    // contractor2DAOpostgres_knex.create(contractors[0])
    // customer2DAOpostgres_knex.create(customers[0])
    // employee2DAOpostgres_knex.create(employees[0])
    // executive2DAOpostgres_knex.create(executives[0])
    // manager2DAOpostgres_knex.create(managers[0])
    // vendor2DAOpostgres_knex.create(vendors[0])

    // contractor3DAOpostgres_knex.create(contractors[0])
    // customer3DAOpostgres_knex.create(customers[0])
    // employee3DAOpostgres_knex.create(employees[0])
    // executive3DAOpostgres_knex.create(executives[0])
    // manager3DAOpostgres_knex.create(managers[0])
    // vendor3DAOpostgres_knex.create(vendors[0])

    // contractor4DAOpostgres_knex.create(contractors[0])
    // customer4DAOpostgres_knex.create(customers[0])
    // employee4DAOpostgres_knex.create(employees[0])
    // vendor4DAOpostgres_knex.create(vendors[0])


    
    // const MongoClient = require('mongodb').MongoClient;
    // const uri = "mongodb+srv://admin:ZQpYhv2b5d9Q5Q3@sql-modeling-project.kufz1.mongodb.net/<dbname>?retryWrites=true&w=majority";
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // async function run() {
    //     try {
    //         await client.connect();
        
    //         const collection = client.db("4660-Boiz").collection("orm1_employee");
    //         collection.insertOne({"yoma": "sup"});
    //         console.log(await collection.findOne({"yoma": "sup"}))
        
    //         // const query = { "personId": 81167 }
    //         // const result = await collection.findOne(query);
    //         // console.log(result);
    //     } finally {
    //       // Ensures that the client will close when you finish/error
    //          await client.close();
    //     }
    // }
    // run().catch(console.dir);

    runMongoose()
    async function runMongoose(customers, employees, vendors, managers, contractors, executives) {
        mongooseCompany.create(employees, managers, executives);
        mongooseContractor.create(contractors);
        mongooseCustomer.create(customers);
        mongooseVendor.create(vendors);
    }
    
    // manager1DAOsqlite_knex.list()


// mongoRun(customers, employees, vendors, managers, contractors, executives);

// async function mongoRun(customers, employees, vendors, managers, contractors, executives) {
//     companiesMongo.create(employees, managers, executives)
//     contractorsMongo.create(contractors)
//     customersMongo.create(customers)
//     vendorsMongo.create(vendors)
// }



    // ===================== SQLITE Sequilize ======================== //
// executiveDAOsqlite_sequelize();

module.exports = {
    persons
}
