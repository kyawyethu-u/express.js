const express = require("express");
const path = require("path");

const router = express.Router(); //router can be named as likely

//(2)changed router. insted app.
router.get("/",(req,res)=>{
    // res.send("<h1>I am home page</h1>")
    // res.sendFile("./views/homepage.html",{root: __dirname,});//sending static html file without path module
    res.sendFile(path.join(__dirname,"..","views","homepage.html"))
})

router.get("/post",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","postpage.html"))
})

module.exports = router;