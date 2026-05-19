const express = require("express");
const cors = require("cors");
require("./config/db");
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");
const authMiddleware = require("./middleware/authMiddleware");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.get("/", (req, res) => {
res.send("Server Running");
});
app.get("/profile", authMiddleware, (req, res) => {
res.json({
message: "Protected Route Accessed",
user: req.user
});
});
app.listen(6033, () => {
console.log("Server Started");
});