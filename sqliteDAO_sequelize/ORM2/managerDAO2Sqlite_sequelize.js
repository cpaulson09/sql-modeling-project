const { Sequelize, DataTypes } = require("sequelize");
const { resolve } = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: resolve(__dirname, "../../test.db"),
});

const Manager = sequelize.define(
  "orm2_manager",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    employeeId: {
      type: DataTypes.INTEGER,
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
    await Manager.sync({ force: true });
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
  const manager = await Manager.create({
    employeeId: 2,
  });
};

const read = async (id) => {
  const manager = await Manager.findAll({
    where: {
      employeeUd: 2
    }
  })
};

const update = async (executive) => {
  const manager = await Manager.update({ employeeId: 3 }, {
    where: {
      employeeId: 2
    }
  });
};

const remove = async (id) => {
  const manager = await Manager.destroy({
    where: {
      employeeUd: 2
    }
  });
};

const list = async () => {
  const manager= Manager.findAll()
  // console.log(await executive3);
};

// module.exports = { create, read, update, remove, list };
