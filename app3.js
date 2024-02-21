// *Question 4

import express from "express";

const app = express();

let random = () => {
   return Math.floor(Math.random() * 100);
};

app.get("/random", (req, res) => {
   res.send(JSON.stringify({ random: random() }));
});

app.listen(5000, () => {
   console.log("Server is Running on Port", 5000);
});
