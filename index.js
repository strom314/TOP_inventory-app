require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  }
  console.log("server started listening on port " + PORT);
});
