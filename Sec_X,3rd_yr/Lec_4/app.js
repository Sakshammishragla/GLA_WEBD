const express = require("express")
const app = express()
const path=require("path")
const PORT = 4444;
// let task=[]

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))

app.use("/", (req, res,next) => {
    console.log("Middleware");
    next()
})

// app.get("/path/:name/:class",(req,res)=>{
//     // res.send("abhishek")
//     console.log(req.params);
//     res.send(req.params)
// })

app.get("/path2",(req,res)=>{
    console.log(req.query);
})

// app.get("/path2",(req,res)=>{
//     console.log(req.query);
// })

// app.post("/addtask",(req,res)=>{
//   console.log(req.body);
//   task.push(req.body)
//   res.redirect("/gettask")
// })

// app.get("/gettask",(req,res)=>{
//     res.send(task)
// })

// app.get("/addtask",(req,res)=>{
//     console.log(req.query);
//     res.send("data recieved")
// })

app.post("/addtask",(req,res)=>{
    console.log(req.body);
    res.send("data recieved")
})

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})