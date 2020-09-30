CREATE TABLE orm1_employee (
  id INteger Primary Key AUTOINCREMENT,
  personId integer,
  company text,
  department text,
  title text,
  salary TEXT,
  managerId integer,
  foreign KEY (personId) REFERENCES id (orm1_person)
);

CREATE TABLE orm1_executive (
  id INteger Primary Key AUTOINCREMENT,
  managerId integer,
  bonus TExt,
  foreign KEY (managerId) REFERENCES id (orm1_manager)
);

CREATE TABLE orm1_manager (
  id INteger Primary Key AUTOINCREMENT,
  employeeId integer,
  foreign KEY (employeeId) REFERENCES id (orm1_employee)
);

CREATE TABLE orm1_nonemployee (
  id INteger Primary Key AUTOINCREMENT,
  personId integer,
  company TExt,
  type integer,
  foreign KEY (personId) REFERENCES id (orm1_person)
);

CREATE TABLE orm1_person (
  id INteger Primary Key AUTOINCREMENT, 
  firstName Text, 
  middleName Text,
  lastName Text,
  dob Date,
  phone Text,
  email Text,
  streetAddress Text,
  city Text,
  state TEXT,
  zip Text
);

CREATE TABLE orm2_contractor (
  id INteger Primary Key AUTOINCREMENT, 
  firstName Text, 
  middleName Text,
  lastName Text,
  dob Date,
  phone Text,
  email Text,
  streetAddress Text,
  city Text,
  state TEXT,
  zip Text,
  company TEXT
);

CREATE TABLE orm2_customer (
  id INteger Primary Key AUTOINCREMENT, 
  firstName Text,
  middleName Text,
  lastName Text,
  dob Date,
  phone Text,
  email Text,
  streetAddress Text,
  city Text,
  state TEXT,
  zip Text,
  company TEXT
);

CREATE TABLE "orm2_employee" (id INteger PRIMARY KEY AUTOINCREMENT, firstName Text, middleName Text, lastName Text, dob Date, phone Text, email Text, streetAddress Text, city Text, state TEXT, zip Text, companyId INTEGER, department TEXT, title TEXT, salary NUMERIC, managerId INTEGER);

CREATE TABLE orm2_executive (
  id INteger Primary Key AUTOINCREMENT, 
  managerId INTEGer,
  bonus TEXT,
  Foreign Key (managerId) REFERENCES id (orm2_manager)
);

CREATE TABLE orm2_manager (
  id INteger Primary Key AUTOINCREMENT, 
  employeeId INTEGer,
  Foreign Key (employeeId) REFERENCES id (orm2_employee)
);

CREATE TABLE orm2_person (
  id INteger Primary Key AUTOINCREMENT, 
  firstName Text, 
  middleName Text,
  lastName Text,
  dob Date,
  phone Text,
  email Text,
  streetAddress Text,
  city Text,
  state TEXT,
  zip Text,
  companyId INTeger,
  department text,
  title text,
  salary TEXT,
  managerId integer
);

CREATE TABLE orm2_vendor (
  id INteger Primary Key AUTOINCREMENT, 
  firstName Text, 
  middleName Text,
  lastName Text,
  dob Date,
  phone Text,
  email Text,
  streetAddress Text,
  city Text,
  state TEXT,
  zip Text,
  company TEXT
);

CREATE TABLE orm3_person (
  id INteger Primary Key AUTOINCREMENT, 
  type INTEGER,
  firstName Text, 
  middleName Text,
  lastName Text,
  dob Date,
  phone Text,
  email Text,
  streetAddress Text,
  city Text,
  state TEXT,
  zip Text,
  companyId INTeger,
  department text,
  title text,
  salary TEXT,
  managerId integer,
  bonus TEXT,
  company TEXT
);

CREATE TABLE orm4_contractor (
  id INteger Primary Key AUTOINCREMENT, 
  firstName Text, 
  middleName Text,
  lastName Text,
  dob Date,
  phone Text,
  email Text,
  streetAddress Text,
  city Text,
  state TEXT,
  zip Text,
  company TEXT
);

CREATE TABLE orm4_customer (
  id INteger Primary Key AUTOINCREMENT, 
  firstName Text, 
  middleName Text,
  lastName Text,
  dob Date,
  phone Text,
  email Text,
  streetAddress Text,
  city Text,
  state TEXT,
  zip Text,
  company TEXT
);

CREATE TABLE orm4_employee (
  id INteger Primary Key AUTOINCREMENT, 
  firstName Text, 
  middleName Text,
  lastName Text,
  dob Date,
  phone Text,
  email Text,
  streetAddress Text,
  city Text,
  state TEXT,
  zip Text,
  companyId INTeger,
  department text,
  title text,
  salary TEXT,
  managerId integer,
  isManager Integer,
  bonus TEXT
);

CREATE TABLE orm4_vendor (
  id INteger Primary Key AUTOINCREMENT, 
  firstName Text, 
  middleName Text,
  lastName Text,
  dob Date,
  phone Text,
  email Text,
  streetAddress Text,
  city Text,
  state TEXT,
  zip Text,
  company TEXT
);

