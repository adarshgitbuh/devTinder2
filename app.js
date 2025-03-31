const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  try {
    throw new Error("reeor");
    res.send("User data sent");
  } catch (error) {
    res.status(500).send("something went wrong.....");
  }
});

app.listen(4000, () => {
  console.log("serever is running sucessfully");
});
