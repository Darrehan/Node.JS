// taking input from user using inquirer npm  module.
// inside prompt we are passing java script variable object inside curley braceses.
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs, { fstat} from "fs";
import { error } from 'console';
inquirer
  .prompt([
    {
        message:"type your url buddy",
        name:"URL",
    },
  ])
  .then((answers) => {
    //   turning url into image .   QR- node module.
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fstat.createWriteStream("qr_img.png"));
    fs.writeFile("url.txt",url,(error)=>{
   if(error) throw error;
    console.log("the file has been saved successfully 😒.");
    });
     
  })
  .catch((err) => {
    if (error.isTtyError) {
     console.log("couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  });