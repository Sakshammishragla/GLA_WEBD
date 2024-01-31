const express = require("express")
const app = express()
const PORT = 4444;

app.use("/",(req,res,next)=>{
    console.log("Yeh hamara middleware hai!");
    // console.log(req);
    next()
})

app.get("/",(req,res)=>{
    res.send("yeh hamara response hai!")
})

app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
})