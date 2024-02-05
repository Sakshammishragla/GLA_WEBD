const express = require("express")
const app = express()
const PORT = 4444;

// console.log(app);

app.use("/",(req,res,next)=>{
    console.log("Yeh hamara middleware hai!");
    // res.send("middleware ka response")
    next()
})

app.get("/",(req,res)=>{
    res.send("yeh hamara response hai!")
})

// app.get("/path/abhishek",(req,res)=>{
//     res.send("abishek")
// })

// app.get("/path/:name/:class",(req,res)=>{
//     // res.send("abishek")
//     console.log(req.params);
//     res.send(req.params.name)
// })


app.get("/path",(req,res)=>{
    console.log(req.query);
})

app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
})