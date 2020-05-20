//DEPENDENCIES 
const inquirer = require('inquirer');
const mysql = require("mysql");
const cTable = require('console.table');

//DATABASE CONNECTION INFORMATION 
const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employee_management_systemDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  //call first function here -- remeber on the last function called to have "connection.end();"
});
