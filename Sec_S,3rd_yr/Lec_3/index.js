const express=require("express")
const app=express()
const path=require("path")
const PORT=4444;

// console.log(app);
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))

app.use("/",(req,res,next)=>{
  console.log("Middleware");
  // console.log(req);
  next()
})

app.get("/path/abhishek",(req,res)=>{
  res.send("Abhishek")
})

app.get("/path/:name/:class",(req,res)=>{
  console.log(req.params);
  res.send(req.params.name)
})

app.get("/path2",(req,res)=>{
  console.log(req.query);
})

app.post("/addtask",(req,res)=>{
  console.log(req.body);
})

// app.get("/",(req,res)=>{
//   // res.send("Yeh / ka response hai!")
//   res.sendFile(path.join(__dirname,'index.html'))
// })

// app.get("/style.css",(req,res)=>{
//   res.sendFile(path.join(__dirname,'style.css'))
// })


app.listen(PORT,()=>{
  console.log("http://localhost:"+PORT);
})