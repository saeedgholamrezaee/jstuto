const express = require("express");
const app = express();
const greet = express.Router();
const bye = express.Router();
const path = require("path");

app.set("view engine", "ejs");

const data = {
  fname: "saeed",
  age: 48,
  degree: 18.75,
};

greet.get("/", (req, res, next) => {
  res.render("ui/hi");
});

bye.get("/", (req, res, next) => {
  res.render("ui/sy");
});

app.get("/", (req, res) => {
  let numip = req.ip;
  res.send(
    `<h1>node ${__dirname} data is ${data.fname} express js ${numip} this is</h1>`,
  );
});

app.get("/page", (req, res) => {
  res.render("home");
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/greet", greet);
app.use("/bye", bye);

app.listen(6100, function (err) {
  if (err) console.log(err);
});
