const express =require("express");
// it will work same as app.use()
const router = express.Router();
// another way of assining root directory path .this will also take the path from the root directory
const rootDirectory= require("../utility/path");
const path=require("path");
// /admin/addProduct
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDirectory,'views','add-product.html'));   
 });
//  /admin/addproduct
 router.post('/add-product',(req,res,next)=>{
     res.redirect("/");
 });
 module.exports=router;