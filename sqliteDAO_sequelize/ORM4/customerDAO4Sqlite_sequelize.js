const { Sequelize, DataTypes } = require("sequelize");
const { resolve } = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: resolve(__dirname, "../../test.db"),
});

const Customer = sequelize.define(
  "orm4_customer",
  {
    // Model attributes are defined here
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
    company: {
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
    await Customer.sync({ force: false });
    console.log("Connection has been established successfully.");
    create();
    read();
    update();
    // remove();
    list();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

authenticate();

const create = async (executive = null) => {

  try {
  const customer = await Customer.create({
    firstName: 'Joseph',
    lastName: 'Smith',
    dob: new Date('July 30, 1998 03:24:00'),
    phone: '123-123-2134',
    email: 'jsW@gamil.com',
    streetAddress: '2 stuff ave',
    city: 'Palmyra',
    state: 'NY',
    zip: '11923',
    company: 'God'
  });
} catch(err) {
  console.log('Unable to create contract', err.message)
}
};

const read = async (id) => {
  const customer = await Customer.findAll({
    where: {
      firstName: 'Joseph'
    }
  })
};

const update = async (executive) => {
  const customer = await Customer.update({ company: "and Jesus..." }, {
    where: {
      firstName: 'Joseph'
    }
  });
};

const remove = async (id) => {
  const customer = await Customer.destroy({
    where: {
      lastName: 'Smith'
    }
  });
};

const list = async () => {
  const customer= Customer.findAll()
  console.log(await customer);
};

module.exports = { create, read, update, remove, list };
