import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (_req, _res) => {
  _res.render("index.ejs");
});
app.post("/submit", (_req, _res) => {
  const numLetters = _req.body["fName"].length + _req.body["lName"].length;
  _res.render("index.ejs", { numberOfLetters: numLetters });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
