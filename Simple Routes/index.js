import express from "express";
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Buddy your server is running on port ${port}.🤷🤷‍♂️🤷😁 `);
});
// get method for getting data. / means root home  and /End Points
app.get("/", (_req, _res) => {
  _res.send("<h1>Helo Buddy From Root Home Page! </h1>");
});
// for sending data
app.post("/register", (_req, _res) => {
  _res.sendStatus(201);
});
// for updating whole data eg
app.put("/user/rehan", (_req, _res) => {
  _res.sendStatus(200);
});
// for updating single feild data eg
app.patch("/user/rehan", (_req, _res) => {
  _res.sendStatus(200);
});
// for deleting user eg
app.delete("/user/rehan", (_req, _res) => {
  _res.sendStatus(200);
});
