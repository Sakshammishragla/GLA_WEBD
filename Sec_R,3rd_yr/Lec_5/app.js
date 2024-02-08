const express = require("express")
const app = express()
const path = require("path")
const PORT = 4444;
const hbs = require("hbs")

let blogs = []
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs')




// app.get("/getblog",(req,res)=>{
//     res.render("blogpage",{
//         firstname:"saksham",
//         lastname:"mishra"
//     })
// })


// app.get("/getblog",(req,res)=>{
//     res.render("blogpage",{ 
//         people:["saksham","abhishek","suyash"]
//     })
// })

app.post("/addblog", (req, res) => {
    console.log(req.body);
    const {name,Class,blog}=req.body
    const obj={
       name,
       Class,
       blog
    }
    blogs.push(obj)
    res.redirect("/getblog")
})

app.get("/getblog",(req,res)=>{
    res.render("blogpage",{
        blogs
    })
})

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})