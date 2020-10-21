// const { timeStamp } = require("console");
// const { Sequelize, DataTypes } = require("sequelize");
// const { persons } = require("../../modeling.js")
// const { resolve } = require("path")

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: resolve(__dirname, '../../test.db')
// });

// const Person = sequelize.define('Person', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//     allowNull: false
//   },
//   firstName: {
//     type: DataTypes.STRING,
//   },
//   middleName: {
//     type: DataTypes.STRING,
//   },
//   lastName: {
//     type: DataTypes.STRING,
//   },
//   dob: {
//     type: DataTypes.DATE,
//   },
//   phone: {
//     type: DataTypes.STRING,
//   },
//   email: {
//     type: DataTypes.STRING,
//   },
//   streetAddress: {
//     type: DataTypes.STRING,
//   },
//   city: {
//     type: DataTypes.STRING,
//   },
//   state: {
//     type: DataTypes.STRING,
//   },
//   zip: {
//     type: DataTypes.STRING,
//   },
// }, {
//   // Other model options go here
// });

// async function test() {

//   try {
//     await sequelize.authenticate();
//     await Person.sync({ force: true })
//     const person = await Person.create(persons)
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// test();

 



// const create = async (executive) => {

// };

// const read = async (id) => {};

// const update = async (executive) => {};

// const remove = async (id) => {};

// const list = async () => {}

// module.exports = { create, read, update, remove, list, Person };
