const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

//built in middleware 

// console.log(path.join(__dirname, '../public')); 

//makes you exit the src file and enter into the public folder!
const staticPath = path.join(__dirname, '../public')

//to set the view engine
app.set("view engine", "hbs");

// app.use(express.static(staticPath));
app.get("", (req, res) => {
    res.render("index");
});

// template engine route 


app.get("/", (req, res)=> {
    res.send("hello from express server");
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});