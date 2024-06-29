const express = require("express");
const path = require("path")
const bodyparser = require("body-parser");//body parsing middleware

const app = express();

 app.set("view engine","ejs");//declare to use ejs with 2 line
 app.set("views","views")

const postRoutes = require("./routes/post");
const {adminRoutes} = require("./routes/admin");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyparser.urlencoded({extended: false}))
// app.use(express.json());  //watching obj datas from form submit

app.use("/post",(req,res,next)=>{
    console.log("I am post middleware")
    next();
});
app.use((req,res,next)=>{
    console.log("I am parent middleware")
    next();
});
app.use("/admin",(req,res,next)=>{
    console.log("Admin middleware approved");
    next();
})

app.use("/admin",adminRoutes);
app.use(postRoutes);  





app.listen(8080);