const { Sequelize, DataTypes } = require("sequelize");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('chdnzkgx', 'chdnzkgx', '4-LsufrBMT9pT2FDm7xWJLHy1roMGrGt', {
  host: 'lallah.db.elephantsql.com',
  dialect:  'postgres'
});


const Person = sequelize.define('orm3_person', {
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
  companyid: {
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
  managerid: {
    type: DataTypes.INTEGER,
  },
  bonus: {
    type: DataTypes.STRING,
  },
  company: {
    type: DataTypes.STRING,
  },
  totalvendormoney: {
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
  const executivedb = await Person.create({
    firstname: 'Ian',
    lastname: 'Smith',
    dob: new Date('August 30, 1998 03:24:00'),
    phone: '123-123-2134',
    email: 'jsW@gamil.com',
    streetaddress: '2 stuff ave',
    city: 'Palmyra',
    state: 'NY',
    zip: '11923',
    company: null,
    department: 'Engineer',
    title: 'SWE',
    companyid: 2,
    mangerId: 6 ,
    bonus: null,
    salary: '100,000',
    type: 'executive',
    totalvendormoney: '60,000'

  });
};

const read = async (id) => {
  const executive = await Person.findAll({
    where: {
      firstname: 'Ian'
    }
  })
};

const update = async (executive) => {
  const executivedb = await Person.update({ company: 'and Jesus x2' }, {
    where: {
      firstname:'Ian' 
    }
  });
};

const remove = async (id) => {
  const executive = await Person.destroy({
    where: {
      lastname: 'Smith'
    }
  });
};

const list = async () => {
  const executive= Person.findAll()
  // console.log(await executive);
};

module.exports = { create, read, update, remove, list };
