const express = require("express");

const router = express.Router();

const db = require("../config/db");

const authMiddleware = require("../middleware/authMiddleware");


// ================= SEND MESSAGE =================

router.post("/send", authMiddleware, (req, res) => {

    console.log("SEND ROUTE HIT");

    const sender_id = req.user.id;

    const { receiver_id, message } = req.body;

    const sql = `
        INSERT INTO messages
        (sender_id, receiver_id, message)
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [sender_id, receiver_id, message],
        (err, result) => {

            if (err) {

                console.log("MYSQL ERROR:");
                console.log(err);

                return res.status(500).json({
                    message: "Database Error",
                    error: err
                });

            }

            res.status(201).json({
                message: "Message Sent"
            });

        }
    );

});


// ================= GET MESSAGES =================

router.get("/:userId", authMiddleware, (req, res) => {

    const sender_id = req.user.id;

    const receiver_id = req.params.userId;

    const sql = `
        SELECT * FROM messages
        WHERE
        (sender_id = ? AND receiver_id = ?)
        OR
        (sender_id = ? AND receiver_id = ?)
        ORDER BY created_at ASC
    `;

    db.query(
        sql,
        [sender_id, receiver_id, receiver_id, sender_id],
        (err, results) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    message: "Database Error"
                });

            }

            res.status(200).json(results);

        }
    );

});

module.exports = router;