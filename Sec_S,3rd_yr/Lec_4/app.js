const express = require("express")
const app = express()
const path = require("path")
const PORT = 4444;

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs');

let postsArr = []

app.get("/home", (req, res) => {
    res.render('home')
})

app.get("/profile", (req, res) => {
    res.render('profile', {
        name: "Saksham",
        Lastname: "Mishra"
    })
})

app.post("/addpost", (req, res) => {
    const { name, Class, post } = req.body
    const obj = {
        name,
        Class,
        post
    }
    postsArr.push(obj)
    res.redirect('/getpost')
})

app.get("/getpost", (req, res) => {
    res.render('blog', {
        postsArr
    })
})

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})