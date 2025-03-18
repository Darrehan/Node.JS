//the file containing routes.
//node native module file system.
const fs = require("fs");
// creating my own middle ware for handling routes
const requestsHandler = (req, res) => {
  // with the help of req object we can get the url and method
  const url = req.url;
  // with the help of req object we can get the method
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    // declaration of an array
    const body = [];
    // adding on event listner to get the chunk of data from the body
    req.on("data", (chunk) => {
      // console.log(chunk);
      // pushing chunk of data to the body array 
      body.push(chunk);
    });
    req.on("end", () => {
      // concatinating body content in buffer
      const parsedBody = Buffer.concat(body).toString();
      // Split a string into substrings using the specified separator and return them as an array.
      const message = parsedBody.split("=")[1];
      // write file sync means synchronous till it gets executed block rest code.
      fs.writeFileSync("message.txt", message);
    });
    // redirecting
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};
module.exports = requestsHandler;
// we can also export in the form of javascript variable object.
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';
