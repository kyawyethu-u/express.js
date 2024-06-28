const express = require("express");
const path = require("path")

const app = express();

const postRoutes = require("./routes/post");
const addRoutes = require("./routes/admin");

app.use(express.static(path.join(__dirname, "public")));//register (public) directory as middleware to be useable for external link

app.use("/post",(req,res,next)=>{
    console.log("I am post middleware")
    next();
})
app.use(postRoutes);  //  module registered
app.use(addRoutes);

app.use((req,res,next)=>{
    console.log("I am middleware two")
    next();
})
// app.get("/",(req,res)=>{
//     // res.send("<h1>I am home page</h1>")
//     // res.sendFile("./views/homepage.html",{root: __dirname,});//sending static html file without path module
//     res.sendFile(path.join(__dirname,"views","homepage.html"))
// })

// app.get("/post",(req,res)=>{
//     res.sendFile(path.join(__dirname,"views","postpage.html"))
// })   
// sent it to post.js

app.listen(8080);