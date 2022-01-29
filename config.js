
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "mysql-67475-0.cloudclusters.net",
    user: "admin",
    password: "ifeanyichima",
    database: "manager",
    port: "19435"
})

db.connect((err) => {
    if(err) throw err;
    console.log("connected");
})


module.exports = db