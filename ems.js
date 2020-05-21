//DEPENDENCIES 
const inquirer = require('inquirer');
const mysql = require("mysql");
const consoleTable = require('console.table');

//DATABASE CONNECTION INFORMATION 
const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",
  database: "employee_management_systemDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  //call first function here -- remeber on the last function called to have "connection.end();"
});





//----------------------------------------------------------------------------
// Functions 

// function to add a department 
function newDepartment(){
inquirer.prompt(
//inquired prompt to get the name of the department being added 
{
type: 'input',
name: 'newDepartment',
message: 'Enter the name of the new department'
}
)
.then((response) => {
connection.query(
  'INSERT INTO department SET ?', 
  {name : response.newDepartment}, 
  function(err){
    if (err) throw err
      console.log('New department added to table');
      //go back to init function to promt user what they would liek to do next 
      //DNE yet 
  });
});
};