const faker = require("faker");
employee2DAO = require("../sql-modeling-project/sqliteDAO/ORM2/employeeDAO2Sqlite");
customer2DAO = require("../sql-modeling-project/sqliteDAO/ORM2/customerDAO2Sqlite");
const sqlite = require("sqlite3").verbose();

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

// ORM 2 Employee testing - - - - - - - -
employee2DAO.create(employees[0], db)
employee2DAO.read(employees[0].id, db)
employees[0].firstName = 'Connor'
employee2DAO.update(employees[0], db)
// employee2DAO.remove(73627, db)
employee2DAO.list(db)
// for (employee of employees) {
//     employee2DAO.create(employee)
// }

// ORM 2 customer testing - - - - - - - -
// customer2DAO.create(customers[0], db);
// customer2DAO.read(customers[0].id, db);
// customers[0].firstName = "Connor";
// customer2DAO.update(employees[0]);
// customer2DAO.remove(73627);
// customer2DAO.list();

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("closing sqlite database\n");
});
