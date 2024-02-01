const express=require("express")
const app=express()
const path=require("path")
const PORT=4444;


app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))


app.get("/addtask",(req,res)=>{
  console.log(req.query);
  res.send("Data Recieved!")
})

app.post("/addtask",(req,res)=>{
    console.log(req.body);
    res.send("Data recieved using post!")
})


app.listen(PORT,()=>{
  console.log("http://localhost:"+PORT);
})