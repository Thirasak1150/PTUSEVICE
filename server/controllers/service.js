// const { connect} = require("../Routers/rout");
const db = require("../config/connect");

exports.listservice = async (req, res) => {
    try {
        await db.query(
            `SELECT * FROM sevice`,
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

exports.readidservice = async (req, res) => {
    try {
        const usernamecustomer = req.params.id
        const statusservice = 'กำลังดำเนินการ'
        await db.query(
            `
        SELECT  * 
        FROM sevice
        WHERE usernamecustomer = ? AND statusservice = ?
        `,
        [usernamecustomer,statusservice],
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
exports.readusernameservice = async (req, res) => {
    try {
        const usernamecustomer = req.params.id
       
        await db.query(
            `
        SELECT  * 
        FROM sevice
        WHERE usernamecustomer = ? 
        ORDER BY serviceid DESC
        `,
        usernamecustomer,
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

exports.readservice = async (req, res) => {
    try {
        const serviceid = req.params.id
        await db.query(
            `
        SELECT *
        FROM sevice
        WHERE serviceid = ?`,
            serviceid,
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

exports.updatesevice = async (req, res) => {
    try {
        const serviceid = req.body.serviceid
        const usernamecustomer = req.body.usernamecustomer
        const employeeid = req.body.employeeid
        const date = req.body.date
        const servicename = req.body.servicename
        const carpartid = req.body.carpartid
        const detail = req.body.detail
        const distance = req.body.distance
        const time = req.body.time
        const carid = req.body.carid
        const quantity = req.body.quantity;
        const updateData = `
        UPDATE sevice
        SET usernamecustomer = ?,employeeid = ?,date = ?
        ,servicename = ?,carpartid = ?,quantity = ?
        ,detail = ?,distance = ?,time = ?,carid = ?
        WHERE serviceid = ? `;
        await db.query(
            updateData,
            [usernamecustomer, employeeid, date, servicename, carpartid, quantity, detail, distance, time, carid, serviceid],
            function (err, result) {
                if (err) {
                    res.json({
                        status: 'error',
                        message: err
                    })
                }
                res.json({
                    status: 'update okk'
                })

            }
        );
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error <update>");
    }
};

exports.updatestatusservice = async (req, res) => {
    try {
        const serviceid = req.body.serviceid
        const statusservice = req.body.status
        const updateData = `
        UPDATE sevice
        SET statusservice = ?
        WHERE serviceid = ? `;
        await db.query(
            updateData,
            [statusservice,serviceid],
            function (err, result) {
                if (err) {
                    res.json({
                        status: 'error',
                        message: err
                    })
                }
                res.json({
                    status: 'update okk'
                })

            }
        );
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error <update>");
    }
};


exports.createservice = (req, res) => {
    const usernamecustomer = req.body.usernamecustomer
    const employeeid = req.body.employeeid
    const date = req.body.date
    const servicename = req.body.servicename
    const carpartid = req.body.carpartid
    const detail = req.body.detail
    const distance = req.body.distance
    const time = req.body.time
    const carid = req.body.carid
    const quantity = req.body.quantity;
    const statusservice = 'กำลังดำเนินการ'
    const add_data = `
            INSERT INTO 
            sevice (usernamecustomer,employeeid,date,servicename,carpartid,quantity
                ,detail,distance,time,carid,statusservice)
            VALUES (?, ?,?,?,?,?,?,?,?,?,?)`;
    db.query(
        add_data,
        [usernamecustomer, employeeid, date, servicename, carpartid, quantity, detail, distance, time, carid,statusservice],
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

exports.removeservice = async (req, res) => {

    const seviceid = req.params.id;
    await db.query(`
                DELETE 
                FROM sevice
                WHERE serviceid = ?`,
        seviceid,
        function (err, result, field) {
            if (err) {
                res.json({
                    status: 'error',
                    message: err
                })
            }
            res.json({
                status: 'remove ok'

            })

        }
    );

};