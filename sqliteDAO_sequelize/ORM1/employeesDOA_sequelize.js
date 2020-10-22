const { Sequelize } = require("sequelize");


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../../../sqlite.db'
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()

sequelize.define('Employee', {
  // Model attributes are defined here
  id: {
    type: DataTypes.Integer,
    allowNull: false
  },
  personId: {
    type: DataTypes.Integer,
    // allowNull defaults to true 
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salary: {
    type: DataTypes.STRING,
    allowNull: false
  },
  managerId: {
    type: DataTypes.Integer,
    allowNull: false
  },
}, {
  // Other model options go here
});

const create = async (executive) => {};

const read = async (id) => {};

const update = async (executive) => {};

const remove = async (id) => {};

const list = async () => {}

module.exports = { create, read, update, remove, list };
