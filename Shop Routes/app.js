const path=require("path");
const express =require("express");
const http=require("http");
const morgan=require("morgan");
const app=express();
app.use(morgan("combined"));
app.use(express.urlencoded({extended:true}));
// this line of code takes the path from the root directory.
app.use(express.static(path.join(__dirname,"public")));
const adminroutes =require("./routes/admin.js");
const shoproutes =require("./routes/shop.js");
// path filtering 
app.use('/admin',adminroutes);
app.use(shoproutes);
app.use((req,res,next)=>{
// here we are already in the root folder we don't need to write '../' it takes us to up a level folder
  res.status(404).sendFile(path.join(__dirname,"views","404-Error.html"));
 });
//  here i am using the node native http module to create the server by passing the express app as an argument.
 const server =http.createServer(app);
 server.listen(3000);