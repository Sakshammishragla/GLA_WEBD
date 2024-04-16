const express = require("express")
const router = express.Router()
const User = require("../model/User")

router.get("/signup", (req, res) => {
    res.render("auth/signup")
})

router.post("/signup", async (req, res) => {
    const { username, password, email } = req.body
    let newuser = new User({ username, password, email })
    let user = await User.register(newuser, password)
    res.send(user)
})

module.exports = router