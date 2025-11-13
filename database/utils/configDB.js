/*==================================================
/database/utils/configDB.js

It declares and exports the variables for database name, username, and password.
==================================================*/
// Declare the variables for database name, username, and password.
const dbName = 'starter-server';
const dbUser = 'postgres';
const dbPwd = '24196826';  // This is password for testing locally  for postpresql to work
//const dbPwd = 'postgres';  // This was the orginal
// Export the variables 
module.exports = {
  dbName,
  dbUser,
  dbPwd
};