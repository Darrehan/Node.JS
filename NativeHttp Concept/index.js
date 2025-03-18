//node native module ie built in module.
import http from "http";
// node npm module
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { readFile, writeFile } from "fs";
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
// creating server with node native
const server = http.createServer((_req, _res) => {
  console.log(`your server is running on port : ${port}.🤷‍♂️`);
  const url = _req.url;
  const method = _req.method;
  console.log(url);
  console.log(method);
  if (url === "/") {
    _res.write(
      "<body><input action='/message' type='text' method='POST'><button type='submit'>send</button></body>"
    );
    _res.write(
      "<body><input action='/rehan' type='text' method='POST'><button type='submit'>send</button></body>"
    );
    _res.end();
  } else if (url === "/message" && method == "POST") {
    writeFile("users.txt", "hi buddy its me rehan 🤷‍♂️", (error) => {
      if (error) throw error;
      console.log("your file have been saved successfull 😒.");
    });
    readFile("users.txt", "utf8", (error, data) => {
      if (error) throw error;
      console.log(data);
      
    });
  } else if (url === "/rehan" && method === "POST") {
    _res.write("<h1>hi buddy 😒😒😒😒😒😒</h1>");
  }
});
server.listen(port);
