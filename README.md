# Team Profile Generator
This application was developed by: Andrew Kessler (Akessler314)

This application is for a business to keep track of multiple departments, roles in those departments (along with the salary for that role) what employees have are in those roles and what employees manage other employees 

This application is for a school asigment and utilizes: mySQL databases with multile tables interlinked, inquirer to write a Javascript application that is acsessed through a terminal to manipulate the mentioned database's tables, and finally a local host server to acsess that database through the applciation.  

Video of working Aplication: 

## Breakdown of database Schema 

* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
  
  ## Breakdown of funtions this application can perform. 

   * View All Employees, Shows every employee added to the employee table 
   * View All Roles, Shows every role added to the role table 
   * View All Departments, Shows every department added to the department table 
   * Add An Employee, Promts the user to enter information for a new employee 
   * Add A Role, promts the user to enter the information for a new role 
   * Add A Department, promts the user to enter the information for a new department 
   * Update Employee Role, allows the user to change the information for an already entered employee - and assign that employee a manager 

