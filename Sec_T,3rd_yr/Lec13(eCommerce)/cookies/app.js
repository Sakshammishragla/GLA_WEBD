const express = require('express')
const app = express()
const path = require('path')
const PORT = 4444

app.get("/",(req,res)=>{
    res.send("All about cookies")
})

app.get("/setcookies",(req,res)=>{
    res.cookie("name","saksham")
    res.cookie("discount","20%")
    res.cookie("location","vrindavan")
    res.send("we set the cookies")
})

app.listen(PORT, () => {
console.log('http://localhost:' + PORT)
})