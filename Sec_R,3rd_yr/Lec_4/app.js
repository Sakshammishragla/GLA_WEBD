const express=require("express")
const app=express()
const path=require("path")
const PORT=4444;


app.use(express.static(path.join(__dirname,'public')))


app.post("/addtask",(req,res)=>{
  console.log(req.query);
  res.send("Data recieved")
})

app.listen(PORT,()=>{
  console.log("http://localhost:"+PORT);
})