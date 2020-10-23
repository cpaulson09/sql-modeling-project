const { Sequelize, DataTypes } = require("sequelize");
const { resolve } = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: resolve(__dirname, "../../test.db"),
});


const Person = sequelize.define('orm3_person', {
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
  type: {
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
  company: {
    type: DataTypes.STRING,
  },
  totalVendorMoney: {
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
  const contractor = await Person.create({
    firstName: 'Joseph',
    lastName: 'Smith',
    dob: new Date('July 30, 1998 03:24:00'),
    phone: '123-123-2134',
    email: 'jsW@gamil.com',
    streetAddress: '2 stuff ave',
    city: 'Palmyra',
    state: 'NY',
    zip: '11923',
    company: 'God',
    department: null,
    title: null,
    companyId: null,
    mangerId: null ,
    bonus: null,
    salary: null,
    type: 'contractor',
    totalVendorMoney: '60,000'

  });
};

const read = async (id) => {
  const contractor = await Person.findAll({
    where: {
      firstName: 'Joseph'
    }
  })
};

const update = async (executive) => {
  const contractor = await Person.update({ company: 'and Jesus x2' }, {
    where: {
      firstName:'Joseph' 
    }
  });
};

const remove = async (id) => {
  const contractor = await Person.destroy({
    where: {
      lastName: 'Smith'
    }
  });
};

const list = async () => {
  const contractor= Person.findAll()
  console.log(await contractor);
};

module.exports = { create, read, update, remove, list };
