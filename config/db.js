const mysql = require("mysql2");
const connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password: "",
database: "chat_app"
});
connection.connect((err) => {
if (err) {
console.log("Connection Error:", err);
} else {
console.log("MySQL Connected");
}
});
module.exports = connection;