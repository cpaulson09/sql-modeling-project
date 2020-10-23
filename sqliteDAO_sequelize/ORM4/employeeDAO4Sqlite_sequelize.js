const { Sequelize, DataTypes } = require("sequelize");
const { resolve } = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: resolve(__dirname, "../../test.db"),
});


const Employee = sequelize.define('orm4_employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
  },
  middleName: {
    type: DataTypes.STRING,
},
  lastName: {
    type: DataTypes.STRING,
  },
  dob: {
    type: DataTypes.DATE,
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  streetAddress: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  zip: {
    type: DataTypes.STRING,
  },
  companyId: {
    type: DataTypes.INTEGER,
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
  managerId: {
    type: DataTypes.INTEGER,
  },
  bonus: {
    type: DataTypes.STRING,
  },
  isManager: {
    type: DataTypes.STRING,
  },
}, {
  // Other model options go here
  freezeTableName: true,
  timestamps: false
});




//test function to authenticate and create the function
async function authenticate() {
  try {
    await sequelize.authenticate();
    await Employee.sync({ force: true })
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
    firstName: 'Lob',
    lastName: 'Smith',
    dob: new Date('August 30, 1998 03:24:00'),
    phone: '123-123-2134',
    email: 'jsW@gamil.com',
    streetAddress: '2 stuff ave',
    city: 'Palmyra',
    state: 'NY',
    zip: '11923',
    companyId: 2,
    department: 'Engineer',
    title: 'SWE',
    companyId: 2,
    mangerId: 6 ,
    bonus: null,
    salary: '100,000',
    isManager: 'true'

  });
};

const read = async (id) => {
  const employee = await Employee.findAll({
    where: {
      firstName: 'James'
    }
  })
};

const update = async (executive) => {
  const employee = await Employee.update({ company: 'and Jesus x2' }, {
    where: {
      firstName:'James' 
    }
  });
};

const remove = async (id) => {
  const employee = await Employee.destroy({
    where: {
      lastName: 'Smith'
    }
  });
};

const list = async () => {
  const employee= Employee.findAll()
  console.log(await employee);
};

// module.exports = { create, read, update, remove, list };
