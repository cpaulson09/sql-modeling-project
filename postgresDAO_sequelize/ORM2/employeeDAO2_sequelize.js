const { Sequelize, DataTypes } = require("sequelize");
const { resolve } = require("path");

const sequelize = new Sequelize('chdnzkgx', 'chdnzkgx', '4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt', {
  host: 'lallah.db.elephantsql.com',
  dialect:  'postgres'
});

const Employee = sequelize.define('orm2_employee', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  personid: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true 
  },
  company: {
    type: DataTypes.STRING,
  },
  department: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  salary: {
    type: DataTypes.STRING,
  },
  managerid: {
    type: DataTypes.INTEGER,
  },
}, {
  // Other model options go here
});

//test function to authenticate and create the function
async function authenticate() {
  try {
    await sequelize.authenticate();
    await Employee.sync({ force: true });
    console.log("Connection has been established successfully.");
    create();
    // read();
    // update();
    // remove();
    list();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

authenticate();

const create = async (executive = null) => {
  const employee = await Employee.create({
    personid: 2,
    company: 'Desani',
    department: 'Salt Water',
    title: 'Take my money',
    salary: '99,000',
    managerid:3
  });
};

const read = async (id) => {
  const employee = await Employee.findAll({
    where: {
      managerid: 3
    }
  })
};

const update = async (executive) => {
  const employee = await Employee.update({ department: "Electrolytes" }, {
    where: {
      managerid: 3
    }
  });
};

const remove = async (id) => {
  const employee = await Employee.destroy({
    where: {
      managerid: 3
    }
  });
};

const list = async () => {
  const employee= Employee.findAll()
  console.log(await employee);
};

module.exports = { create, read, update, remove, list };
