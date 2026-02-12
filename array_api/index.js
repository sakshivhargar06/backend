const express = require("express");
const app = express();

const numbers = [20, -10, 60, 100, -100, 80, 60, 40];

// Sum 
app.get("/sum", (req, res) => {
    const sum = numbers.reduce((a, b) => a + b, 0);
    res.json({ sum });
});

// Positive numbers
app.get("/positive", (req, res) => {
    const positive = numbers.filter(n => n > 0);
    res.json({ positive });
});

// Negative numbers
app.get("/negative", (req, res) => {
    const negative = numbers.filter(n => n < 0);
    res.json({ negative });
});

app.listen(3001, () => {
    console.log("Array API running on http://localhost:3001");
});
