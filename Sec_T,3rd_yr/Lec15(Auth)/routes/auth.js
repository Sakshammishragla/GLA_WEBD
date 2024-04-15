const express = require("express")
const User = require("../model/User")
const router = express.Router()
const passport = require("passport")

router.get("/signup", (req, res) => {
    res.render("auth/signup")
})

router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body
    const newUser = new User({ username, email, password })
    let user = await User.register(newUser, password)
    res.send(user)
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
        req.flash('success', `welcome back ${req.user.username}`)
        res.redirect('/products');
    });

router.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/login');
    });
});

module.exports = router