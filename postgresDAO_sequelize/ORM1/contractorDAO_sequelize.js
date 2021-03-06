const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize('chdnzkgx', 'chdnzkgx', '4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt', {
  host: 'lallah.db.elephantsql.com',
  dialect:  'postgres'
});

const Customer = sequelize.define(
  "orm1_nonemployee",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    personid: {
      type: DataTypes.INTEGER,
    },
    company: {
      type: DataTypes.TEXT,
    },
    type: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
const Person = sequelize.define('orm1_person', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  firstname: {
    type: DataTypes.STRING,
  },
  middlename: {
    type: DataTypes.STRING,
},
  lastname: {
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
  streetaddress: {
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
}, {
  // Other model options go here
  freezeTableName: true,
  timestamps: false
});




//test function to authenticate and create the function
async function authenticate() {
  try {
    await sequelize.authenticate();
    // await Customer.sync({ force: false });
    // await Person.sync({ force: false });
    console.log("Connection has been established successfully.");
    // create();
    // read();
    // update();
    remove();
    // list();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

authenticate();

const create = async (executive = null) => {
  try {
  const customer = await Customer.create({
    id:13,
    personid: 10,
    company: 'LMS',
    type: 'Marketing Contractor'
  });

  const person = await Person.create({
    id: 8,
    firstname: 'John',
    lastname: 'Doe',
    dob: new Date('October 6, 1995 03:24:00'),
    phone: '123-123-2134',
    email: 'LMPW@gamil.com',
    streetaddress: '2 Roger ave',
    city: 'tocoma',
    state: 'LA',
    zip: '99199'
  });
} catch(err) {
  console.log('Cannot add contractor', err)
}
};

const read = async (id) => {
  const customer = await Customer.findAll({
    where: {
      personid: 10
    }
  })
};

const update = async (executive) => {
  const customer = await Customer.update({ company: 'LSP' }, {
    where: {
      personid: 10
    }
  });
};

const remove = async (id) => {
  const customer = await Customer.destroy({
    where: {
      personid: 13
    }
  });
};

const list = async () => {
  const nonemployee= Customer.findAll()
  const person = Person.findAll()
  // console.log(await nonemployee);
  // console.log(await person);
};

module.exports = { create, read, update, remove, list };
