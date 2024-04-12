const express = require('express')
const app = express()
const path = require('path')
const PORT = 4444
const session=require("express-session")

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

  app.get("/",(req,res)=>{
    res.send("session establised!")
  })

  app.get("/createuser",(req,res)=>{
    req.session.user="kartik"
    res.redirect("/greet")
  })

  app.get("/greet",(req,res)=>{
    res.send(`user created in session named ${req.session.user}`)
  })

app.listen(PORT, () => {
console.log('http://localhost:' + PORT)
})