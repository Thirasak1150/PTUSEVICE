// const { connect} = require("../Routers/rout");
const db = require("../config/connect");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var secret = 'Ptulogin'

exports.login = async (req, res, next) => {

    db.query(
        `SELECT * FROM members WHERE username = ? AND  password = ? `,
        [req.body.username, req.body.password],
        function (err, username, field) {
            if (err) {
                res.json({
                    status: 'error',
                    message: err
                });
                return
            }
            if (username.length == 0) {
                res.json({
                    status: 'error',
                    message: 'no user found'
                });
                return
            }   
            var token = jwt.sign({
                username: username[0].username
            }, secret, {
                expiresIn: '1h'
            });
            const posision = username[0].assess_right
            const id = username[0].id_member
            res.json({
                status: 'ok',
                token,
                posision,
                id
            })

        }
    );

};
exports.authen = async (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, secret)
        res.json({
            status: 'ok',
            decoded
        })

    } catch (err) {
        res.json({
            status: 'error',
            message: err.message
        })
    }


};

exports.read = async (req, res) => {
    try {
        const id_member = req.params.id;
        await db.query(
            `
        SELECT *
        FROM members
        WHERE id_member = ?`,
            id_member,
            (err, result) => {
                try {
                    res.send(result);
                } catch (err) {
                    console.log(err);
                }
            }
        );
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error <read>");
    }
};

exports.list = async (req, res) => {
    try {
        await db.query(
            `SELECT * FROM members`,
            function (err, result) {
                if (err) {
                    res.json({
                        status: 'error',
                        message: err
                    })
                }
                res.send(result)


            }
        );
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error <list>");
    }
};

exports.create = (req, res) => {



    const fname = req.body.fname;
    const surname = req.body.surname;
    const username = req.body.username;
    const password = req.body.password;
    const tel_member = req.body.tel_member;
    const assess_right = 'customer';




    db.query(
        `SELECT * FROM members WHERE username = ? `,
        [username],
        function (err, re, field) {
            if (err) {
                res.json({
                    status: 'error',
                    message: err
                });
                return
            }
            if (re.length > 0) {
                res.json({
                    status: 'error',
                    message: 'me user'
                });
                return
            }

            const add_data = `
            INSERT INTO 
            members (fname, surname, username,password,tel_member,assess_right)
            VALUES (?, ?, ?,?,?,?)`;
            db.query(
                add_data,
                [fname, surname, username, password, tel_member, assess_right],
                function (err, result) {
                    if (err) {
                        res.json({
                            status: 'error',
                            message: err
                        })
                    }
                    res.json({
                        status: 'ok',
                        message: 'ok'
                    })
                }
            );

        }
    );




};

exports.update = async (req, res) => {
    try {
        const id_member = req.params.id;
        const fname = req.body.fname;
        const surname = req.body.surname;
        const username = req.body.username;
        const password = req.body.password;
        const tel_member = req.body.tel_member;

        const updateData = `
        UPDATE car 
        SET fname = ?, surname = ?, username = ?, password = ?,tel_member = ?
        WHERE id_member = ?`;
        await db.query(
            updateData,
            [fname, surname, username, password, tel_member, id_member],
            function (err, result) {
                if (err) {
                    res.json({
                        status: 'error',
                        message: err
                    })
                }
                res.json({
                    status: 'update ok'
                })

            }
        );
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error <update>");
    }
};

exports.remove = async (req, res) => {

    const id_member = req.params.id;
    await db.query(`
        DELETE 
        FROM members
        WHERE id_member = ?`,
        id_member,
        function (err, result, field) {
            if (err) {
                res.json({
                    status: 'error',
                    message: err
                })
            }
            res.json({
                sttus: 'update ok'
            })

        }
    );

};