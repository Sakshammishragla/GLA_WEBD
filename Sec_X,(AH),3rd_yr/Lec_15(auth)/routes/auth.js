const express = require("express")
const router = express.Router()
const User = require("../model/User")

router.get("/signup", (req, res) => {
    res.render("auth/signup")
})

router.post("/signup", async (req, res) => {
    const { username, password, email } = req.body
    let user = new User({ username, password, email })
    let newUser = await User.register(user, password)
    res.send(newUser)
})
module.exports = router