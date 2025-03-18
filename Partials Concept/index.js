import express from "express";
const app = express();
const port = 3000;

app.get("/", (_req, _res) => {
  const data = {
    title: "EJS Tags",
    // fullYear:new Date().getFullYear(),
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>hi buddy its me rehan rasool dar</strong>",
  };
  _res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
