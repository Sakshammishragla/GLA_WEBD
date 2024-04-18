const express = require("express")
const router = express.Router()
const User = require("../model/User")
const passport=require("passport")

router.get("/signup", (req, res) => {
    res.render("auth/signup")
})

router.post("/signup", async (req, res) => {
    const { username, password, email } = req.body
    let user = new User({ username, password, email })
    let newUser = await User.register(user, password)
    req.flash("success","User registered successfully!")
    res.redirect("/login")
})

router.get("/login", (req, res) => {
    res.render("auth/login")
})

router.post('/login',
    passport.authenticate('local',
        {
            failureRedirect: '/login',
            failureMessage: true
        }),
    function (req, res) {
        req.flash("success",`welcome back ${req.user.username}`)
        res.redirect('/products');
    });

    router.get('/logout',(req,res)=>{
        req.logout(()=>{
            res.redirect("/login")
        })
    })
module.exports = router