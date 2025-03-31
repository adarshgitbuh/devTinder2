const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

//handle middlewares
app.use("/admin", adminAuth, (req, res, next) => {
  res.send("Hello admin");
});

app.get("/user", userAuth, (req, res) => {
  res.send("Hello user");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent...");
});

app.get("/admin/DeleteData", (req, res) => {
  res.send("Data deleted...");
});
// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("REquest handler");
//     next();
//     //res.send("req handler");
//     //console.log("Req not handle");
//   });
//   //route handlers
//  app.get("/user2", (req, res) => {
//   console.log("You can use");
//   next();
//  })

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
