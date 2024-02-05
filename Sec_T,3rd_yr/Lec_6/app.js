const express = require("express")
const app = express()
const PORT = 4444;
const path=require("path")

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'hbs');

let namearr=["gagan","priyanshu","mohan","shyam"]
// app.get("/path",(req,res)=>{
//     res.render("random",{
//        firstname:"saksham",
//        lastname:"mishra" 
//     })
// })

app.get("/path2",(req,res)=>{
    res.render("array",{
        namearr
    })
})

app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
})