const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12340130',
  password: 'nUdayvTikA',
  database: 'sql12340130',
  
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
