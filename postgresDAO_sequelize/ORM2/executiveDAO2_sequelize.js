const { Sequelize, DataTypes } = require("sequelize");
const { resolve } = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: resolve(__dirname, "../../test.db"),
});

const Executive = sequelize.define(
  "orm2_executive",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    managerid: {
      type: DataTypes.INTEGER,
    },
    bonus: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

//test function to authenticate and create the function
async function authenticate() {
  try {
    await sequelize.authenticate();
    await Executive.sync({ force: true });
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
  const executive1 = await Executive.create({
    managerid: 2,
    bonus: "2000",
  });
};

const read = async (id) => {
  const executive = await Executive.findAll({
    where: {
      managerid: 2
    }
  })
};

const update = async (executive) => {
  const executive2 = await Executive.update({ bonus: "2000" }, {
    where: {
      managerid: 2
    }
  });
};

const remove = async (id) => {
  const executive2 = await Executive.destroy({
    where: {
      managerid: 2
    }
  });
};

const list = async () => {
  const executive3= Executive.findAll()
  // console.log(await executive3);
};

// module.exports = { create, read, update, remove, list };
