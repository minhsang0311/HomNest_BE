
const mysql = require('mysql');
const util = require('util');
require("dotenv").config();
const db = mysql.createConnection({
    host: process.env.HOST_SQL,
    user: process.env.USER_SQL,
    password: process.env.PASWORD_SQL,
    port: 3306,
    database: process.env.DATABASE_SQL

});
db.connect(err => {
    if (err) throw err;
    console.log('Đã kết nối database');
});
db.query = util.promisify(db.query);
module.exports = db;
