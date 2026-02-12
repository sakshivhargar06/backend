/*const express = require("express");
const data = require("./data");
const {filterData, nameCombiner} = require("./utils")


const app = express();
console.log(app)
app.get("/", (req, res) => {
  return res.send({ message: "Home route working! ........" });
});



let filteredData = filterData(data);
console.log(filteredData);

let final = nameCombiner(filteredData);
console.log(final);

app.get("/users", (req, res) => {
  return res.send({ data: final, filteredData });
});

//create two more get apis that send following data.
// 1. sum of two numbers
// 2. [20,-10, 60, 100, -100, 80, 60, 40] . 
// send sum of all numbers,
//  send only positive numbres, 
//  send only negative numbres, 

app.listen(3000, () => console.log("server is running on port 3000"));*/

const express = require("express");
const data = require("./data");   // import data.js

const app = express();

// GET API to calculate sum
app.get("/sum", (req, res) => {

    const a = data.a;
    const b = data.b;

    const sum = a + b;

    res.json({
        a,
        b,
        sum
    });
});

// start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
