const {registerValidation} = require("./validation")
const mysql = require("mysql");
const db = require("../config")


//addToCart
const addToCart = async (req, res) => {
   const { error } = registerValidation(req.body);

    const {name, size, color, quantity, price} = req.body

    const data = { name, size, color, quantity, price };
    
    let sql = "INSERT INTO customer SET ?"
    
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            db.query(sql, data, (err, results) => {
                if (err) throw err;
                res.redirect("/")
            })
        } catch (err) {
            return res.status(400).json({"msg" : err})
        }
    }
}




module.exports = {addToCart}