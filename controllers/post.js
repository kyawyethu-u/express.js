const posts =[]; //supposed model



exports.createPost =(req,res)=>{
    const {title,description,photo} = req.body;//destructure form's name's key
  console.log(`Title value is ${title} & description is ${description}`);
  posts.push({
    id: Math.random(),                //javascript random method    
    title,
    description,
    photo,

});
 

    res.redirect("/",); 
};

exports.renderCreatePage = (req,res)=>{
    // res.sendFile(path.join(__dirname,"..","views","addpost.html"))
    res.render("addpost",{title: "Post create"})//"addpost", value is must
};

exports.renderHomePage = (req,res)=>{
    console.log(posts)
    // res.sendFile(path.join(__dirname,"..","views","homepage.html"))
    res.render("home",{title: "Hello world",postsArr: posts}); //render home.ejs using ejs
}

exports.getPost = (req,res)=>{
    const postId = Number(req.params.postId);
    console.log(postId)
    const post = posts.find(post=>post.id== postId);
    console.log(post);
    res.render("details", {title: "Post details page",post})
}