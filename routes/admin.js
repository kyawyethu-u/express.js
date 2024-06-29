const express = require("express")
const path = require("path")

const router = express.Router()
const posts =[];

router.get("/create-post",(req,res)=>{
        // res.sendFile(path.join(__dirname,"..","views","addpost.html"))
        res.render("addpost",{title: "Post create"})//"addpost", value is must
});  

router.post("/",(req,res)=>{
    const {title,description} = req.body;//destructure form's name's key
  console.log(`Title value is ${title} & description is ${description}`);
  posts.push({title,description});
 

    res.redirect("/");
    // console.log(req.body);   
    // res.json(req.body);
})

module.exports = {adminRoutes: router,posts};