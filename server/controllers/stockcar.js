// const { connect} = require("../Routers/rout");
const db = require("../config/connect");

exports.liststockcar = async (req, res) => {
    try {
        await db.query(
            `SELECT * FROM stok_carparts`,
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
exports.readstockcar = async (req, res) => {
    try {
        const carpartid = req.params.id
        await db.query(
            `
        SELECT *
        FROM stok_carparts
        WHERE carpartid = ?`,
        carpartid,
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

exports.DeleteStock = async (req, res) => {
    try {
        const deletequantity = req.body.deletequantity
        const Carpartid = req.body.carpartid


        const updateData = `
        UPDATE stok_carparts
        SET quantity = quantity - ?
        WHERE carpartid = ? `;
        await db.query(
            updateData,
            [deletequantity, Carpartid],
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

exports.updatstockcar= async (req, res) => {
    try {
        const namecarpart = req.body.namecarpart
        const quantity = req.body.quantity;
        const Carpartid = req.body.carpartid


        const updateData = `
        UPDATE stok_carparts
        SET namecarpart = ?, quantity = ?
        WHERE carpartid = ? `;
        await db.query(
            updateData,
            [namecarpart, quantity, Carpartid],
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


exports.createstockcarpart = (req, res) => {


    const namecarpart = req.body.namecarpart
    const quantity = req.body.quantity;
    const add_data = `
            INSERT INTO 
            stok_carparts (namecarpart,quantity)
            VALUES (?, ?)`;
    db.query(
        add_data,
        [namecarpart,quantity],
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

exports.removestockcarpart = async (req, res) => {

    const carpartid = req.params.id;
    await db.query(`
                DELETE 
                FROM stok_carparts
                WHERE carpartid = ?`,
                carpartid,
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