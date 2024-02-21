// *Question 3

import express from "express";
const app = express();
app.get("/", (req, res) => {
   res.send(JSON.stringify({ msg: `I am homepage` }));
});
app.get("/about", (req, res) => {
   res.send(JSON.stringify({ msg: `I am about page` }));
});
app.get("/contact", (req, res) => {
   res.send(JSON.stringify({ email: `support@pwskills.com` }));
});

app.listen(5000, () => {
   console.log("Srver is Running on Port", 5000);
});
