import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const cards = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
app.get("/accessories", (req, res) => {
  res.render("accessories.ejs");
});
app.get("/hats", (req, res) => {
  res.render("hats.ejs");
});
app.get("/coats", (req, res) => {
  res.render("coats.ejs");
});
app.get("/form", (req, res) => {
  res.render("form.ejs");
});

app.post("/submit", (req, res) => {
  const title = req.body["title"];
  cards.push({title}); 
  console.log(cards);
  res.render("index.ejs", {cards});
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
