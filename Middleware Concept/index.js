// using   ECMA script 6 module syntax
import express from "express";
import bodyParser from "body-parser";
// these two lines of code takes the path from   the root directory
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// taking the object of express.
const app = express();
const port = 3000;
var userIsAuthorised = false;
app.use(bodyParser.urlencoded({ extended: true }));
// creating  my own middleware
function passwordCheck(_req, _res, next) {
  const password = _req.body["password"];
  if (password === "ALLAH") {
    userIsAuthorised = true;
  }
  next();
}
app.use(passwordCheck);
// root ie home ie /end points.
//_res.send,sendFile,sendStatus,redirect() ,locals,write, end,status
app.get("/", (_req, _res) => {
  _res.sendFile(__dirname + "/public/index.html");
});
app.post("/check", (_req, _res) => {
  if (userIsAuthorised) {
    _res.sendFile(__dirname + "/public/secret.html");
  } else {
    _res.sendFile(__dirname + "/public/index.html");
    //Alternatively  redirecting to the main _res.redirect("/");
  }
});
app.listen(port, () => {
  console.log(`Buddy Your Server is Running on Port : ${port}🤷.`);
});