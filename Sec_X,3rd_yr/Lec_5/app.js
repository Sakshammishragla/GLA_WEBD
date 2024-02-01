const express = require("express")
const app = express()
const path=require("path")
const PORT = 4444;
const hbs=require('hbs')

let blogarr=[]
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.post("/addblogs",(req,res)=>{
    const {author,cateogry,blog}=req.body
    const obj={
        author,
        cateogry,
        blog
    }
    blogarr.push(obj)
    res.send("data recieved")
})

// app.get("/getblogs",(req,res)=>{
//     res.render('blogpage',{
//         firstName:"Saksham",
//         lastName:"Mishra"
//     })
// })

app.get("/getblogs",(req,res)=>{
    res.render('blogpage',{
     blogarr
    })
})

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})