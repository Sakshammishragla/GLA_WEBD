const express = require("express")
const User = require("../model/User")
const router = express.Router()
const passport = require("passport")

router.get("/signup", (req, res) => {
    res.render("auth/signup")
})

router.post("/signup", async (req, res) => {
    const { username, password, email } = req.body
    let newUser = new User({ username, email, password })
    let user = await User.register(newUser, password)
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
        req.flash("success", `Welcome back ${req.user.username}`)
        res.redirect('/products');
    });

router.get('/logout',(req, res) => {
    req.logout(() => {
        res.redirect("/login")
    })
})

module.exports = router