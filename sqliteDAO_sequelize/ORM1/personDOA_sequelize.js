const { timeStamp } = require("console");
const { Sequelize, DataTypes } = require("sequelize");
const { persons } = require("../../modeling.js")
const { resolve } = require("path")

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: resolve(__dirname, '../../test.db')
});

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
    await Person.sync({ force: true });
    console.log("Connection has been established successfully.");
    create();
    read();
    update();
    remove();
    list();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

authenticate();

const create = async (executive = null) => {
  const person = await Person.create({
    firstName: 'Edmond',
    lastName: 'Weiss',
    dob: new Date('September 6, 1995 03:24:00'),
    phone: '123-123-2134',
    email: 'eW@gamil.com',
    streetAddress: '2 stuff ave',
    city: 'tocoma',
    state: 'WA',
    zip: '11923'
  });
};

const read = async (id) => {
  const person = await Person.findAll({
    where: {
      firstName: 'Edmond'
    }
  })
};

const update = async (executive) => {
  const person = await Person.update({ middleName : "YOYOYO" }, {
    where: {
      firstName: 'Edmond'
    }
  });
};

const remove = async (id) => {
  const person = await Person.destroy({
    where: {
      firstName: 'Edmond'
    }
  });
};

const list = async () => {
  const person= Person.findAll()
  console.log(await person);

};

// module.exports = { create, read, update, remove, list };

// module.exports = { create, read, update, remove, list, Person };
