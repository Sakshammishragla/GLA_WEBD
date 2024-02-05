const express = require("express")
const app = express()
const PORT = 4444;
const path=require("path")

// console.log(app);

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))


app.get("/form",(req,res)=>{
    res.sendFile(path.join(__dirname,"form.html"))
})

// app.get("/addtask",(req,res)=>{
//     console.log(req.query);
//     res.send("Task added!")
// })

app.post("/addtask",(req,res)=>{
    console.log(req.body);
    res.send("Task added!")
})

// app.use("/",(req,res,next)=>{
//     console.log("Yeh hamara middleware hai!");
//     // res.send("middleware ka response")
//     next()
// })

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'))
// })

// app.get("/style.css",(req,res)=>{
//     res.sendFile(path.join(__dirname,'style.css'))
// })

app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
})