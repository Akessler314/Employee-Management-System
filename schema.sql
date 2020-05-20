DROP DATABASE IF EXISTS employee_management_systemDB;
CREATE database employee_management_systemDB;

USE employee_management_systemDB;

CREATE TABLE department (
  id INT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,4) NOT NULL, 
  department_id INT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE employee (
 id INT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL
role_id INT NOT NULL, 
manager_id INT NULL --can be null, jsut in case the employee has no manager -- 
 PRIMARY KEY (id)
);




SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;