const express = require('express')
const app = express()
const PORT = 4444
const session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge:5000
    }
  }))

app.get('/',(req,res)=>{
    res.send("All about cookie")
})

app.get("/setcookie",(req,res)=>{
    res.cookie('name','sparsh')
    res.cookie('location','vrindavan')
    res.cookie('university','GLA')

    res.send('we set the cookies!')
})

app.listen(PORT, () => {
console.log('http://localhost:' + PORT)
})