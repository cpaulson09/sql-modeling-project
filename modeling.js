const faker = require("faker")
const sqlite = require("sqlite3").verbose()
employee1DAO = require("../sql-modeling-project/sqliteDAO/ORM1/employeeDAO1Sqlite")
manager1DAO = require("../sql-modeling-project/sqliteDAO/ORM1/managerDAO1Sqlite")
executive1DAO = require("../sql-modeling-project/sqliteDAO/ORM1/executiveDAO1Sqlite")
mployee2DAO = require("../sql-modeling-project/sqliteDAO/ORM2/employeeDAO2Sqlite")
customer2DAO = require("../sql-modeling-project/sqliteDAO/ORM2/customerDAO2Sqlite")

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
// employee2DAO.list(db)
// for (employee of employees) {
//     employee2DAO.create(employee, db)
// }

// ORM 2 customer testing - - - - - - - -
// customer2DAO.create(customers[0], db);
// customer2DAO.read(customers[0].id, db);
// customers[0].firstName = "Connor";
// customer2DAO.update(employees[0]);
// customer2DAO.remove(45, db);
// customer2DAO.list();

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("closing sqlite database\n");
});
