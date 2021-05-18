const express = require("express");
const app = express();
require("./db/conn");
const hbs = require("hbs");
const port = process.env.PORT || 3000;
const path = require("path");
const Register = require("../src/models/useregister");
// const router = express.Router();

const static_path = path.join(__dirname, "../public");
// const templete_pata = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

//Post data from register to server by App.post
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//end post method

app.use(express.static(static_path));
app.set("views engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index.hbs");
});
app.get("/register", (req, res) => {
  res.render("register.hbs");
});
app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;
    if (password === cpassword) {
      const datastore = new Register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        gender: req.body.gender,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
      });
      const datasave = await datastore.save();
      res.status(201).send(datasave);
    } else {
      res.send("something is wrong");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
app.listen(port, () => {
  console.log(`server start at ${port}`);
});
