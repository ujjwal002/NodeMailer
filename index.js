const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from ujjwal this side");
});

require("./config/database").connection();

const user = require("./routes/user");

app.use("/api/v1", user);

app.listen(3000, () => {
  console.log("server started at port 3000");
});
