const { Sequelize, DataTypes } = require("sequelize");
const { resolve } = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: resolve(__dirname, "../../test.db"),
});

const NonEmployee = sequelize.define(
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
    await NonEmployee.sync({ force: true });
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
  const nonemployee = await NonEmployee.create({
    personId: 2,
    company: 'USA',
    type: 'Rich Country'
  });
};

const read = async (id) => {
  const nonemployee = await NonEmployee.findAll({
    where: {
      personId: 2
    }
  })
};

const update = async (executive) => {
  const nonemployee = await NonEmployee.update({ company: 'EU' }, {
    where: {
      personId: 2
    }
  });
};

const remove = async (id) => {
  const nonemployee = await NonEmployee.destroy({
    where: {
      personId: 2
    }
  });
};

const list = async () => {
  const nonemployee= NonEmployee.findAll()
  // console.log(await executive3);
};

// module.exports = { create, read, update, remove, list };
