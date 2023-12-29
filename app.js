//to crate an express application, we first need to require it.

const express = require("express");

//on requiring express, we got an express function and we can use it to create
//an express application now 

//now the app variable has many methods and properties which we can use
// API 
// get - read
// post - create  
// put - update 
// delete - delete 

const app = express(); 

// app.get(route, callback)

//in callback we pass request and response 
//The request object represents the HTTP request
//It has properties for the request query string, parameters, body, HTTP headers, etc.

//Similarly, the response object represents the HTTP response
//that the Express app sends when it receives an HTTP request.


//in node, we first had to require http modules, then create server


// app.get("/", (req, res) => {

//     https://www.youtube.com/watch?v=CgoD3HX1lWY&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=26

//     //here after question mark there is a variable v. watch keyword shows that the channel is being watched. &list further specifies
//     //here the forward slash represents the home path location(route domain)

// })

app.get("/", (req, res)=> {
    res.send("Hello from the express");
});

app.get("/about", (req, res) => {
    res.send("Hello from the About Page");

})
app.listen(8000, () => {
    console.log("Listening to the port at 8000");
}); 




