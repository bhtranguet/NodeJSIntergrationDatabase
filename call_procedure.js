var mysql = require('mysql');
var config = require('./config')
var connection = mysql.createConnection(config)

connection.connect()

connection.query(`call film_in_stock(?, ?, @output);`, [1, 1], function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows)
})

connection.end()