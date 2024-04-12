const express = require('express')
const app = express()
const path = require('path')
const PORT = 5555

app.get("/",(req,res)=>{
    res.send("All about cookie")
})

app.get("/setcookie",(req,res)=>{
    res.cookie("name","yash")
    res.cookie("location","vrindavan")
    res.cookie("mode","light")
    res.send("we set the cookies")
})

app.listen(PORT, () => {
console.log('http://localhost:' + PORT)
})