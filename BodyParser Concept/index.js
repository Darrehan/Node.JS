import morgan from "morgan";
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
const _dirname = dirname(fileURLToPath(import.meta.url));
app.listen(port, (_req, _res) => {
  console.log(`your server is running on port ${port}.'🤷⚡`);
});
// creating own middleware
function requestHandler(_req, _res, next) {
  app.get("/", (_req, _res) => {
    const toDay = new Date();
    // this inbuilt getDay method will return integer number from 0 t 6 
    const day = toDay.getDay();
    const bowl = ["mango", "orange", "apple", "penuts butter", "🤷🤷‍♂️🤷🤷‍♂️⚡"];
    const type = "a week day buddy 🤷‍♂️🤷";
    const adv = "its time to work hard buddy ⚡.";
    if (day === 0 && day === 6) {
      const type = "The Weekend Buddy 🤷‍♂️🤷";
      const adv = "its time to have some fun buddy  ⚡.";
    }
    // passing javascript variable object
    _res.render("index.ejs", {
      dayType: type,
      advice: adv,
      fruits: bowl,
    });
  });
  next();
}
app.use(requestHandler);
