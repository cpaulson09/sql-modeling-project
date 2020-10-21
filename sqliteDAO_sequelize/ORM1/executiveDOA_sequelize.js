const { Sequelize, DataTypes } = require("sequelize");
const { resolve } = require("path")


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: resolve(__dirname, '../../test.db')
});


const Executive = sequelize.define('orm1_executive', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  managerId: {
    type: DataTypes.INTEGER
  },
  bonus: {
    type: DataTypes.TEXT
  }

},{
  freezeTableName: true,
  timestamps: false
})

//test function to authenticate and create the function
async function authenticate() {
  try {
    await sequelize.authenticate();
    await Executive.sync({ force: true })
    console.log('Connection has been established successfully.');
    create();
  
 
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

authenticate();

const create = async (executive = null) => {

  const executive1 = await Executive.create({
    firstName: 'Gracias Claude',
    managerId: 2
  });
  // let's assume the default of isAdmin is false

};

const read = async (id) => {};

const update = async (executive) => {};

const remove = async (id) => {};

const list = async () => {}

module.exports = { create, read, update, remove, list };
