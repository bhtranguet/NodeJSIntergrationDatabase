var mysql = require('mysql');
var config = require('./config')
var connection = mysql.createConnection(config)

connection.connect()

connection.query('SELECT * FROM actor', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows)
})

connection.end()