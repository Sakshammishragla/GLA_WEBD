const express = require('express')
const app = express()
const path = require('path')
const PORT = 4455


app.get("/",(req,res)=>{
    res.send("All about cookies")
})

app.get("/setcookie",(req,res)=>{
    res.cookie("name","divyanshi")
    res.cookie("location","vrindavan")
    res.cookie("university","GLA")
    res.send("cookies set successfully!")
})

app.listen(PORT, () => {
console.log('http://localhost:' + PORT)
})