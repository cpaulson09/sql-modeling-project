const { Sequelize, DataTypes } = require("sequelize");
const { resolve } = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: resolve(__dirname, "../../test.db"),
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
    personId: {
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
}, {
  // Other model options go here
  freezeTableName: true,
  timestamps: false
});




//test function to authenticate and create the function
async function authenticate() {
  try {
    await sequelize.authenticate();
    await Customer.sync({ force: true });
    await Person.sync({ force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

authenticate();

const create = async (contractor ) => {
  console.log(contractor.id);
  const customer = await Customer.create({
    id:contractor.id,
    personId: contractor.id,
    company: contractor.company,
    type: 'contractor'
  });

  const person = await Person.create({
    id: contractor.id,
    firstName: contractor.firstName,
    lastName: contractor.lastName,
    dob: contractor.dob,
    phone: contractor.phone,
    email: contractor.email,
    streetAddress: contractor.streetAddress,
    city: contractor.city,
    state: contractor.state,
    zip: contractor.zip
  });
};

const read = async (id) => {
  const customer = await Customer.findAll({
    where: {
      personId: id
    }
  })
};

const update = async (contractor) => {
  const customer = await Customer.update({ company: 'LSP' }, {
    where: {
      personId: contractor.id
    }
  });
};

const remove = async (id) => {
  const customer = await Customer.destroy({
    where: {
      personId: id
    }
  });
};

const list = async () => {
  const nonemployee= Customer.findAll()
  const person = Person.findAll()
};

module.exports = { create, read, update, remove, list };
