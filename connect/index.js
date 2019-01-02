const mysql = require('mysql');

const pool = new mysql.createPool({
    host: '192.168.74.129',
    user: 'root',
    password: 'fuyafeng',
    database: 'books',
    port: 8071
})

const connectMysql = function (sql, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, function (error, results, fields) {
            connection.release();
            callback(error, results, fields)
        })
    })
}

module.exports = connectMysql
