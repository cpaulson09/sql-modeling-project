const faker = require("faker");
const sqlite = require("sqlite3").verbose();
employee1DAO = require("../sql-modeling-project/sqliteDAO/ORM1/employeeDAO1Sqlite");
manager1DAO = require("../sql-modeling-project/sqliteDAO/ORM1/managerDAO1Sqlite");
executive1DAO = require("../sql-modeling-project/sqliteDAO/ORM1/executiveDAO1Sqlite");
employee2DAO = require("../sql-modeling-project/sqliteDAO/ORM2/employeeDAO2Sqlite");
customer2DAO = require("../sql-modeling-project/sqliteDAO/ORM2/customerDAO2Sqlite");
manager2DAO = require("../sql-modeling-project/sqliteDAO/ORM2/managerDAO2Sqlite");
contractor2DAO = require("../sql-modeling-project/sqliteDAO/ORM2/contractorDAO2Sqlite");
vendor2DAO = require("./sqliteDAO/ORM2/vendorDAO2Sqlite");
executive2DAO = require("./sqliteDAO/ORM2/executiveDAO2Sqlite");
manager3DAO = require("../sql-modeling-project/sqliteDAO/ORM3/managerDAO3Sqlite");
customer3DAO = require("../sql-modeling-project/sqliteDAO/ORM3/customerDAO3Sqlite");
customer4DAO = require("../sql-modeling-project/sqliteDAO/ORM4/customerDAO4Sqlite");
manager2DAO = require("../sql-modeling-project/sqliteDAO/ORM2/managerDAO2Sqlite");
contractor2DAO = require("../sql-modeling-project/sqliteDAO/ORM2/contractorDAO2Sqlite");
vendor2DAO = require("../sql-modeling-project/sqliteDAO/ORM2/vendorDAO2Sqlite");
executive2DAO = require("../sql-modeling-project/sqliteDAO/ORM2/executiveDAO2Sqlite");

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
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.dob = dob;
        this.phone = phone;
        this.email = email;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zip = zip;
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
        );
        this.personId = personId;
        this.companyId = companyId;
        this.department = department;
        this.title = title;
        this.salary = salary;
        this.managerId = managerId;
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
        );
        this.employeeId = employeeId;
        this.directReports = directReports;
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
        );
        this.bonus = bonus;
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
        );
        this.company = company;
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
        );
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
        );
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
        );
    }
}

// 5 - put the objects in arrays
let vendors = [];
let customers = [];
let contractors = [];
let employees = [];
let managers = [];
let executives = [];

// 2 - use faker.js to create fake data
// 3 - call the constructors with faker data
for (let i = 0; i < 5; i++) {
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
    );
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
    );
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
    );
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
    );
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
        );
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
    );
}

// 4 - modify the objects
for (employee of employees) {
    employee.managerId =
        managers[Math.floor(Math.random() * managers.length)].id;
}
managers[0].managerId = executives[0].id;
managers[1].managerId = executives[0].id;

managers[2].managerId = executives[1].id;
managers[3].managerId = executives[1].id;
managers[4].managerId = executives[1].id;

executives[0].managerId = executives[2].id;
executives[1].managerId = executives[2].id;

executives[2].managerId = executives[2].id;

let db = new sqlite.Database("sqlite.db", (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("\nconnected to db");
});

// console.log(vendors)
// console.log(customers)
// console.log(contractors)
// console.log(managers)
// console.log(executives)
// console.log(employees)

// ============ TESTING ========================

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
customers.forEach((customer) => {
    customer2DAO.create(customer, db);
    customer3DAO.create(customer, db);
    customer4DAO.create(customer, db);
});
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

// ORM 3 manager testing - - - - - - - -
// manager3DAO.create(managers[0], db);
// manager3DAO.read(managers[0].id, db);
// managers[0].employeeId = "100000001";
// manager3DAO.update(managers[0], db);
// manager3DAO.remove(73627, db);
// manager3DAO.list(db);

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

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("closing sqlite database\n");
});
