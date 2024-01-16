const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 8000;
const requests = require("requests")

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

// app.get("/about", (req,res) => {
//     // console.log(req.query)
//     res.render("about", {
//         name : req.query.name
//     });
// });

app.get("/about", (req,res) => {
    requests(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=647db17c0535eefdadd25a8659b40531`
      )      //whateveer that we will write in the url as the name will be replaced here and we will get the data of the city from the api!
        //that data is then accessed and given out in chunks
        //the "data event" of the event emitter is used here (from node streams)
        .on("data", (chunk) => {
          //convert json data to object data
          const objdata = JSON.parse(chunk); 
  
          //pass object data to array data
          //data received will be an array of an object
          const arrData = [objdata];
          console.log(`City name is ${arrData[0].name} and the temperature is ${arrData[0].main.temp}`);
          // we place this in place of html placeholder using map method
  
          //this prints the temperatore which was present within main. Now we need
          //to put this in place of temperature by using a placeholder
          //we do this by the map method
  
        //   const realTimeData = arrData
        //     .map((val) => replaceVal(homeFile, val))
        //     .join(""); //join to convert array data to string
          //to view the website now, we pass the real time data to it in the form of string
          res.write(arrData[0].name);
        //   console.log(realTimeData);
        })
  
        .on("end", (err) => {
          if (err) return console.log("connection closed due to errors", err);
          //when there is no more data to be read, we give response end method
          res.end();
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
    res.send("hello  from express server");
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});