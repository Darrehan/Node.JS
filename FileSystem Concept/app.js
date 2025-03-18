// Running Server File commen.js syntax
// node native module built in modules
const http = require("http");
// exporting external routes handler
const routes = require("./routes");
const server = http.createServer(routes);
server.listen(3000);
