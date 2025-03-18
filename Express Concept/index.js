import express from "express";
// these two lines of code takes the path from the root directory.
import { dirname } from "path";
import { fileURLToPath } from "url";
// middle ware for pre-processing
import bodyParser from "body-parser";
// middle ware for logging in
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
// variable name
var bandName = "";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
// creating middleware
app.use(bandNameGenerator);
// creating own middleware.
function bandNameGenerator(_req, _res, next) {
  console.log("Requested Method :", _req.body);
  bandName = _req.body["street"] + _req.body["pet"];
  next();
}
// root or home page or /Endpoint
// for getting data
app.get("/", (_req, _res) => {
  _res.sendFile(__dirname + "/public/index.html");
});
// for sending data
app.post("/submit", (_req, _res) => {
  _res.send(`your band name is = ${bandName} ⚡😁.`);
});
// Running server stuff 
app.listen(port, () => {
  console.log(`Buddy your server is listening on port ${port}.🤷`);
});
