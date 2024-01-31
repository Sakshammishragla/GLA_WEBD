const express=require("express")
const app=express()
const path=require("path")
const PORT=4444;


app.use(express.static(path.join(__dirname,'public')))

// app.use("/",(req,res,next)=>{
//     // res.send("is request ka response!")
//     // res.sendFile(filePath)
//     console.log("middleware");
//     next()
// })

// app.get("/",(req,res)=>{
//   res.sendFile(path.join(__dirname,'index.html'))
// })

// app.get("/style.css",(req,res)=>{
//   res.sendFile(path.join(__dirname,'style.css'))
// })

// app.get("/path/:name/:class",(req,res)=>{
//   console.log(req.params);
//   // res.send(req.params)
// })

app.get("/path2",(req,res)=>{
  console.log(req.query);
})

app.listen(PORT,()=>{
  console.log("http://localhost:"+PORT);
})