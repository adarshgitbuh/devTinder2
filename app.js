const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("REquest handler");
    next();
    res.send("req handler");
    //console.log("Req not handle");
  },
  //route handlers
  (req, res) => {
    console.log("Req not handler 2");
    res.send("req not handle 2");
  }
);

// app.get("/user/:userId/:pass", (req, res) => {
//   console.log(req.params);
//   res.send({ firstName: "adarsh", lastName: "adhuu" });
// });

// app.post("/tester", (req, res) => {
//   console.log("The data saved sucessfuly");
//   res.send("hello world");
// });

// app.delete("/user", (res, req) => {
//   res.send("Delete the api call");
// });

app.listen(4000, () => {
  console.log("serever is running sucessfully");
});
