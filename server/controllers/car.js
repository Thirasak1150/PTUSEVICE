// const { connect} = require("../Routers/rout");
const db = require("../config/connect");

exports.listcar = async (req, res) => {
    try {
        await db.query(
            `SELECT * FROM car`,
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
exports.readcar = async (req, res) => {
    try {
        const id_member = req.params.id;
        await db.query(
            `
        SELECT *
        FROM car
        WHERE customerid = ?`,
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

exports.updatecar = async (req, res) => {
    try {
        const carid = req.params.id;
        const bandcar = req.body.bandcar;
        const details = req.body.details;


        const updateData = `
        UPDATE car 
        SET bandcar = ?, details = ?
        WHERE carid = ?`;
        await db.query(
            updateData,
            [bandcar, details, carid],
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


exports.createcar = (req, res) => {


    const bandcar = req.body.bandcar
    const details = req.body.details
    const customerid = req.body.customerid
    const add_data = `
            INSERT INTO 
            car (bandcar, details, status,customerid)
            VALUES (?, ?, ?,?)`;
    db.query(
        add_data,
        [bandcar, details, 'NOCARSERVICE', customerid],
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

exports.removecar = async (req, res) => {

    const carid = req.params.id;
    await db.query(`
                DELETE 
                FROM car
                WHERE carid = ?`,
                carid,
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