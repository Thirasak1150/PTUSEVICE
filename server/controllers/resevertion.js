// const { connect} = require("../Routers/rout");
const db = require("../config/connect");

exports.listreservetion = async (req, res) => {
    try {
        await db.query(
            `SELECT * FROM reservetion`,
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
exports.readreservetion = async (req, res) => {
    try {
        const customerid = req.params.id
        await db.query(
            `
        SELECT *
        FROM reservetion
        WHERE customerid = ?`,
        customerid,
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

exports.updatereservetion = async (req, res) => {
    try {
        const reservertionid = req.body.reservetionid
        const name = req.body.name;
        const date = req.body.date;
        const time = req.body.time;
        const customerid = req.body.customerid


        const updateData = `
        UPDATE reservetion
        SET name = ?, date = ?,time = ?
        WHERE reservetionid = ? AND customerid = ?`;
        await db.query(
            updateData,
            [name, date, time,reservertionid,customerid],
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


exports.createreservetion = (req, res) => {


    const name = req.body.name
    const date = req.body.date
    const time = req.body.time
    const customerid = req.body.customerid
    const detail = req.body.detail
    const carid = req.body.carid
    const add_data = `
            INSERT INTO 
            reservetion (name, date, time,customerid,detail,carid)
            VALUES (?, ?, ?,?,?,?)`;
    db.query(
        add_data,
        [name, date, time, customerid,detail,carid],
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

exports.removereservetion = async (req, res) => {

    const reservetionid = req.params.id;
    await db.query(`
                DELETE 
                FROM reservetion
                WHERE reservetionid = ?`,
                reservetionid,
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