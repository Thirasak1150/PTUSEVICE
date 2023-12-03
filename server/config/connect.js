const mysql = require("mysql");

const config = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "plankton273855",
    database: "member_ptu",
});


module.exports = config ;