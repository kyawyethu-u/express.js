const express = require("express");
const path = require("path");

const router = express.Router(); 
const {posts} = require("./admin");

router.get("/",(req,res)=>{
    console.log(posts)
    // res.sendFile(path.join(__dirname,"..","views","homepage.html"))
    res.render("home",{title: "Hello world",postsArr: posts}); //render home.ejs using ejs
})

router.get("/post",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","postpage.html"))
})

module.exports = router;