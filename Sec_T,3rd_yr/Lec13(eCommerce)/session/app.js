const express = require('express')
const app = express()
const PORT = 5555
const session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

  app.get("/",(req,res)=>{
    res.send("session established")
  })

  app.get("/setuser",(req,res)=>{
    req.session.user="saksham"
    res.send(`user name is ${req.session.user}`)
  })

  app.get("/viewcount",(req,res)=>{
    if(req.session.count){
        req.session.count+=1;
    }
    else{
        req.session.count=1;
    }
    res.send(`user visited the site ${req.session.count} times` )
  })

app.listen(PORT, () => {
console.log('http://localhost:' + PORT)
})