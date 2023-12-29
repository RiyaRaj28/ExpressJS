// www.thapa.com - Welcome to my home page 
// /about - welcome to my about page 
// /contact - welcome to my contact page 
// /temp - welcome to temp page 


const express = require("express");

const app = express(); 
const port = 3000;

app.get('/', (req,res) => {
    res.send("<h1>Welcome to my home page</h1>");
});
app.get('/about', (req,res) => {
    res.send("Welcome to my about page");
});
app.get('/contact', (req,res) => {
    res.send("Welcome to my contact page");
});
app.get('/temp', (req,res) => {
    res.send([

    {
    id: 1,
    name: 'vinod', 
    },
        
   {
    id: 1,
    name: 'vinod', 
   },
        
   {
    id: 1,
    name: 'vinod', 
   },
   
]); 
});


app.get('/temp', (req,res) => {
    res.json([

    {
    id: 1,
    name: 'vinod', 
    },
        
   {
    id: 1,
    name: 'vinod', 
   },
        
   {
    id: 1,
    name: 'vinod', 
   },
   
]); 
});

//both methods are identical when an object or array is passed,
//but res.json() will also convert non-objects,
//such as null and undefined, which are not valid JSON

app.listen(port, () => {
    console.log(`Listening to port at ${port}`)
}); 




















