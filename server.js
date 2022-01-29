const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

// Routes
const userRoutes = require("./routes/api/routes")

const customerRoutes = require("./routes/api/customer")

const port = process.env.PORT || 3000;

// const db = mysql.createConnection({
//     host: "mysql-67475-0.cloudclusters.net",
//     user: "admin",
//     password: "ifeanyichima",
//     database: "manager",
//     port: "19435"
// })

// db.connect((err) => {
//     if(err) throw err;
//     console.log("connected");
// })

//use body-parser
app.use(bodyParser.urlencoded({ extended: false }));


//json bodyParser
app.use(bodyParser.json());


//set static folder
app.use(express.static(path.join(__dirname, "build")))

app.get("/", (req, res) => {
    res.send(path.join(__dirname, "build", "index.html"))
})



// use routes 
app.use("/api/route|/", userRoutes)

// customer controller
app.use("/customer", customerRoutes)


app.listen(port, () => console.log(`server is on ${port}`));
