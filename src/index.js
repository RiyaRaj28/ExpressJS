const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 8000;

//built in middleware 

// console.log(path.join(__dirname, '../public')); 

//makes you exit the src file and enter into the public folder!
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//to set the view engine
app.set("view engine", "hbs");
app.set("views", templatePath); 
hbs.registerPartials(partialsPath)           //in the template engine hbs, we use the method require partials and add the absolute path of partial file

app.use(express.static(staticPath));


// template engine route - hbs
app.get("/", (req, res) => {
    res.render("index.hbs", {
        name : "Riya", 
    });
});

app.get("/about", (req,res) => {
    // console.log(req.query)
    res.render("about", {
        name : req.query.name
    });
});

app.get ("/about/*", (req,res) => {
    res.render("404", {
        errorcomment : "Oops this about us page could not be found!"
    });
})
app.get("*", (req,res) => {
    res.render("404", {
        errorcomment : "Oops page could not be found!"
    });
})

app.get("/", (req, res)=> {
    res.send("hello from express server");
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});