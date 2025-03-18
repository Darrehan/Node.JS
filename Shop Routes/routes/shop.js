const express =require("express");
const router = express.Router();
// node native module.
const path=require("path");
 router.get('/',(req,res)=>{
    // this line of code takes the path from the root directory.
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
 });
 module.exports=router;