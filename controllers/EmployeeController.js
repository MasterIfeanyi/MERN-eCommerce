const {registerValidation} = require("./validation")
const mysql = require("mysql");


const db = mysql.createConnection({
    host: "mysql-67475-0.cloudclusters.net",
    user: "admin",
    password: "ifeanyichima",
    database: "manager",
    port: "19435"
})

db.connect((err) => {
    if(err) throw err;
    console.log("connected");
})

//show the list of employees
//fetch from database
const getUsers = async (req, res) => {
    try {
        let sql = "SELECT * FROM people";
        db.query(sql, (err, rows) => {
            if (err) throw err;
            res.json({users: rows})
        })
    } catch (err) {
        res.status(400).json({ "msg": err });
    }
}


//save user
const saveUser = async (req, res) => {
    const { error } = registerValidation(req.body);

    const {name, size, color, quantity, price} = req.body

    const data = { name, size, color, quantity, price };
    
    let sql = "INSERT INTO people SET ?"
    
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            db.query(sql, data, (err, results) => {
                if (err) throw err;
                res.redirect("/");
            })
        } catch (err) {
            return res.status(400).json({"msg" : err})
        }
    }
}



//update a user
const updateUser = async (req, res) => {
    const { error } = registerValidation(req.body);

    const {name, size, color, quantity, price} = req.body

    const userId = req.body.id;

    let sql = `UPDATE people SET name= '${name}', size= '${size}', color= '${color}', quantity= '${quantity}', price= '${price}' WHERE id="${userId}"`

    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            db.query(sql, (err, results) => {
                if (err) throw err;
                res.redirect("/");
            })
        } catch (err) {
            res.status(400).json({ "msg": err });
        }
    }
}


//delete a user
const deleteUser = async (req, res) => {
    const userId = req.params.userId
    let sql = `DELETE FROM people WHERE id="${userId}"`;
    try {
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.redirect("/");
        });
    } catch (err) {
        res.status(400).json({ "msg": err });
    }
}

module.exports = {getUsers, saveUser, updateUser, deleteUser}