const express = require("express");

const app = express();

app.get("/user/:userId/:pass", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "adarsh", lastName: "adhuu" });
});

app.post("/tester", (req, res) => {
  console.log("The data saved sucessfuly");
  res.send("hello world");
});

app.delete("/user", (res, req) => {
  res.send("Delete the api call");
});

app.listen(4000, () => {
  console.log("serever is running sucessfully");
});
