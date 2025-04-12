// server running on port 3000
import express from "express";
const app = express();
const port = 3000;
//layout and partials.
app.use(express.static("public"));
app.get("/", (_req, _res) => {
  _res.render("index.ejs");
});
app.get("/about", (_req, _res) => {
  _res.render("about.ejs");
});
app.get("/contact", (_req, _res) => {
  _res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port  ${port}`);
});
