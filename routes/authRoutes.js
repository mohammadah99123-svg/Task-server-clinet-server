const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../config/db");
// ================= REGISTER =================
router.post("/register", async (req, res) => {
const { username, email, password } = req.body;
try {
const hashedPassword = await bcrypt.hash(password, 10);
const sql = `
INSERT INTO users (username, email, password)
VALUES (?, ?, ?)
`;
db.query(
sql,
[username, email, hashedPassword],
(err, result) => {
if (err) {
console.log(err);
return res.status(500).json({
message: "Database Error"
});
}
res.status(201).json({
message: "User Registered Successfully"
});
}
);
} catch (error) {
res.status(500).json({
message: "Server Error"
});

}
});
// ================= LOGIN =================
router.post("/login", (req, res) => {
const { email, password } = req.body;
const sql = `
SELECT * FROM users
WHERE email = ?
`;
db.query(sql, [email], async (err, results) => {
if (err) {
return res.status(500).json({
message: "Database Error"
});
}
if (results.length === 0) {
return res.status(401).json({
message: "Invalid Email"
});
}
const user = results[0];
const isMatch = await bcrypt.compare(
password,
user.password
);
if (!isMatch) {
return res.status(401).json({
message: "Invalid Password"
});
}

const token = jwt.sign(
{
id: user.id,
email: user.email
},
"secretkey",
{
expiresIn: "1h"
}
);
res.status(200).json({
message: "Login Successful",
token
});
});
});
module.exports = router;