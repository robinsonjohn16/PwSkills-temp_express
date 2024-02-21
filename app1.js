// *Question 2

import express from "express";
const app = express();
let counter = 0;
app.get("/", (req, res) => {
   res.send(JSON.stringify({ counter: counter }));
});
app.get("/increment", (req, res) => {
   counter++;
   res.send(JSON.stringify({ counter: counter }));
});
app.get("/decrement", (req, res) => {
   counter--;
   res.send(JSON.stringify({ counter: counter }));
});

app.listen(5000, () => {
   console.log("Srver is Running on Port", 5000);
});
