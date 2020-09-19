const faker = require('faker')

// 1 - create ES6 classes with Contructors for Person, Employee, Manager, Executive, Nonemployee, Contractor, Vendor, Customer
// parent class
class Person {
    constructor(id, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip){
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
    constructor (id, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip, companyId, department, title, salary, managerId) {
        super(id, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip)
        this.companyId = companyId
        this.department = department
        this.title = title
        this.salary = salary
        this.managerId = managerId
    }
}
class Manager extends Employee {
    constructor (id, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip, companyId, department, title, salary, managerId) {
        super(id, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip, companyId, department, title, salary, managerId)
    }
}
class Executive extends Manager {
    constructor (id, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip, companyId, department, title, salary, managerId, bonus) {
        super(id, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip, companyId, department, title, salary, managerId)
        this.bonus = bonus
    }
}


class Nonemployee extends Person {
    constructor(id, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip, company){
        super(id, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip)
        this.company = company
    }
}
class Contractor extends Nonemployee{
    constructor(id, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip, company){
        super(id, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip, company)
    }
}
class Vendor extends Nonemployee{
    constructor(id, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip, company){
        super(id, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip, company)
    }
}
class Customer extends Nonemployee{
    constructor(id, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip, company){
        super(id, firstName, middleName, lastName, dob, phone, email, streetAddress, city, state, zip, company)
    }
}


// 5 - put the objects in arrays
let vendors = []
let customers = []
let contractors = []
let employees = []
let managers = []
let executives = []

// 2 - use faker.js to create fake data
// 3 - call the constructors with faker data
for (let i=0; i<5; i++){
    vendors.push(new Vendor(faker.random.uuid(), faker.name.firstName(), faker.name.firstName(), faker.name.lastName(), faker.date.past(), faker.phone.phoneNumber(), faker.internet.email(), faker.address.streetAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(), faker.company.companyName()))
    customers.push(new Customer(faker.random.uuid(), faker.name.firstName(), faker.name.firstName(), faker.name.lastName(), faker.date.past(), faker.phone.phoneNumber(), faker.internet.email(), faker.address.streetAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(), faker.company.companyName()))
    contractors.push(new Contractor(faker.random.uuid(), faker.name.firstName(), faker.name.firstName(), faker.name.lastName(), faker.date.past(), faker.phone.phoneNumber(), faker.internet.email(), faker.address.streetAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(), faker.company.companyName()))
    managers.push(new Manager(faker.random.uuid(), faker.name.firstName(), faker.name.firstName(), faker.name.lastName(), faker.date.past(), faker.phone.phoneNumber(), faker.internet.email(), faker.address.streetAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(), faker.random.uuid(), faker.commerce.department(), faker.name.jobTitle(), faker.finance.amount(), faker.random.uuid()))
    if (i < 3){
        executives.push(new Executive(faker.random.uuid(), faker.name.firstName(), faker.name.firstName(), faker.name.lastName(), faker.date.past(), faker.phone.phoneNumber(), faker.internet.email(), faker.address.streetAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(), faker.random.uuid(), faker.commerce.department(), faker.name.jobTitle(), faker.finance.amount(), faker.random.uuid(), faker.finance.amount()))
    }
}
for (let i=0; i<20; i++){
    employees.push(new Employee(faker.random.uuid(), faker.name.firstName(), faker.name.firstName(), faker.name.lastName(), faker.date.past(), faker.phone.phoneNumber(), faker.internet.email(), faker.address.streetAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(), faker.random.uuid(), faker.commerce.department(), faker.name.jobTitle(), faker.finance.amount(), faker.random.uuid()))
}


// 4 - modify the objects
for (employee of employees) {
    employee.managerId = managers[Math.floor(Math.random() * managers.length)].id
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