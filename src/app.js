const express = require("express");
const app = express();
require("./db/conn");
const hbs = require("hbs");
const port = process.env.PORT || 3000;
const path = require("path");
// const router = express.Router();

const static_path = path.join(__dirname, "../public");
// const templete_pata = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("views engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index.hbs");
});
app.listen(port, () => {
  console.log(`server start at ${port}`);
});
