import express from "express";

const app = express();
const port = 3000;

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



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
