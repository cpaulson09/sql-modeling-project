create table orm1_person(
	id integer PRIMARY KEY,
	firstname VARCHAR(32),
	middlename VARCHAR(32),
	lastname VARCHAR(32),
	dob VARCHAR(32),
	phone VARCHAR(15),
	email VARCHAR(32),
	streetaddress VARCHAR(40),
	city VARCHAR(32),
	state VARCHAR(32),
	zip VARCHAR(10)
);

create table orm1_employee (
	id integer PRIMARY KEY,
	personid integer,
	companyid integer,
	department VARCHAR(32),
	title VARCHAR(32),
	salary VARCHAR(32),
	managerid integer,
	FOREIGN KEY (personid) REFERENCES orm1_person (id)
);

create table orm1_manager (
	id integer PRIMARY KEY,
	employeeid integer,
	FOREIGN KEY (employeeid) REFERENCES orm1_employee (id)
);

create table orm1_executive (
	id integer PRIMARY KEY,
	managerid integer,
	bonus VARCHAR(20),
	FOREIGN KEY (managerid) REFERENCES orm1_manager (id)
);

create table orm1_nonemployee (
	id integer PRIMARY KEY,
	personid integer,
	company VARCHAR(20),
	type VARCHAR(20),
	FOREIGN KEY (personid) REFERENCES orm1_person (id)
);

create table orm2_employee (
	id integer PRIMARY KEY,
	firstname VARCHAR(32),
	middlename VARCHAR(32),
	lastname VARCHAR(32),
	dob VARCHAR(32),
	phone VARCHAR(15),
	email VARCHAR(32),
	streetaddress VARCHAR(40),
	city VARCHAR(32),
	state VARCHAR(32),
	zip VARCHAR(10),
	companyid integer,
	department VARCHAR(32),
	title VARCHAR(32),
	salary VARCHAR(32),
	managerid integer
);

create table orm2_manager (
	id integer PRIMARY KEY,
	employeeid integer,
	FOREIGN KEY (employeeid) REFERENCES orm2_employee (id)
);

create table orm2_executive (
	id integer PRIMARY KEY,
	managerid integer,
	bonus VARCHAR(20),
	FOREIGN KEY (managerid) REFERENCES orm2_manager (id)
);

create table orm2_vendor (
	id integer PRIMARY KEY,
	firstname VARCHAR(32),
	middlename VARCHAR(32),
	lastname VARCHAR(32),
	dob VARCHAR(32),
	phone VARCHAR(15),
	email VARCHAR(32),
	streetaddress VARCHAR(40),
	city VARCHAR(32),
	state VARCHAR(32),
	zip VARCHAR(10),
	company VARCHAR(32)
);

create table orm2_customer (
	id integer PRIMARY KEY,
	firstname VARCHAR(32),
	middlename VARCHAR(32),
	lastname VARCHAR(32),
	dob VARCHAR(32),
	phone VARCHAR(15),
	email VARCHAR(32),
	streetaddress VARCHAR(40),
	city VARCHAR(32),
	state VARCHAR(32),
	zip VARCHAR(10),
	company VARCHAR(32)
);

create table orm2_contractor (
	id integer PRIMARY KEY,
	firstname VARCHAR(32),
	middlename VARCHAR(32),
	lastname VARCHAR(32),
	dob VARCHAR(32),
	phone VARCHAR(15),
	email VARCHAR(32),
	streetaddress VARCHAR(40),
	city VARCHAR(32),
	state VARCHAR(32),
	zip VARCHAR(10),
	company VARCHAR(32)
);

create table orm3_person (
	id integer PRIMARY KEY,
	firstname VARCHAR(32),
	middlename VARCHAR(32),
	lastname VARCHAR(32),
	dob VARCHAR(32),
	phone VARCHAR(15),
	email VARCHAR(32),
	streetaddress VARCHAR(40),
	city VARCHAR(32),
	state VARCHAR(32),
	zip VARCHAR(10),
	companyid integer,
	department VARCHAR(32),
	title VARCHAR(32),
	salary VARCHAR(32),
	managerid integer,
	bonus VARCHAR(20),
	company VARCHAR(32)
);

create table orm4_employee (
	id integer PRIMARY KEY,
	firstname VARCHAR(32),
	middlename VARCHAR(32),
	lastname VARCHAR(32),
	dob VARCHAR(32),
	phone VARCHAR(15),
	email VARCHAR(32),
	streetaddress VARCHAR(40),
	city VARCHAR(32),
	state VARCHAR(32),
	zip VARCHAR(10),
	companyid integer,
	department VARCHAR(32),
	title VARCHAR(32),
	salary VARCHAR(32),
	managerid integer,
	ismanager integer,
	bonus VARCHAR(20)
);

create table orm4_vendor (
	id integer PRIMARY KEY,
	firstname VARCHAR(32),
	middlename VARCHAR(32),
	lastname VARCHAR(32),
	dob VARCHAR(32),
	phone VARCHAR(15),
	email VARCHAR(32),
	streetaddress VARCHAR(40),
	city VARCHAR(32),
	state VARCHAR(32),
	zip VARCHAR(10),
	company VARCHAR(32)
);

create table orm4_customer (
	id integer PRIMARY KEY,
	firstname VARCHAR(32),
	middlename VARCHAR(32),
	lastname VARCHAR(32),
	dob VARCHAR(32),
	phone VARCHAR(15),
	email VARCHAR(32),
	streetaddress VARCHAR(40),
	city VARCHAR(32),
	state VARCHAR(32),
	zip VARCHAR(10),
	company VARCHAR(32)
);

create table orm4_contractor (
	id integer PRIMARY KEY,
	firstname VARCHAR(32),
	middlename VARCHAR(32),
	lastname VARCHAR(32),
	dob VARCHAR(32),
	phone VARCHAR(15),
	email VARCHAR(32),
	streetaddress VARCHAR(40),
	city VARCHAR(32),
	state VARCHAR(32),
	zip VARCHAR(10),
	company VARCHAR(32)
);